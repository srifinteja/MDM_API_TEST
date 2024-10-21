import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'my-angular-project';
  private apiUrl = 'http://learn2code.redgrape.tech:8080'; 
  data: any; // Property to hold API data
  errorMessage: string | null = null; // Property to hold error messages

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getData(); // Fetch data when the component initializes
  }
  getDataa(): Observable<any> {
    return this.http.get(`${this.apiUrl}/devicegrid`); // Fetching data from the endpoint
  }
  getData() {
    this.getDataa().subscribe(
      (response) => {
        this.data = response; // Store the response data
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.errorMessage = 'Error fetching data: ' + error.message; // Set error message
      }
    );
  }

}
