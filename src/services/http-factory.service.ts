import axios from "axios";
import { HttpService } from "./http.service";

export class HttpFactoryService {
  createHttpService() {
    return new HttpService(axios, "user");
  }

  createVehicleHttpService() {
    return new HttpService(axios, "vehicle");
  }

  createAuthHttpService() {
    const instance = axios.create();

    instance.interceptors.request.use((config) => {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("token");
        if (token) {
          const headersAny = config.headers as any;
          if (headersAny && typeof headersAny.set === "function") {
            headersAny.set("Authorization", `Bearer ${token}`);
          } else {
            config.headers = {
              ...(config.headers as any),
              Authorization: `Bearer ${token}`,
            };
          }
        }
      }
      return config;
    });

    return new HttpService(instance, "user");
  }
}
