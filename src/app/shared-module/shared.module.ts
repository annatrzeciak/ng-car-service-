import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NameShortcutPipe } from './pipes/name-shortcut.pipe';
import { ImportantDirective } from './directives/important.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, NameShortcutPipe, ImportantDirective],
  declarations: [HeaderComponent, NameShortcutPipe, ImportantDirective]
})
export class SharedModule { }
