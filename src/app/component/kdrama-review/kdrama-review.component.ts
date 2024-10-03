import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-kdrama-review',
  templateUrl: './kdrama-review.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./kdrama-review.component.css']
})
export class KdramaReviewComponent {
  dramas = [
    {
      title: 'Crash Landing on You',
      description: 'A South Korean woman finds herself in North Korea and meets a soldier.',
      rating: 9.3,
      genre: 'Romance, Comedy',
      ratingClass: 'high'
    },
    {
      title: 'Itaewon Class',
      description: 'A story of a group of young people who open a bar in Itaewon.',
      rating: 8.2,
      genre: 'Drama',
      ratingClass: 'medium'
    },
    {
      title: 'Goblin',
      description: 'A goblin seeks a human bride to end his immortal life.',
      rating: 9.6,
      genre: 'Fantasy, Romance',
      ratingClass: 'high'
    },
    {
      title: 'Vincenzo',
      description: 'A Korean-Italian lawyer uses his mafia skills to take down a corrupt company.',
      rating: 8.6,
      genre: 'Action, Comedy',
      ratingClass: 'high'
    },
    {
      title: 'My Name',
      description: 'A woman seeks revenge for her father’s death by infiltrating the police.',
      rating: 8.0,
      genre: 'Action, Thriller',
      ratingClass: 'medium'
    }
  ];
}
