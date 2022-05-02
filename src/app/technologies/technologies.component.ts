import { Component, OnInit } from '@angular/core';
import { TechModel } from 'src/model/tech_model';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cards: TechModel[] = [
    new TechModel('Dart | Flutter', ['../../assets/tech-assets/dart.png', '../../assets/tech-assets/flutter.png'], 
    'Experience with MobX, BloC for state management; \n'+
    'Modular for modules navigation, dependencies injection; \n'+
    'Experience with SOLID, Clean code and Clean architecture, app life cycle, widget tree'),

    new TechModel('Firebase', ['../../assets/tech-assets/firebase.png'], 
    'Experience with Firestore, Realtime Database;\n'+
    'Push Notification;\n'+
    'Social media login;'),
    new TechModel('Angular | Typescript', ['../../assets/tech-assets/angular.png', '../../assets/tech-assets/typescript.png'], 
    'Experience with HTML, CSS, SCSS, module navigation'),
    new TechModel('Node', ['../../assets/tech-assets/node.png'], 
    'Experience with node for API development and tasks automation;'),
    new TechModel('Python', ['../../assets/tech-assets/python.png'], 
    'Experience with python for data scrapping, API development with Django and Fast API.'),
    new TechModel('NoSQL', ['../../assets/tech-assets/mongodb.png'], 
    'Experience with NoSQL db, MongoDB, Firestore, Firebase'),
    new TechModel('Docker', ['../../assets/tech-assets/docker.png'], 
    'Experience and docker knowlegdes'),
    new TechModel('Git', ['../../assets/tech-assets/git.png'], 
    'Experience with Github, Gitlab, Azure DevOps, tortoiseSVN ,command line knowledges'),
    new TechModel('SQL', ['../../assets/tech-assets/sql.png'], 
    'Experience with SQL db, Oracle, PostgreSQL, MySQL'),
  ]

}
