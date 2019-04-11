import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-two-component',
  templateUrl: './two-component.component.html',
  styleUrls: ['./two-component.component.css'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s 50ms ease-in')
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class TwoComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items: string[] = [];

  addItem() {
    this.items.push('Nuevo Item');
  }

  removeItem() {
    this.items.pop();
  }

}
