import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './page/login/login';
import { Logout } from './page/logout/logout';
import { Navbar } from './components/navbar/navbar';
import { Home } from './page/home/home'



@Component({
  imports: [RouterOutlet, Home, Login, Logout, Navbar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PetMania');
}
