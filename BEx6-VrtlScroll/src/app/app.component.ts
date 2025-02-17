import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
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
      .fill(0)
      .map(_ => {
        
        return {
           name: faker.person.fullName(),
          company:faker.company.name(),
          avatar:faker.image.avatar()
        };
      });
  }
}
