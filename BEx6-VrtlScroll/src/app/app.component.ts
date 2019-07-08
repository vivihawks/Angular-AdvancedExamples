import { Component } from '@angular/core';
import * as faker from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'BEx6-VrtlScroll';
  dummydata;
  constructor() { 
    this.dummydata = Array(10000)
      .fill(1)
      .map(_ => {
        return {
          name: faker.name.findName(),
          company:faker.company.companyName(),
          avatar:faker.image.avatar()
        };
      });
  }
}
