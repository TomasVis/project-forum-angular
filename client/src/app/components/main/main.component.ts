import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  newData: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
            // Simple GET request with response type <any>
            this.http.get<any>('http://localhost:3000/posts').subscribe(data => {
              this.newData = data;
              console.log(this.newData)
          })         
  }
}