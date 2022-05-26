import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  description: string = 'Hola me llamo Fernanfloo y me gusta jugar maincraft'
  constructor() { }

  ngOnInit(): void {
  }

}
