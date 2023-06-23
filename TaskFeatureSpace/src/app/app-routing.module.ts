import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Lazyloading
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/postcode/postcode.module').then(
        (x) => x.PostcodeModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
