export class RedGreenBlue {

    public red: string = "0";
    public green: string = "0";
    public blue: string = "0";


   //public style: string;

    //rgb(1,10,100);
    public get style(): string {
        return 'rgb(' +
            this.red + ',' +
            this.green + ',' +
            this.blue + ')';
    }
}

//rgb.style