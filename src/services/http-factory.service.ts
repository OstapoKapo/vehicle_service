import axios from "axios";
import { HttpService } from "./http.service";
import { mainAxios } from "./mainAxios";

export class HttpFactoryService {
  createHttpService(target: "user" | "vehicle" = "user") {
	const instance = mainAxios;
    return new HttpService(instance, target);
  }

  createAuthHttpService(target: "user" | "vehicle" = "user") {
    const instance = mainAxios;

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

    return new HttpService(instance, target);
  }
}
