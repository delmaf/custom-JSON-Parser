import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  public jsonObj: any;
  public zoom: number = 1;

  ngAfterViewInit(): void {
    document.getElementById("json").focus();
  }

  minusclick() {
    if(this.zoom === 0) return;

    this.zoom--;
    this.submitJSON();
  }

  plusclick() {
    if(this.zoom === 4) return;

    this.zoom++;
    this.submitJSON();
  }

  onEnter(){
    this.submitJSON();
  }

  textAreaClick(event){
    event.target.select();
  }

  submitJSON() {
    let textAreaVal = (<HTMLInputElement>document.getElementById("json")).value.trim();
    textAreaVal = textAreaVal.replace(/(?:\\[rn])+/g, ""); // remove \r\n
    textAreaVal = textAreaVal.replace(/\\\\"/g, ''); // remove \\\"
    textAreaVal = textAreaVal.replace(/\\/g, ''); // remove \
    this.jsonObj = textAreaVal.replace(/(^"|"$)/g, '');
    console.log(this.jsonObj);
    
    this.jsonObj = JSON.parse(this.jsonObj);
  }
  
}
