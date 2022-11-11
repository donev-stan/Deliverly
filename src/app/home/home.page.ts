/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  categories = [];
  highlights = [];
  featured = [];

  catSlideOpts = {
    freeMode: true,
    slidesPerView: 3.5,
    slidesOffsetBefore: 11,
    spaceBetween: 10,
  };

  highlightSlideOpts = {
    slidesPerView: 1.05,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
  };

  featuredSlideOpts = {
    slidesPerView: 1.2,
    spaceBetween: 10,
    freeMode: true,
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://devdactic.fra1.digitaloceanspaces.com/foodui/home.json')
      .subscribe({
        next: (response: any) => {
          this.categories = response.categories;
          this.highlights = response.highlights;
          this.featured = response.featured;
        },
      });
  }

  onRefresh(event): void {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
