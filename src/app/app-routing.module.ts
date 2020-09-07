import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HerosComponent } from './heros/heros.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'

// pathMatch: 'full' 完全匹配
const routes: Routes = [
  { path: '', redirectTo: 'dashboard',pathMatch: 'full' },
  { path: 'heroes', component: HerosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroDetail/:id', component: HeroDetailComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
