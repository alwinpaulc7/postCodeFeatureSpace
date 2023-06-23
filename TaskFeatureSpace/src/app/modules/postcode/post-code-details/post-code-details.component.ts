import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-post-code-details',
  templateUrl: './post-code-details.component.html',
  styleUrls: ['./post-code-details.component.css']
})
export class PostCodeDetailsComponent implements OnInit {
  postCodeDetails: any;


  constructor(private dataStore: DataStoreService) {
  }


  ngOnInit(): void {

    //Subscription to the observable (The data from parent is received here)
    this.dataStore.searchData.subscribe(data => {
      if (data != 'No Data') {
        this.postCodeDetails = null;
        this.postCodeDetails = data;
      }

    })
  }

}
