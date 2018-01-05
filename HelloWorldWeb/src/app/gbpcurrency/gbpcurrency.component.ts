import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
import { KeyValuePair } from '../KeyValuePair'

@Component({
  selector: 'app-gbpcurrency',
  templateUrl: './gbpcurrency.component.html',
  styleUrls: ['./gbpcurrency.component.css']
})
export class GbpcurrencyComponent implements OnInit {

  constructor(private _httpService: Http) { }

  apiValues: Array<KeyValuePair> = [];

  ngOnInit() {

    this._httpService.get('/api/gbp').subscribe(values => {
      this.apiValues = values.json() as KeyValuePair[];
    });

  }

}
