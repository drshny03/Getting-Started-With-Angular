import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userName: string = "";

  getTitle(): string {
    return this.userName ? `Hello ${this.userName} from BridgeLabz` : "Hello from BridgeLabz";
  }

  imgUrl = "../assets/BL_logo_square_png.png";
  url = "https://www.bridgelabz.com";

  onClick($event: any) {
    console.log("Save Button Is Clicked!", $event);
    window.open(this.url, "_blank"); 
  }
}
