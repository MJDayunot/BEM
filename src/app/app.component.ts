import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {KdramaReviewComponent} from "./component/kdrama-review/kdrama-review.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KdramaReviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BEMArchitecture';
}
