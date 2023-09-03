import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private currentCount = localStorage.getItem('currentCount') ? new BehaviorSubject<number>(Number(localStorage.getItem('currentCount'))) : new BehaviorSubject<number>(0);
  private totalCount = localStorage.getItem('totalCount') ? new BehaviorSubject<number>(Number(localStorage.getItem('totalCount'))) : new BehaviorSubject<number>(0);
  private chosenGift = localStorage.getItem('chosenGift') ? new BehaviorSubject<string | undefined>(localStorage.getItem('chosenGift')?.toString()) : new BehaviorSubject<string>("");
  private gifts = localStorage.getItem('gifts')
  ? new BehaviorSubject<Array<string>>(JSON.parse(localStorage.getItem('gifts') ?? '[]'))
  : new BehaviorSubject<Array<string>>([]);
  currentData$ = this.currentCount.asObservable();
  totalData$ = this.totalCount.asObservable();
  giftsData$ = this.gifts.asObservable();
  chosenGiftData$ = this.chosenGift.asObservable();
  updateTotalData(newValue: number) {
    this.totalCount.next(newValue);
    localStorage.setItem('totalCount',newValue.toString())
  }
  updateGiftsData(newValue: any){
    this.gifts.next(newValue);
    const giftsJSON = JSON.stringify(newValue);
    localStorage.setItem('gifts', giftsJSON);
  }
  updateCurrentData(newValue: number) {
    this.currentCount.next(newValue);
    localStorage.setItem('currentCount',newValue.toString())
  }
  updateChosenGift(newValue:string){
    this.chosenGift.next(newValue);
    localStorage.setItem('chosenGift',newValue)
  }
}
