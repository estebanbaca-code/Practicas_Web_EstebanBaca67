import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';


import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

export const appConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule)
  ]
};


