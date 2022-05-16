import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { GroupButtonsComponent } from './components/group-buttons/group-buttons.component';
import { TitleTextareaComponent } from './components/title-textarea/title-textarea.component';
import { GroupLinkInputsComponent } from './components/group-link-inputs/group-link-inputs.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { SaveButtonComponent } from './components/save-button/save-button.component';
import { CollapseButtonComponent } from './components/collapse-button/collapse-button.component';
import { FormWrapperComponent } from './components/form-wrapper/form-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AppbarComponent,
    GroupButtonsComponent,
    TitleTextareaComponent,
    GroupLinkInputsComponent,
    ActionButtonComponent,
    SaveButtonComponent,
    CollapseButtonComponent,
    FormWrapperComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
