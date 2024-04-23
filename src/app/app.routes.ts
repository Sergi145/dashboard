import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: ()=> import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent:()=> import('./dashboard/pages/pages-change-detection/pages-change-detection.component')
      },
      {
        path: 'control-flow',
        title: 'Control flow',
        loadComponent:()=> import('./dashboard/pages/pages-control-flow/pages-control-flow.component')
      }
      ,
      {
        path: 'defer-options',
        title: 'defer options',
        loadComponent:()=> import('./dashboard/pages/pages-defer-options/pages-defer-options.component')
      },
      {
        path: 'defer-views',
        title: 'defer-views',
        loadComponent:()=> import('./dashboard/pages/pages-defer-views/pages-defer-views.component')
      },
      {
        path: 'user/:id',
        title: 'user',
        loadComponent:()=> import('./dashboard/pages/pages-user/pages-user.component')
      },
      {
        path: 'users',
        title: 'users',
        loadComponent:()=> import('./dashboard/pages/pages-users/pages-users.component')
      },
      {
        path: 'view-transition',
        title: 'view-transition',
        loadComponent:()=> import('./dashboard/pages/pages-view-transition/pages-view-transition.component')
      },
      {
        path: 'view-transition2',
        title: 'view-transition2',
        loadComponent:()=> import('./dashboard/pages/pages-view-transition/pages-view-transition2.component')
      },
      {
       path: '',
       redirectTo:'control-flow',
       pathMatch: 'full'
      }

    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }

];
