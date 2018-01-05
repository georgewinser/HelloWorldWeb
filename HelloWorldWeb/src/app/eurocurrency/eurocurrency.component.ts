import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { KeyValuePair } from '../KeyValuePair'

@Component({
  selector: 'app-eurocurrency',
  templateUrl: './eurocurrency.component.html',
  styleUrls: ['./eurocurrency.component.css']
})
export class EurocurrencyComponent implements OnInit {

  constructor(private _httpService: Http) { }

  apiValues: Array<KeyValuePair> = [];

  ngOnInit() {

    this._httpService.get('/api/euro').subscribe(values => {
      this.apiValues = values.json() as KeyValuePair[];
    });

  }

}
