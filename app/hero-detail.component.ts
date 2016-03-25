import {Component} from 'angular2/core';
import {Hero} from './hero';
@Component({
    selector: 'my-hero-detail',
    template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
        <select [(ngModel)]="hero.status">
            <option value="process">In Process</option>
            <option value="done">Done</option>
         </select>
      </div>
    </div>
  `,
    inputs: ['hero']
})
export class HeroDetailComponent {
    hero: Hero;
}
