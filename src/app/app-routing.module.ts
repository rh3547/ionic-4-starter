import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guards/auth.guard';

const routes: Routes = [
  // Public Routes
  { path: '', loadChildren: '@pages/home/home.module#HomePageModule' },

  // Guarded Routes
  { path: 'test', loadChildren: '@pages/home/home.module#HomePageModule', canActivate: [AuthGuard] },
  
  // Default Redirect
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
