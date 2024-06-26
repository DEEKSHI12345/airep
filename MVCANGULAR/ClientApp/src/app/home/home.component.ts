import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { EmployeeService } from './employee.service';
import { Employee } from './home';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allEmployees: any[] = [];
  employees: any[] = [];
  cols!: any[];
  totalRecords!: number;
  loading!: boolean;

  constructor(private employeeService: EmployeeService) {
    this.employeeService.get().subscribe((data: Employee[]) => {
      this.allEmployees = data;
      this.totalRecords = this.allEmployees.length;
      // this.loadPage(0,this.rows); 
    });
  }

  ngOnInit() {
    this.cols = [
      { field: 'emplId', header: 'Employee Id' },
      { field: 'Education', header: 'Education' },
      { field: 'JoiningYear', header: 'Joining Year' },
      { field: 'City', header: 'City' },
      { field: 'PaymentTier', header: 'Payment Tier' },
      { field: 'Age', header: 'Age' },
      { field: 'Gender', header: 'Gender' },
      { field: 'EverBenched', header: 'Ever Benched' },
      { field: 'ExperienceInCurrentDomain', header: 'Experience In Current Domain' },
      { field: 'LeaveOrNot', header: 'Leave Or Not' }
      // Define other columns here
    ];
    //this.loading = true;
    // Optionally preload data here or wait for lazy load event
  }

  loadEmployeesLazy(event: LazyLoadEvent) {
    //this.loading = true;
    // Assuming your service has a method to fetch data with pagination, sort, and filter
    // The event object contains properties such as first, rows, sortField, sortOrder, filters
    //this.employeeService.get().subscribe((data:any) => {
    //  this.employees = data.employees; // Adjust based on your data structure
    //  this.totalRecords = data.totalRecords; // Adjust based on your data structure
    //  this.loading = false;
    //});
    setTimeout(() => {
      let loadedEmployees = this.allEmployees.slice(event.first ?? 0, ((event.first ?? 0) + (event.rows ?? 0)));
      Array.prototype.splice.apply(this.employees, [(event.first ?? 0), (event.rows ?? 0), ...loadedEmployees]);
      this.employees = [...this.employees];
    }, 1000);
  }
}
