import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string;
  public age: number;

  constructor() {
    this.name = 'ironman';
    this.age = 45;
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription = (): string => {
    return `${this.name} - ${this.age}`;
  };

  changeName = (): void => {
    this.name = 'Wolverine';
  };

  changeAge = (): void => {
    this.age = 35;
  };

  resetForm = (): void => {
    this.name = 'ironman';
    this.age = 45;
  };
}
