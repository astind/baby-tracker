import type { FoodData, SaveService } from "./SaveServiceInterface";

interface LocalBabyData {
  baby?: any;
  feeds?: any[];
  diapers?: any[];
  naps?: any[];
}

export class LocalSaveService implements SaveService {
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
      };
    }
    this.storeLocalData(data);
    return true;
  };
}
