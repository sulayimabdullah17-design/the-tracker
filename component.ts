export type AssetStatus = "Operational" | "Maintenance" | "Grounded";
export type Severity = "Low" | "Medium" | "High" | "Critical";
export type Role = "admin" | "editor" | "viewer";

export interface Asset {
  id: string;
  code: string;
  name: string;
  type: string;
  model: string;
  number: string;
  squadron: string;
  location: string;
  totalHours: number;
  status: AssetStatus;
  archived: boolean;
}

export interface Reading {
  id: string;
  assetId: string;
  date: string;          // ISO date (YYYY-MM-DD)
  hours: number;         // 0–24
  temp: number | null;   // °C
  oil: number | null;    // PSI
  fuel: number | null;   // liters
  g: number | null;      // peak G
  note: string;
}

export interface Failure {
  id: string;
  assetId: string;
  date: string;
  system: string;
  failureType: string;
  severity: Severity;
  resolution: string;
}

export interface Plan {
  id: string;
  assetId: string;
  title: string;
  dueDate: string;
  intervalDays: number;
}

export interface Maintenance {
  id: string;
  assetId: string;
  planId: string | null;
  date: string;
  title: string;
  notes: string;
}

export interface Store {
  assets: Asset[];
  readings: Reading[];
  failures: Failure[];
  plans: Plan[];
  maintenance: Maintenance[];
}