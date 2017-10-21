import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  // templateUrl: './new-component.component.html',
  template: `<h2>Yup it works on h2 as well</h2>
              <ul>
                <li>Test 1</li>
                <li>Test 2</li>
                <li>Test 3</li>
              </ul>
            `,
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
