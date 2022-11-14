export interface FoodData {
  date: string;
  amount: number;
  unit: "oz" | "mL";
  babyId: string;
}

export interface SaveService {
  LogFeeding: (foodData: FoodData) => boolean;
}
