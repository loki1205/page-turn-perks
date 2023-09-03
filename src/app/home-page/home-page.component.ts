import { Component, Input } from '@angular/core';
import { SharedService } from '../shared.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('slideFromTop', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('300ms ease', style({ transform: 'translateX(50%)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease', style({ transform: 'translateX(-100%)', opacity: 0 })),
      ]),
    ]),
  ]
})
export class HomePageComponent {
  lastUpdated:number = localStorage.getItem('lastUpdated') ? Number(localStorage.getItem('lastUpdated')) : 0;
  currentTime = 0;
  alreadyMarked!:number[];
  date!:Date;
  timeDifference!: number;
  ngOnInit(){
    console.log(this.chosenGift)
    if(this.chosenGift===undefined)
    {
      this.sharedService.updateChosenGift("");
    }
    const arrayStr = localStorage.getItem('alreadyMarked');
    if (!arrayStr) {
      this.alreadyMarked = [0];
    } else {
      this.alreadyMarked = JSON.parse(arrayStr);
    }
    this.date = new Date()
    this.currentTime = this.date.getTime();
    if(this.lastUpdated!==null && this.lastUpdated!==0)
    {
      this.timeDifference = this.currentTime - this.lastUpdated;
      console.log(this.timeDifference)
      if(this.timeDifference>104401000){
      console.log(this.timeDifference)
      localStorage.removeItem('alreadyMarked')
      this.alreadyMarked = [0]
    }
    }
  }
  goldMode = false;
  tasksCompleted = false;
  currentCount = 0;
  totalCount = 0;
  chosenGift!:any;
  sharedService!:any;
  selectedIndex!: number;
  constructor(private _sharedService: SharedService) {
    this.sharedService = _sharedService;
    this.sharedService.currentData$.subscribe((data: number) => {
      this.currentCount = data;
    });
    this.sharedService.chosenGiftData$.subscribe((data: string) => {
      this.chosenGift = data;
    });
    this.sharedService.totalData$.subscribe((data: number) => {
      this.totalCount = data;
    });
    this.sharedService.updateCurrentData(this.currentCount)
  }
  selectedMarkButton:any;
  public opened = false;

  public closeNo(): void {
    this.opened = false;
  }
  public enterGoldMode(){
    this.goldMode = true
    this.opened = true;
  }
  public closeYes(): void {
    this.opened = false;
    this.selectedMarkButton.disabled="true"
    this.selectedMarkButton.style = "background-color:gray"
    this.selectedMarkButton.innerText = "Done"
    this.alreadyMarked.push(this.selectedIndex)
    this.currentCount = this.currentCount-1;
    localStorage.setItem('alreadyMarked',JSON.stringify(this.alreadyMarked))
    this.sharedService.updateCurrentData(this.currentCount);
    console.log(this.currentCount)
    if(this.currentCount == 0 && this.alreadyMarked.length-1 == this.totalCount)
    {
      this.tasksCompleted=true;
    }
  }
  public open(event:any,index:number): void {
    this.goldMode = false;
    this.selectedMarkButton = event.target;
    this.selectedIndex = index+1;
    this.opened = true;
    this.lastUpdated = this.currentTime;
    this.date = new Date()
    this.currentTime = this.date.getTime();
    this.timeDifference = this.currentTime - this.lastUpdated;
    localStorage.setItem('lastUpdated',this.lastUpdated.toString());
  }
}
