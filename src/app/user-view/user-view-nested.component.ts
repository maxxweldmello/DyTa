import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-view-nested',
  templateUrl: './user-view-nested.component.html',
  styleUrls: ['./user-view-nested.component.css']
})
export class UserViewNestedComponent {
  @Input() title: string = '';
  @Input() nestedData: any = {};

  objectKeys(obj: any): any {
    if(obj){
      return Object.keys(obj);
    }
  }
  
  isObject(value: any): boolean {
    if(typeof value === 'object'){
      return value
    }
    return false;
  }
}
