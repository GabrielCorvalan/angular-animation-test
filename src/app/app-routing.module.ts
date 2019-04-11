import { ThreeComponentComponent } from './three-component/three-component.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TwoComponentComponent } from './two-component/two-component.component';
import { FourComponentComponent } from './four-component/four-component.component';


const routes: Routes = [
  {
    path: '',
    component: TwoComponentComponent,
    data: {animation: 'Home' }
  },
  {
    path: 'two',
    component: TwoComponentComponent,
    data: {animation: 'Two' }
  },
  {
    path: 'three',
    component: ThreeComponentComponent,
    data: {animation: 'Three' }
  },
  {
    path: 'four',
    component: FourComponentComponent,
    data: {animation: 'Four' }
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
