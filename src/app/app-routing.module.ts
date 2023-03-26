import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BasePageComponent } from './pages/base-page/base-page.component'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component'
import { CreatePostPageComponent } from './pages/create-post-page/create-post-page.component'
import { SinglePostPageComponent } from './pages/single-post-page/single-post-page.component'
import { SettingsPageComponent } from './pages/settings-page/settings-page.component'

const routes: Routes = [
   { path: '', component: BasePageComponent },
   { path: 'signin', component: LoginPageComponent },
   { path: 'signup', component: CreateAccountPageComponent },
   { path: 'new_post', component: CreatePostPageComponent },
   { path: 'article/:id', component: SinglePostPageComponent },
   { path: 'settings', component: SettingsPageComponent },
]

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
