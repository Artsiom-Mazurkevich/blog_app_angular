import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { PostComponent } from './components/post/post.component'
import { BasePageComponent } from './pages/base-page/base-page.component'
import { HttpClientModule } from '@angular/common/http'
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { CreateAccountPageComponent } from './pages/create-account-page/create-account-page.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CreatePostPageComponent } from './pages/create-post-page/create-post-page.component'
import { SinglePostPageComponent } from './pages/single-post-page/single-post-page.component'
import { SettingsPageComponent } from './pages/settings-page/settings-page.component'

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      PostComponent,
      BasePageComponent,
      LoginPageComponent,
      CreateAccountPageComponent,
      CreatePostPageComponent,
      SinglePostPageComponent,
      SettingsPageComponent,
   ],
   imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
