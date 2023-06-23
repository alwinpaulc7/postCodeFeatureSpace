import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  private setData = new BehaviorSubject<any>("No Data")
  searchData = this.setData.asObservable();
  setTheData: any;

  constructor(private router: Router) { }

  setSearchData(data: any) {
    this.setData.next(data)
    this.router.navigate(['/postcode']);
  }

}
