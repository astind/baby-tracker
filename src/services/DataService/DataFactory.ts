import type { DataService } from "./DataServiceInterface";
import { LocalDataService } from "./LocalDataService";
export class DataFactory {
  constructor() {}

  public getDataService(): DataService {
    return new LocalDataService();
  }
}
