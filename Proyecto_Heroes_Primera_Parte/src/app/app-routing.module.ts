import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { UnheroeComponent } from './unheroe/unheroe.component';
import { ListadoComponent } from './usuarios/listado/listado.component';
import { VideoComponent } from './video/video.component';
import { ExtraComponent } from './extra/extra.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heroes', component: HeroesComponent},

  {path: 'heroe/:id', component: UnheroeComponent},
  {path: 'buscador/:nombreH', component: SearchComponent},
  {path: 'listado', component: ListadoComponent},
  {path: 'video', component: VideoComponent},
  {path: 'extra', component: ExtraComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
