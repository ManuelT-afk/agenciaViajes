import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { Destinos } from './components/destinos/destinos';
import { Promociones } from './components/promociones/promociones';
import { Footer } from './components/footer/footer';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [App, Navbar, Header, Destinos, Promociones, Footer],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App, Navbar, Header,Destinos,Promociones,Footer],
})
export class AppModule {}
