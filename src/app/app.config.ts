import { ApplicationConfig, 
  provideBrowserGlobalErrorListeners 
} from "@angular/core";

import { provideRouter } from "@angular/router";

import { provideClientHydration } from "@angular/platform-browser";

import { routes } from "./router/app.routes";


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), 
    provideClientHydration(),
  ]
};
