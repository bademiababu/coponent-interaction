import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public shortName = "Babu";
  public fullName = "Shaik bademia babu";
  public person = {
    "fisrtName" : "shaik",
    "lastName"  : "babu"
  }
  public date = new Date();


  //@Input() public parentData;
  @Input('parentData') public name;
  @Output()public chaildEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
 
  fireEvent(){
    this.chaildEvent.emit("Hi Babu you fired this event");
  }

}
