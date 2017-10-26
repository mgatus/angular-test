import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { Http, Response } from '@angular/http';
import { ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('triggeredAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1)',
      })),

      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
        style({ opacity: 0.5, transform: 'translateY(35%)', offset: .5 }),
        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
      ]))),

    ]),
  ]
})
export class HomeComponent implements OnInit {

  data: string;
  loading: boolean;
  propers: string = '';
  hobbits = [];
  ninjas = [];
  persons = [];
  idUser: number = 0;
  errorStatus = false;



  ngOnInit() {
    console.log(this.dataService.hobbits)
    this.hobbits = this.dataService.hobbits
    this.propers = this.dataService.myData();
  }

  title = 'app works!';

  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  };

  myObject2 = {
    gender: 'Female',
    age: 23,
    location: 'JAPAN'
  };


  constructor(private dataService: DataService, public toastr: ToastsManager,vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  myArr = ['Gandalf', 'Boromir', 'Frodo'];
  myArr2 = [this.myObject, this.myObject2];

  booleanCheck = "something";
  testTr = false;
  angularLogo = 'https://angular.io/assets/images/logos/angular/angular.png';
  titleStyle = true;
  objectStyle = {
    'color': 'teal',
    'font-size': '2rem',
    'border-radius': '4px',
    'background': 'transparent',
    'float': 'left',
    'padding': '10px'
  }

  objectClass = 'objectClass';

  hobbitsShire = 'hobbitsShire';

  objectClasses = {
    'redColor': true,
    'largeTitle': true
  }

  state: string = 'small';

  myClickEvent(val) {
    this.testTr = true;
    this.titleStyle = false;
    this.errorStatus = false;
    this.title = "They're taking the hobbits to Isengard";
  }

  returnOfTheKing() {

      this.dataService.getUsers(this.idUser).subscribe(users => {
        //return users;
        console.log(users);
        this.ninjas = [];
        this.errorStatus = false;
        if (users.id !== undefined) {
          this.ninjas.push(users);
          this.toastr.success('Kaboom!', 'Success', {toastLife: 1000});
        } else {
          this.toastr.warning("Hobbits ID doesn't exist!", 'Alert!');
          this.errorStatus = true;
        }
      }, error => {
        this.ninjas = [];
        // alert('Add valid input dummy!');
        this.toastr.error("Hobbits ID doesn't exist!", 'Alert!');
      });


  }

  addOne(e) {
    this.idUser +=1;
    this.returnOfTheKing();
    e.preventDefault();
  }

  minusOne(e) {
    this.idUser -=1;
    this.returnOfTheKing();
    e.preventDefault();
  }

  enableTheDisable() {
    this.testTr = false;
    this.titleStyle = true;
    this.ninjas = [];
    this.title = "Gandalf is Dead!"
  }

  runAnimate() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }


}
