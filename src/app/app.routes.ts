import { Routes } from '@angular/router';
import { SearchformComponent } from './mainpage/searchform/searchform.component';
import { AddfamilyComponent } from './mainpage/addfamily/addfamily.component';
import { ResulttableComponent } from './mainpage/resulttable/resulttable.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

export const routes: Routes = [

  {
    path:"searchform",
    component: SearchformComponent
  },
  {
    path:"addfamily",
    component: AddfamilyComponent
  },{
    path:"resulttable",
    component: ResulttableComponent
  }
];
