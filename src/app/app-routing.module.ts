import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BasePageComponent } from './pages/base-page/base-page.component'

const routes: Routes = [{ path: '', component: BasePageComponent }]

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
