import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovimentacoesComponent } from './views/movimentacoes/movimentacoes.component';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavComponent } from './template/nav/nav.component';
import {MatListModule} from '@angular/material/list';
import { PainelComponent } from './views/painel/painel.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { FormAtivosComponent } from './views/forms/form-ativos/form-ativos.component';
import { AtivosComponent } from './views/ativos/ativos.component';






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
    MatDividerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
