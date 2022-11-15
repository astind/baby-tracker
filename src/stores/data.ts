import { DataFactory } from "@/services/DataService/DataFactory";
import type {
  DataService,
  FoodData,
} from "@/services/DataService/DataServiceInterface";
import { defineStore } from "pinia";

export const useDataStore = defineStore("data", () => {
  const dataService: DataService = new DataFactory().getDataService();

  function logFeeding(foodData: FoodData) {
    return dataService.LogFeeding(foodData);
  }

  function getAllData(babyId: string) {
    return dataService.getAllData(babyId);
  }

  function clearData() {
    return dataService.clearData();
  }

  return { logFeeding, getAllData, clearData };
});
