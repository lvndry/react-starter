import axios, { AxiosInstance } from "axios";

export class HTTPClient {
  public baseURL: string;
  public client: AxiosInstance;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.client = axios.create({ baseURL });
  }
}
