export interface DrugType {
  slug: string;
  serial: string;
  name: string;
  category: string;
  similar_drugs: string[];
  dosage_forms: string[];
  old_stock: number;
  old_stock_price: number;
  new_stock: number;
  new_stock_price: number;
  description: string;
  use: string;
  side_effect: string[];
  warnings: string[];
  manufactured: string;
  expire: string;
}