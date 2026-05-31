import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirect empty path to /product
  { path: '', redirectTo: 'product', pathMatch: 'full' }, 
  
  // Standard routes
  { 
    path: 'product', 
    loadComponent: () =>
        loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            exposedModule: './Component',
        }).then((m) => m.AppComponent),
  },
  { 
    path: 'account', 
    loadComponent: () =>
        loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            exposedModule: './Component',
        }).then((m) => m.AppComponent),
  },
];
