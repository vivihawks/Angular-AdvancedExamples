import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('Document upload input tests', () => {
  let documentComponent: AppComponent;
  let documentFixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();

    documentFixture = TestBed.createComponent(AppComponent);
    documentComponent = documentFixture.componentInstance;
    documentFixture.detectChanges();

  });

  it('should create', () => {

    expect(documentComponent).toBeTruthy();

  });

  it('Title text should udpate on documentTitle @Input()',() =>{

    documentComponent.ngOnInit();

    documentComponent.documentTitle = "Upload document";

    documentFixture.detectChanges();

    expect(documentComponent.documentTitle).toBe("Upload document");

  });

  // it('Document Details text should udpate on documentDetails @Input()',() =>{

  //   documentComponent.ngOnInit();

  //   documentComponent.documentDetails = "Upload document";

  //   documentFixture.detectChanges();

  //   expect(documentComponent.documentDetails).toBe("Upload document");

  // });

  // it('Default max size to be 2048000',() =>{

  //   documentComponent.ngOnInit();

  //   documentFixture.detectChanges();

  //   expect(documentComponent.maxFileSize).toBe(2048000);

  // });

  // it('Default max size to be update to 3500000',() =>{

  //   documentComponent.ngOnInit();

  //   documentComponent.maxFileSize = 3500000;

  //   documentFixture.detectChanges();

  //   expect(documentComponent.maxFileSize).toBe(3500000);

  // });

  // it('should set maxSizeLabel correctly in ngOnInit', () => {
  //   documentComponent.maxFileSize = 2048000;
  //   documentComponent.ngOnInit();
  //   expect(documentComponent.maxSizeLabel).toEqual('2MB');
  // });

  // it('should toggle showActionContainer correctly', () => {
  //   documentComponent.showActionContainer = false;
  //   documentComponent.toggleActionContainer();
  //   expect(documentComponent.showActionContainer).toBe(true);
  //   documentComponent.toggleActionContainer();
  //   expect(documentComponent.showActionContainer).toBe(false);
  // });

  

});

// describe("File Change Tests",() =>{

//   let documentComponent: AppComponent;
//   let documentFixture: ComponentFixture<AppComponent>;
//   let fileEvent = {
//     target: {
//       files: [
//         { name: 'test.pdf', size: 2048000 }
//       ]
//     }
//   };

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ AppComponent ]
//     })
//     .compileComponents();

//     documentFixture = TestBed.createComponent(AppComponent);
//     documentComponent = documentFixture.componentInstance;
//     documentFixture.detectChanges();

    

//   });

//   it('should handle file change correctly', () => {
    
//     // Test case 1: File with allowed extension and within size limit
//     documentComponent.documentType = 'document';
//     documentComponent.onFileChange(fileEvent);
//     expect(documentComponent.fileName).toEqual('test.pdf');
//     expect(documentComponent.errorMessage).toEqual('');

    
//   });

  //File with allowed extension but exceeds size limit

  // it("Should check max file size is 1MB or less",() => {

    
  //   documentComponent.maxFileSize = 1000000; // 1MB
  //   documentComponent.onFileChange(fileEvent);
  //   expect(documentComponent.fileName).toEqual('');
  //   expect(documentComponent.errorMessage).toEqual('File exceeds 1Mb');

    
  // });

  // //File with disallowed extension
  // it("Should not allow file extensions that are not allowed",() => {

  //   fileEvent.target.files[0].name = 'test.exe';
  //   documentComponent.onFileChange(fileEvent);
  //   expect(documentComponent.fileName).toEqual('');
  //   expect(documentComponent.errorMessage).toEqual('');

  // })
// });
