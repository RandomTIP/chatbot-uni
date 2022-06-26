import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from './chatbot/chatbot.component';


const routes: Routes = [
  // { path: 'home', component: HomePageComponent },
  // { path: 'contact', component: ContactPageComponent },
  // { path: 'about', component: AboutPageComponent },
  { path: '**', component:ChatbotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
