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
import { FormsModule } from '@angular/forms'

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      PostComponent,
      BasePageComponent,
      LoginPageComponent,
      CreateAccountPageComponent,
   ],
   imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
