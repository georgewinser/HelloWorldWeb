import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { KeyValuePair } from './KeyValuePair'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
    
    constructor(private _httpService: Http) {  }
    
    apiValues: Array<KeyValuePair> = [];

    ngOnInit() {       
        
        this._httpService.get('/api/test').subscribe(values => {
            this.apiValues = values.json() as KeyValuePair[];
        });
    }
}
