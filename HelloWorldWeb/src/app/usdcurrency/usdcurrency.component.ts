import { Component, OnInit } from '@angular/core';
import { KeyValuePair } from '../KeyValuePair';
import { Http } from '@angular/http';

@Component({
  selector: 'app-usdcurrency',
  templateUrl: './usdcurrency.component.html',
  styleUrls: ['./usdcurrency.component.css']
})
export class UsdcurrencyComponent implements OnInit {

  constructor(private _httpService: Http) { }

  apiValues: Array<KeyValuePair> = [];

  ngOnInit() {

    this._httpService.get('/api/usd').subscribe(values => {
      this.apiValues = values.json() as KeyValuePair[];
    });

  }

}
