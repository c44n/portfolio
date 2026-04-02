import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { Hero } from './layout/hero/hero';
import { About } from './layout/about/about';
import { Technologies } from './layout/technologies/technologies';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Hero, About, Technologies, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfoilio');
}
