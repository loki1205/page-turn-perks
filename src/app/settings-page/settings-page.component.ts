import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { NumberFormatOptions } from '@progress/kendo-angular-intl';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent {
  giftNew="";
  totalCount = 0;
  
  currentCount = 0;
  opened = false;
  gifts = ['Biscuit','Chocolate','Guitar','Amazing','Movie']
  
  closeNo(){
    this.opened = false
  }
  closeYes(giftNew:any){
    this.gifts.push(giftNew);
    this.sharedService.updateGiftsData(this.gifts);
    this.opened = false
    const randomIndex = Math.floor(Math.random() * this.gifts.length);
    const randomElement = this.gifts[randomIndex];
    console.log(randomElement);
    this.sharedService.updateChosenGift(randomElement);
    this.giftNew = ''
  }
  resetData(){
    localStorage.clear();
    this.sharedService.updateTotalData(0);
    this.currentCount = 0;
    this.sharedService.updateCurrentData(this.currentCount);
    const randomIndex = Math.floor(Math.random() * this.gifts.length);
    const randomElement = this.gifts[randomIndex];
    console.log(randomElement);
    this.sharedService.updateChosenGift(randomElement);
  }
  open(){
    this.opened = true;
  }
  showGifts: boolean = false;
  deleteGift(items:any){
    this.gifts = this.gifts.filter((element) => items!==element)
    this.sharedService.updateGiftsData(this.gifts);
  }
  constructor(private sharedService: SharedService) {
    this.sharedService.currentData$.subscribe((data) => {
      this.currentCount = data;
    });
    this.sharedService.totalData$.subscribe((data) => {
      this.totalCount = data;
    });
    this.sharedService.giftsData$.subscribe((data) => {
      this.gifts = data;
    });
  }
  public viewGifts(){
    this.showGifts = true;
  }
  public saveChanges(){
    this.sharedService.updateTotalData(this.totalCount);
    this.currentCount = this.totalCount;
    this.sharedService.updateCurrentData(this.currentCount);
    const randomIndex = Math.floor(Math.random() * this.gifts.length);
    const randomElement = this.gifts[randomIndex];
    console.log(randomElement);
    this.sharedService.updateChosenGift(randomElement);
  }
}
