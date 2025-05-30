import { Routes } from '@angular/router';
import { TelephoneListComponent } from './telephone-list/telephone-list.component';
import { TelephoneAddComponent } from './telephone-add/telephone-add.component';

export const routes: Routes = [

    {path : '', component:TelephoneListComponent},
    {path : 'create', component:TelephoneAddComponent},
    {path : 'edit/:id', component:TelephoneAddComponent}

];
