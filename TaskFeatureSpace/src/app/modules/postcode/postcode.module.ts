import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostcodeRoutingModule } from './postcode-routing.module';
import { UkPostCodeComponent } from './uk-post-code/uk-post-code.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PostCodeDetailsComponent } from './post-code-details/post-code-details.component';

@NgModule({
  declarations: [UkPostCodeComponent, PostCodeDetailsComponent],
  imports: [
    CommonModule,
    PostcodeRoutingModule,
    AutocompleteLibModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class PostcodeModule { }
