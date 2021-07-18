import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'realiza-orcamento',
        loadChildren: () => import('./demo/views/orcamento/realizar-orcamento/realiza-orcamento.module').then(m => m.RealizaOrcamentoModule)
      },
      {
        path: 'solicita-orcamento',
        loadChildren: () => import('./demo/views/orcamento/solicita-orcamento/solicita-orcamento.module').then(m => m.SolicitaOrcamentoModule)
      },
      {
        path: 'clientes',
        loadChildren: () => import('./demo/views/admin/clientes/clientes.module').then(m => m.ClientesModule)
      },
      {
        path: 'reservas',
        loadChildren: () => import('./demo/views/admin/reservas/reservas.module').then(m => m.ReservasModule)
      },
      {
        path: 'fotos',
        loadChildren: () => import('./demo/views/fotos/fotos.module').then(m => m.FotosModule)
      },
      {
        path: 'contato',
        loadChildren: () => import('./demo/views/info/contato/contato.module').then(m => m.ContatoModule)
      },
      {
        path: 'social',
        loadChildren: () => import('./demo/views/info/social/social.module').then(m => m.SocialModule)
      },
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
