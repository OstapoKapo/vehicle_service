import type { HttpService } from './http.service';
import type { IHttpConfig } from '../types/services.type';
import { cookies } from 'next/dist/server/request/cookies';

export class EnhancedWithAuthHttpService {
  constructor(private readonly httpService: HttpService) {}

  private async attachAuthHeader(config: IHttpConfig = {}): Promise<IHttpConfig> {
    let headers: Record<string, string> = {
      ...(config.headers || {})
    };

    if (typeof window === "undefined") {
      const cookieStore = await cookies();
      const cookieHeader = cookieStore
        .getAll()
        .map(c => `${c.name}=${c.value}`)
        .join("; ");

      if (cookieHeader.length > 0) {
        headers["Cookie"] = cookieHeader;
      }
    }

    return {
      ...config,
      headers
    };
  }

  async get<T>(url: string, config: IHttpConfig = {}): Promise<T> {
    return this.httpService.get<T>(url, await this.attachAuthHeader(config));
  }

  async post<T, D>(url: string, data: D, config: IHttpConfig = {}): Promise<T> {
    return this.httpService.post<T, D>(
      url,
      data,
      await this.attachAuthHeader(config)
    );
  }

  async put<T, D>(url: string, data: D, config: IHttpConfig = {}): Promise<T> {
    return this.httpService.put<T, D>(
      url,
      data,
      await this.attachAuthHeader(config)
    );
  }

  async patch<T, D>(url: string, data: D, config: IHttpConfig = {}): Promise<T> {
    return this.httpService.patch<T, D>(
      url,
      data,
      await this.attachAuthHeader(config)
    );
  }

  async delete<T>(url: string, config: IHttpConfig = {}): Promise<T> {
    return this.httpService.delete<T>(
      url,
      await this.attachAuthHeader(config)
    );
  }
}
