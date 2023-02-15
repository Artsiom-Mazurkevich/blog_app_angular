import { Component, OnInit } from '@angular/core'
import { AuthService } from './services/auth.service'

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
   constructor(private authService: AuthService) {}
   ngOnInit() {
      const token = localStorage.getItem('access_token')
      if (token) {
         this.authService.isLoggedIn = `Bearer ${token}`
         this.authService.me()
      }
   }
}
