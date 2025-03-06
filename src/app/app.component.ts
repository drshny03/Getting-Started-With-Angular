import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl = "../assets/BL_logo_square_png.png";

  ngOnInit(): void
  {
    this.title = "Hello From BridgeLazbz";
  }

}


