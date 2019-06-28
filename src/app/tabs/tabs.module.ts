import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { TabsPageRouterModule } from './tabs.router.module';
import { AddPageModule } from '../add/add.module';
import { EditPageModule } from '../edit/edit.module';
import { HomePageModule } from '../home/home.module';
import { DetailsPageModule } from '../details/details.module';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    TabsPageRouterModule,
    HomePageModule,
    AddPageModule,
    EditPageModule,
    DetailsPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
