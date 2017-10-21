import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {

  }

  hobbits = [
    'Frodo','Bilbo','Pippin','Merry'
  ];

  myData() {
    return 'Hobbits of the Shire';
  }

  getUsers(val){
    return this.http.get('http://jsonplaceholder.typicode.com/users/'+val)
      .map(res => res.json());
  }

}
