import { TecladosModule } from './views/teclados/teclados.module';
import { MousesModule } from './views/mouses/mouses.module';
import { TecladosService } from './views/teclados/teclados.service';
import { SharedModule } from './shared/shared.module';
import { NavtreeComponent } from './template/navtree/navtree.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovimentacoesComponent } from './views/movimentacoes/movimentacoes.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';


import { HomeService } from './views/home/home.service';
import { CabosService } from './views/cabos/cabos.service';
import { LoginService } from './views/login/login.service';

import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { APP_BASE_HREF } from '@angular/common';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavComponent } from './template/nav/nav.component';
import {MatListModule} from '@angular/material/list';
import { PainelComponent } from './views/painel/painel.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { FormAtivosComponent } from './views/forms/form-ativos/form-ativos.component';
import { AtivosComponent } from './views/ativos/ativos.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { CabosComponent } from './views/cabos/cabos.component';
import { AuthInterceptor } from './http-interceptor/auth-interceptor';
import { AuthGuard } from './guards/auth.guard';
import { FormCabosComponent } from './views/cabos/form-cabos/form-cabos.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { VerCaboComponent } from './views/cabos/ver-cabo/ver-cabo.component';
import { DelCaboComponent } from './views/cabos/del-cabo/del-cabo.component';
import {MatTreeModule} from '@angular/material/tree'
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import { HistoricoCaboComponent } from './views/cabos/historico-cabo/historico-cabo.component';
import { TecladosComponent } from './views/teclados/teclados.component';
import { FormTecladoComponent } from './views/teclados/form-teclado/form-teclado.component';
import { DelTecladoComponent } from './views/teclados/del-teclado/del-teclado.component';
import { VerTecladoComponent } from './views/teclados/ver-teclado/ver-teclado.component';
import {CheckboxModule} from 'primeng/checkbox'
import {CalendarModule} from 'primeng/calendar';





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
    TecladosComponent,
    FormTecladoComponent,
    DelTecladoComponent,
    VerTecladoComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,   
    MatPaginatorModule,
    MatFormFieldModule,
    
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,
    MatTreeModule,
    MatMenuModule,
    MatTooltipModule,
    MatDialogModule,
    SharedModule,
    CheckboxModule,
    CalendarModule,
    MousesModule,
    TecladosModule
    
  ],
  providers: [AuthGuard, HomeService, CabosService, LoginService, TecladosService,
    {provide: APP_BASE_HREF, useValue: '/' }, 
    {provide:  HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
