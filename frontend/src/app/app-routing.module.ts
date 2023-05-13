import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryPostComponent } from '@page/category-post/category-post.component';
import { IndexComponent } from '@page/index/index.component';
import { PostComponent } from '@page/post/post.component';
import { SearchBoxComponent } from '@page/search-box/search-box.component';

const routes: Routes = [
  { path: 'https://thechoicebox.netlify.app/', component: IndexComponent },
  { path: 'https://thechoicebox.netlify.app/home', component: IndexComponent },
  { path: 'https://thechoicebox.netlify.app/post/:id', component: PostComponent },
  { path: 'https://thechoicebox.netlify.app/category/:category/:sub_category',component: CategoryPostComponent },
  { path: 'https://thechoicebox.netlify.app/search/:keyword', component: SearchBoxComponent },
  { path: 'https://thechoicebox.netlify.app/admin', loadChildren: () => import('./pages/admin/admin.module').then(getModule => getModule.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
