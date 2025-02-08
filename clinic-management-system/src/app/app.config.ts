import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from './environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'clinic-management-system-223e2',
        appId: '1:564049835327:web:b589f5397d3f706cfecf8a',
        storageBucket: 'clinic-management-system-223e2.appspot.com',
        apiKey: 'AIzaSyD5_FxAKb1YWXG2S9UUFErbPzNG4CMCrEA',
        authDomain: 'clinic-management-system-223e2.firebaseapp.com',
        messagingSenderId: '564049835327',
        measurementId: 'G-LXC6CBF1RC',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFunctions(() => getFunctions()),
    provideStorage(() => getStorage()),
  ],
};
