import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee'
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  constructor( private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();

 /* this.employees = [{
      "id":1,
      "firstName": "Radwan",
      "lastName": "Romy",
      "emailId": "radwanromy@outlook.com"
    },
  {
    "id":2,
      "firstName": "Ron",
      "lastName": "Robart",
      "emailId": "robatron@outlook.com"
  },
  {
    "id":3,
      "firstName": "Jem",
      "lastName": "Robart",
      "emailId": "robatjem@outlook.com"
  }]; */
  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees=data;
    });
  }

}
