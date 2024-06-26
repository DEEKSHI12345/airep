import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Employee } from './home';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseEmpApi = `${environment.apiBaseUrl}/api/Employee`

  constructor(private client: HttpClient) { }
  get(): Observable<Employee[]> {
    return this.client.get<Employee[]>(this.baseEmpApi)
  }
  
}
