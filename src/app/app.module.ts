import { TecladosModule } from './views/teclados/teclados.module';
import { MousesModule } from './views/mouses/mouses.module';
import { SharedModule } from './shared/shared.module';
import { NavtreeComponent } from './template/navtree/navtree.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovimentacoesComponent } from './views/movimentacoes/movimentacoes.component';
import {MatSidenavModule} from '@angular/material/sidenav';


import { HomeService } from './views/home/home.service';
import { CabosService } from './views/cabos/cabos.service';
import { LoginService } from './views/login/login.service';

import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { APP_BASE_HREF } from '@angular/common';


import {MatToolbarModule} from '@angular/material/toolbar';
import { NavComponent } from './template/nav/nav.component';
import {MatListModule} from '@angular/material/list';
import { PainelComponent } from './views/painel/painel.component';
import { FormAtivosComponent } from './views/forms/form-ativos/form-ativos.component';
import { AtivosComponent } from './views/ativos/ativos.component';
import { CabosComponent } from './views/cabos/cabos.component';
import { AuthInterceptor } from './http-interceptor/auth-interceptor';
import { AuthGuard } from './guards/auth.guard';
import { FormCabosComponent } from './views/cabos/form-cabos/form-cabos.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { VerCaboComponent } from './views/cabos/ver-cabo/ver-cabo.component';
import { DelCaboComponent } from './views/cabos/del-cabo/del-cabo.component';
import {MatTreeModule} from '@angular/material/tree'
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { HistoricoCaboComponent } from './views/cabos/historico-cabo/historico-cabo.component';
import {CheckboxModule} from 'primeng/checkbox'
import {CalendarModule} from 'primeng/calendar';
import { MonitoresModule } from './views/monitores/monitores.module';
import { GabinetesModule } from './views/gabinetes/gabinetes.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MovimentacoesComponent,
    NavComponent,
    PainelComponent,
    FormAtivosComponent,
    AtivosComponent,
    CabosComponent,
    FormCabosComponent,
    VerCaboComponent,
    DelCaboComponent,
    NavtreeComponent,
    HistoricoCaboComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,   
    HttpClientModule,
    SharedModule,
    CheckboxModule,
    CalendarModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,    
    MatSnackBarModule,
    MatTreeModule,   
    MatDialogModule,
    MousesModule,
    TecladosModule,
    MonitoresModule,
    GabinetesModule
    
    
  ],
  providers: [AuthGuard, HomeService, CabosService, LoginService,
    {provide: APP_BASE_HREF, useValue: '/' }, 
    {provide:  HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
