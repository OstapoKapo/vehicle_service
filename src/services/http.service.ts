import type { IHttpClient, IHttpConfig, IResponse } from "../types/services.type";
import { getBaseUrl } from "@/utils/baseUrl.util";

export class HttpService {
  constructor(
    private readonly http: IHttpClient,
    private readonly service: 'user' | 'vehicle'
  ) {}

  private base() {
    return getBaseUrl(this.service);
  }

  private url(path: string) {
    return `${this.base()}/${path}`;
  }

  private headers(config?: IHttpConfig) {
    return {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
      }
    };
  }

  private check<T>(res: IResponse<T>): T {
    if (res.status >= 400) {
      throw new Error(JSON.stringify({
        response: {
          status: res.status,
          data: res.data
        }
      }));
    }
    return res.data;
  }

  async get<T>(path: string, config?: IHttpConfig): Promise<T> {
    const res = await this.http.get<IResponse<T>>(this.url(path), this.headers(config));
    return this.check(res);
  }

  async post<T, D>(path: string, data: D, config?: IHttpConfig): Promise<T> {
    const res = await this.http.post<IResponse<T>, D>(this.url(path), data, this.headers(config));
    return this.check(res);
  }

  async put<T, D>(path: string, data: D, config?: IHttpConfig): Promise<T> {
    const res = await this.http.put<IResponse<T>, D>(this.url(path), data, this.headers(config));
    return this.check(res);
  }

  async patch<T, D>(path: string, data: D, config?: IHttpConfig): Promise<T> {
    const res = await this.http.patch<IResponse<T>, D>(this.url(path), data, this.headers(config));
    return this.check(res);
  }

  async delete<T>(path: string, config?: IHttpConfig): Promise<T> {
    const res = await this.http.delete<IResponse<T>>(this.url(path), this.headers(config));
    return this.check(res);
  }
}
