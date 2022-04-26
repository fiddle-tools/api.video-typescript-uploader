import { AbstractUploader, CommonOptions, DEFAULT_CHUNK_SIZE, MAX_CHUNK_SIZE, MIN_CHUNK_SIZE, VideoUploadResponse, WithAccessToken, WithApiKey, WithUploadToken } from "./abstract-uploader";

interface UploadOptions {
    file: File;
    chunkSize?: number;
}

export interface VideoUploaderOptionsWithUploadToken extends CommonOptions, UploadOptions, WithUploadToken { }
export interface VideoUploaderOptionsWithAccessToken extends CommonOptions, UploadOptions, WithAccessToken { }
export interface VideoUploaderOptionsWithApiKey extends CommonOptions, UploadOptions, WithApiKey { }

export interface UploadProgressEvent {
    uploadedBytes: number;
    totalBytes: number;
    chunksCount: number;
    chunksBytes: number;
    currentChunk: number;
    currentChunkUploadedBytes: number;
}

export class VideoUploader extends AbstractUploader<UploadProgressEvent> {
    private file: File;
    private chunkSize: number;
    private chunksCount: number;
    private fileSize: number;
    private fileName: string;

    constructor(options: VideoUploaderOptionsWithAccessToken | VideoUploaderOptionsWithUploadToken | VideoUploaderOptionsWithApiKey) {
        super(options);

        if (!options.file) {
            throw new Error("'file' is missing");
        }

        if (options.chunkSize && (options.chunkSize < MIN_CHUNK_SIZE || options.chunkSize > MAX_CHUNK_SIZE)) {
            throw new Error(`Invalid chunk size. Minimal allowed value: ${MIN_CHUNK_SIZE / 1024 / 1024}MB, maximum allowed value: ${MAX_CHUNK_SIZE / 1024 / 1024}MB.`);
        }

        this.chunkSize = options.chunkSize || DEFAULT_CHUNK_SIZE;
        this.file = options.file;
        this.fileSize = this.file.size;
        this.fileName = this.file.name;

        this.chunksCount = Math.ceil(this.fileSize / this.chunkSize);
    }


    public async upload(): Promise<VideoUploadResponse> {
        let res: VideoUploadResponse;
        for(let i = 0; i < this.chunksCount; i++) {
            res = await this.uploadCurrentChunk(i);
            this.videoId = res.videoId;
        }
        return res!;
    }

    private uploadCurrentChunk(chunkNumber: number): Promise<VideoUploadResponse> {
        const firstByte = chunkNumber * this.chunkSize;
        const computedLastByte = (chunkNumber + 1) * this.chunkSize;
        const lastByte = (computedLastByte > this.fileSize ? this.fileSize : computedLastByte);
        const chunksCount = Math.ceil(this.fileSize / this.chunkSize);

        const progressEventToUploadProgressEvent = (event: ProgressEvent): UploadProgressEvent => {
            return {
                uploadedBytes: event.loaded + firstByte,
                totalBytes: this.fileSize,
                chunksCount: this.chunksCount,
                chunksBytes: this.chunkSize,
                currentChunk: chunkNumber + 1,
                currentChunkUploadedBytes: event.loaded,
            };
        };

        return this.xhrWithRetrier({
            onProgress: (event) => this.onProgressCallbacks.forEach(cb => cb(progressEventToUploadProgressEvent(event))),
            body: this.createFormData(this.file, this.fileName, firstByte, lastByte),
            parts: {
                currentPart: chunkNumber + 1,
                totalParts: chunksCount
            }
        });
    }
}