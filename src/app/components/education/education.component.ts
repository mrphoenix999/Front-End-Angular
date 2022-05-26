import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations = [
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
