import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer';
import { Login } from './page/login/login';
import { Logout } from './page/logout/logout';


@Component({
  imports: [RouterOutlet, Login, Logout],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PetMania');
}
