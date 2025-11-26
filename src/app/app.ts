import { Component, signal } from '@angular/core';
import { Navbar } from "./Components/navbar/navbar";
import { Home } from "./Components/home/home";
import { Footer } from "./Components/footer/footer";
import { Products } from './Components/products/products';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './Components/parent-component/parent-component';


@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Navbar, Footer, RouterOutlet],
})
export class App {
  protected readonly title = signal('TaskDayTwo-Standalone');
}
