import type {
  FoodData,
  DataService,
  DiaperData,
  NapData,
} from "./DataServiceInterface";

interface LocalBabyData {
  baby?: any;
  feeds: FoodData[];
  diapers: DiaperData[];
  naps: NapData[];
}

export class LocalDataService implements DataService {
  readonly KEY: string = "baby-tracker-data";

  private fetchLocalData(): LocalBabyData | null {
    const data = localStorage.getItem(this.KEY);
    if (data) {
      return JSON.parse(data) as LocalBabyData;
    } else {
      return null;
    }
  }

  private storeLocalData(data: LocalBabyData) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
  }

  public getAllData = (
    babyID: string
  ): (FoodData | DiaperData | NapData)[] | undefined => {
    console.log(`fetching data for ${babyID} from local storage`);
    const data = this.fetchLocalData();
    if (data) {
      return [...data.feeds, ...data.diapers, ...data.naps ];
    }
  };

  public LogFeeding = (foodData: FoodData): boolean => {
    let data = this.fetchLocalData();
    if (data) {
      if (data.feeds) {
        data.feeds.push(foodData);
      } else {
        data.feeds = [foodData];
      }
    } else {
      data = {
        feeds: [foodData],
        diapers: [],
        naps: [],
      };
    }
    this.storeLocalData(data);
    console.log("Logged Feeding");
    return true;
  };

  public clearData() {
    localStorage.removeItem(this.KEY);
    return true;
  }
}
