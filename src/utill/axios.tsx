
import axios, { AxiosResponse } from 'axios';

export async function fetch<T>(data:T,path:string):Promise<AxiosResponse> {
  try {
    const response:AxiosResponse<T> = await axios.post(
      path,
      data,
      {headers:{'Content-Type': 'multipart/form-data'}}
    )
    return response;
  } catch (error) {
    throw error;
  }
}