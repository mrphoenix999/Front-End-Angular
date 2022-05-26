import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiences = [
    {
      title: 'UTN',
      career: 'Ingenieria en Sistemas',
      period: '2014 - 2018'
    },
    {
      title: 'UTN',
      career: 'Ingenieria Electronica',
      period: '2014 - 2018'
    },
    {
      title: 'UTN',
      career: 'Ingenieria Civil',
      period: '2014 - 2018'
    },
    {
      title: 'UTN',
      career: 'Ingenieria Industrial',
      period: '2014 - 2018'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
