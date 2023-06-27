import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [BrowserModule],
  exports: [HeroComponent, ListComponent], // Exportarlos para que puedan ser accesibles a otro módulos
  declarations: [HeroComponent, ListComponent],
})
export class HeroesModule {}
