import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NameShortcutPipe } from './pipes/name-shortcut.pipe';
import { ImportantDirective } from './directives/important.directive';
import { RoundTwoPlacePipe } from './pipes/round-two-place.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, NameShortcutPipe, RoundTwoPlacePipe, ImportantDirective],
  declarations: [HeaderComponent, NameShortcutPipe, RoundTwoPlacePipe, ImportantDirective]
})
export class SharedModule { }
