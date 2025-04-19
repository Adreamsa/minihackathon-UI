import { Routes } from '@angular/router';
import { LoginComponent }      from './login/login.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { ListComponent }       from './list/list.component';
import { SpellsComponent }     from './spells/spells.component';
import { SpellFormComponent }  from './spells/spell-form/spell-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login',      component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'list/:type', component: ListComponent },
  { path: 'spells',           component: SpellsComponent },
  { path: 'spells/new',       component: SpellFormComponent },
  { path: 'spells/:id/edit',  component: SpellFormComponent },
  { path: '',         redirectTo: 'spells', pathMatch: 'full' },
  { path: '**',       redirectTo: 'spells' }
];
