import { Component, DoCheck, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
   selector: 'app-settings-page',
   templateUrl: './settings-page.component.html',
   styleUrls: ['./settings-page.component.css'],
})
export class SettingsPageComponent implements OnInit, DoCheck {
   constructor(private http: HttpClient) {}

   fileToUpload: File | null = null
   handleFileInput(event: Event) {
      let targ = event.target as HTMLInputElement
      if (targ.files) {
         this.fileToUpload = targ.files['0']
      }
   }

   ngOnInit(): void {}
   ngDoCheck() {
      console.log(this.fileToUpload)
   }
}
