import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';



import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { DetailComponent } from './detail/detail.component';


const appRoutes: Routes = [
  { path: 'card/:id', component: DetailComponent},
  { path: '', component: TodosComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
