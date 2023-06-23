import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UkPostCodeComponent } from './uk-post-code/uk-post-code.component';
import { PostCodeDetailsComponent } from './post-code-details/post-code-details.component';

const routes: Routes = [
  {
    path: '', component: UkPostCodeComponent,
    children: [
      { path: 'postcode', component: PostCodeDetailsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostcodeRoutingModule { }
