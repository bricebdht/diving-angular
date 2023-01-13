import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar/navbar.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  declarations: [NavbarComponent, TopMenuComponent],
  imports: [CommonModule, MatToolbarModule, MatSidenavModule],
  exports: [NavbarComponent, TopMenuComponent],
})
export class UiModule {}
