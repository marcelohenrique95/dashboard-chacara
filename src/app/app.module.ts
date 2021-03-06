import { ReservarDataComponent } from './demo/views/orcamento/reservar-data/reservar-data.component';
import { CadastraClienteComponent } from './demo/views/cadastro/cadastra-cliente/cadastra-cliente.component';
import { ClienteService } from './service/cliente.service';
import { OrcamentoService } from './service/orcamento.service';
import { SocialComponent } from './demo/views/info/social/social.component';
import { ContatoComponent } from './demo/views/info/contato/contato.component';
import { FotosComponent } from './demo/views/fotos/fotos.component';
import { ClientesComponent } from './demo/views/admin/clientes/clientes.component';
import { ReservasComponent } from './demo/views/admin/reservas/reservas.component';
import { RealizaOrcamentoComponent } from './demo/views/orcamento/realizar-orcamento/realiza-orcamento.component';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './theme/shared/shared.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavLogoComponent } from './theme/layout/admin/navigation/nav-logo/nav-logo.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import {NavigationItem} from './theme/layout/admin/navigation/navigation';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import {ToggleFullScreenDirective} from './theme/shared/full-screen/toggle-full-screen';
import { NgbButtonsModule, NgbDropdownModule, NgbTabsetModule, NgbTooltipModule, NgbActiveModal, NgbModalConfig, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';
import {HttpClientModule } from '@angular/common/http';
import { ReservaService } from './service/reserva.service';
import { ToastrModule } from 'ngx-toastr';
import { CadastraReservaComponent } from './demo/views/cadastro/cadastra-reserva/cadastra-reserva.component';
import { PageErrorComponent } from './demo/views/page-error/page-error.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AuthComponent,
    NavigationComponent,
    NavLogoComponent,
    NavContentComponent,
    NavGroupComponent,
    NavCollapseComponent,
    NavItemComponent,
    NavBarComponent,
    ToggleFullScreenDirective,
    NavLeftComponent,
    NavSearchComponent,
    NavRightComponent,
    ConfigurationComponent,
    RealizaOrcamentoComponent,
    ReservasComponent,
    ClientesComponent,
    FotosComponent,
    ContatoComponent,
    SocialComponent,
    CadastraClienteComponent,
    CadastraReservaComponent,
    ReservarDataComponent,
    PageErrorComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbButtonsModule,
    NgbTabsetModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  providers: [
    NavigationItem,
    OrcamentoService,
    ReservaService,
    ClienteService,
    NgbActiveModal,
    NgbModalConfig,
    NgbModal
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
