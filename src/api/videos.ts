import axios, { AxiosResponse } from 'axios';
import { GetVideosResponse, SuccessResponse } from '../constants/types';

const base = 'http://127.0.0.1:5000';

export const uploadVideo = async (file: File): Promise<AxiosResponse<SuccessResponse>> => {
  const formData = new FormData();
  formData.append('file', file);
  const response = axios.post<SuccessResponse>(`${base}/api/videos`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response;
};

export const getVideos = async (): Promise<AxiosResponse<GetVideosResponse>> => {
  const response = axios.get<GetVideosResponse>(`${base}/api/videos`);
  return response;
};

/* export const getVideos = async (): Promise<GetVideosResponse> => fetch('/api/videos')
  .then((response) => response.json());
 */
