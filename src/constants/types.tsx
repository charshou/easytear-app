// Response types

interface Video {
    name: string;
    description: string;
    image: string;
}

export interface GetVideosResponse {
    videos: Video[]
}

export interface SuccessResponse {
    success: boolean
}
