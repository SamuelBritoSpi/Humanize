import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './components/home/home';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Home, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'humanize';
}
