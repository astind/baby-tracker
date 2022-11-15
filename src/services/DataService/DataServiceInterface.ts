export interface FoodData {
  date: string;
  amount: number;
  unit: "oz" | "mL";
  babyId: string;
}

export interface DiaperData {
  date: string;
  type: string;
}

export interface NapData {
  date: string;
  duration: number;
}

export interface DataService {
  LogFeeding: (foodData: FoodData) => boolean;
  getAllData: (
    babyID: string
  ) => (FoodData | DiaperData | NapData)[] | undefined;
  clearData: () => boolean;
}
