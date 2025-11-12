import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import {provideTranslateService, TranslateLoader} from '@ngx-translate/core';
import {TRANSLATE_HTTP_LOADER_CONFIG, TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, provideHttpClient} from '@angular/common/http';


const httpLoaderFactory: () => TranslateLoader = () => new TranslateHttpLoader();

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,
      useValue: {
        prefix: '/Img/i18n/',
        suffix: '.json'
      }
    },
    provideTranslateService({
      fallbackLang: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
};
