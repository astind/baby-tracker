import type { SaveService } from "./SaveServiceInterface";
import { LocalSaveService } from "./LocalSaveService";
export class SaveFactory {
  constructor() {}

  public getSaveService(): SaveService {
    return new LocalSaveService();
  }
}
