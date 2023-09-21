import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cc62ea7c56ed437eae70fafcd9c99a72",
  },
});

class APIClient<T> {
  enpoint: string;

  constructor(endpint: string) {
    this.enpoint = endpint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.enpoint, config)
      .then((res) => res.data);
  };
}

export default APIClient;
