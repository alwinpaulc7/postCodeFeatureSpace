import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription, debounceTime, distinctUntilChanged, forkJoin } from 'rxjs';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { PostcodeService } from 'src/app/services/postcode.service';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uk-post-code',
  templateUrl: './uk-post-code.component.html',
  styleUrls: ['./uk-post-code.component.css'],
})
export class UkPostCodeComponent implements OnInit, OnDestroy {
  private postCodeSearch = new Subject<any>();
  items = [];
  searchPostCode = new FormControl();
  showMsg: boolean = true;
  private postCode: Subscription;

  constructor(private service: PostcodeService, private dataStore: DataStoreService, private router: Router) { }


  ngOnInit(): void {

    //Implementation of DebounceTime and distinctUntilChanged.
    this.postCodeSearch
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((val) => {
        this.fetchUkPostCodes(val);
      });

  }


  //Method to emit the entered value to postCodeSearch Subject.
  onValueEntered(event) {

    if (event != "" && event != null && event != undefined) {
      this.postCodeSearch.next(event);
    }

  }


  //Method to fetch UK post codes for autocomplete text box.
  fetchUkPostCodes(val: any) {
    this.postCode = this.service.fetchPostcodeAutocomplete(val).subscribe((response) => {
      if (response.status = 200) {
        console.log(response);
        this.items = response['result'];
      } else {
        console.log('Error')
      }
    });
  }


  //Method to invoke postcode details and nearest post code details APIs.
  selectEvent(val: any) {

    const postCodeDetails$ = this.service.fetchPostcodeDetails(val);
    const nearestPostcode$ = this.service.fetchNearestPostcode(val);

    //forkJoin for parallel API calls
    forkJoin([postCodeDetails$, nearestPostcode$]).subscribe((response) => {

      if (response[0].status == 200 && response[1].status == 200) {
        const postCodeDetails = response[0].result;
        const nearestPostcode = response[1].result;

        // console.log('nearestPostcode :', postCodeDetails);
        // console.log('nearestPostcode :', nearestPostcode);


        let currentPostCode = {
          country: postCodeDetails['country'],
          region: postCodeDetails['region'],
          postCode: postCodeDetails['postcode']
        };

        let nearestPostCodeList = [];
        nearestPostcode.map(record => {
          nearestPostCodeList.push({ postCode: record.postcode, country: record.country, region: record.region });
        })

        const setData = {
          currentPostCode: currentPostCode,
          nearestPostcodes: nearestPostCodeList

        }
        this.showMsg = false;

        //Setting the value to an observable in datastore service.
        this.dataStore.setSearchData(setData);
      } else {
        console.log('Error')
      }
    })
  }

  //Unsubscribing at component destroy
  //Forkjoin doesn't need to be unsubscribed since it does it automaticaly
  ngOnDestroy(): void {
    if (this.postCode) {
      this.postCode.unsubscribe();
    }

  }


}
