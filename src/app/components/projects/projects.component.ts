import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'Portfolio web',
      description: 'Un proyecto realizado con Angular para hacer un portfolio web personal donde poder contar sobre mi, mi experiencia, conocimientos, entre otras cosas'
    },
    {
      title: 'WebPaint',
      description: 'Proyecto para subir dibujos digitales realizados por diferentes personas.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
