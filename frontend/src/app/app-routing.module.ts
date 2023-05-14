import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPostComponent } from '@page/category-post/category-post.component';
import { IndexComponent } from '@page/index/index.component';
import { PostComponent } from '@page/post/post.component';
import { SearchBoxComponent } from '@page/search-box/search-box.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: '/home', component: IndexComponent },
  { path: 'https://thechoicebox.netlify.app/:id', component: PostComponent },
  { path: 'https://thechoicebox.netlify.app/category/:category/:sub_category',component: CategoryPostComponent },
  { path: '/search/:keyword', component: SearchBoxComponent },
  { path: '/admin', loadChildren: () => import('./pages/admin/admin.module').then(getModule => getModule.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
