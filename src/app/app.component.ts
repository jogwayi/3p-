import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { Amplify } from 'aws-amplify';
import outputs from '../../amplify_outputs.json';
import { Connect3pAppService } from './connect-3p-app.service';

Amplify.configure(outputs);

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [Connect3pAppService],
  imports: [RouterOutlet, TodosComponent],
})
export class AppComponent {
  constructor(private connect3pAppService: Connect3pAppService) {

  }
  title = 'amplify-angular-template';
}
