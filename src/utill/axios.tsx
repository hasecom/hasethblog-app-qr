
import axios, { AxiosResponse } from 'axios';
export async function fetchWithoutData(path:string):Promise<AxiosResponse> {
  try {
    const response:AxiosResponse = await axios.get(
      path,
      {headers:{'Content-Type': 'application/json'}}
    )
    return response;
  } catch (error) {
    throw error;
  }
}
export async function fetchWithData<T>(data:T,path:string):Promise<AxiosResponse> {
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