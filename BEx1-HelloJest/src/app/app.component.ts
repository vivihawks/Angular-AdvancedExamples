import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	
	@Input() documentTitle!:string;
	@Input() documentDetails!:string;
	@Input() documentType:string = "file";
	@Input() maxFileSize:number = 2048000;
	@Input() status:string = "available";
	@Input() styleClass:string = "half";
	@Input() uploadedFile:string = "";
    
    

    fileName:string = "";
    fileSize:number = 2048000;
    allowedExtensions:RegExp = /(\.pdf|\.doc|\.docx|\.document|\.xls|\.xlsx | \.mp3 | \.mp4 | \.jpg|\.jpeg|\.png)$/i;

	errorMessage:string = "";
	maxSizeLabel:string = "";
    uploadDocuments:any = [];

	documentId:string = "";
	showActionContainer:boolean = false;

	constructor(){


    }

    ngOnInit(): void {

		this.maxSizeLabel = this.maxFileSize / 1024000 + "MB";

		if(this.documentTitle !== ""){

			this.documentId = this.documentTitle;

			//this.documentId = this.documentTitle.trim();

		}


		if(this.uploadedFile !== ""){

			this.fileName = this.uploadedFile;

		}
		

    }

	toggleActionContainer(){

		this.showActionContainer = !this.showActionContainer;

	}


    onFileChange(event:any){

		console.log("File uploaded",event.target);

        const formDataUpload = new FormData();

        if(event.target.files.length > 0){

			for (let i = 0; i < event.target.files.length; i++) {
				
				this.fileName = event.target.files[i].name;
				this.fileSize = event.target.files[i].size;

				switch(this.documentType){

					case "document" : 

						this.allowedExtensions = /(\.pdf|\.doc|\.docx|\.document|\.xls|\.xlsx)$/i;

						break;

					case "image" : 

						this.allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;

						break;

					default:

						this.allowedExtensions = /(\.pdf|\.doc|\.docx|\.document|\.xls|\.xlsx | \.mp3 | \.mp4 | \.jpg|\.jpeg|\.png)$/i;

					break;


				}

				if(this.allowedExtensions.exec(this.fileName)){

					if(this.fileSize < this.maxFileSize){

						let uploadObject = {
							"tag":event.target.id,
							"files":event.target.files[i],
						};

					}else{

						this.errorMessage = "File exceeds " +  this.maxFileSize / 1000000 + "Mb" ; 

					}
				}

			}

          


        }


    }




}
