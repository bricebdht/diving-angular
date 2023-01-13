import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiModule } from '../ui/ui.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, MainRoutingModule, UiModule],
})
export class MainModule {}
