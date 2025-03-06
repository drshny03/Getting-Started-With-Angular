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
  url = "https://www.bridgelabz.com";

  ngOnInit(): void
  {
    this.title = "Hello From BridgeLazbz";
  }

  onClick($event: any)
  {
    console.log("Save Button Is Clicked!",$event);
    window.open(this.url,"_blank"); 
  }

}


