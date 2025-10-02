// src/services/PricingDataService.ts

import pricingDataRaw from "@/data/pricing.json";
import freightDataRaw from "@/data/freight.json";

// --------------------
// Type Definitions
// --------------------
export type Product = {
  product: string;
  marketPrice: number;
  rockGripPrice: number;
  dealerPrice: number;
  masonCoupon: number;
};

export type Freight = Record<string, Record<string, number>>; 
// { city: { truckType: charge } }

// --------------------
// Data Service Interface
// --------------------
export interface IPricingDataService {
  getPricing(): Promise<Product[]>;
  getFreight(): Promise<Freight>;
}

// --------------------
// JSON Implementation (default)
// --------------------
const _pricingData: Product[] = pricingDataRaw as Product[];
const _freightData: Freight = freightDataRaw as Freight;

export class JsonPricingDataService implements IPricingDataService {
  async getPricing(): Promise<Product[]> {
    return _pricingData;
  }

  async getFreight(): Promise<Freight> {
    return _freightData;
  }
}

// --------------------
// Google Sheets Implementation (future)
// --------------------
export class SheetPricingDataService implements IPricingDataService {
  async getPricing(): Promise<Product[]> {
    // TODO: fetch pricing data from Google Sheets API
    throw new Error("SheetPricingDataService.getPricing not implemented yet");
  }

  async getFreight(): Promise<Freight> {
    // TODO: fetch freight data from Google Sheets API
    throw new Error("SheetPricingDataService.getFreight not implemented yet");
  }
}

// --------------------
// Database Implementation (future)
// --------------------
export class DbPricingDataService implements IPricingDataService {
  async getPricing(): Promise<Product[]> {
    // TODO: fetch pricing data from backend DB/API
    throw new Error("DbPricingDataService.getPricing not implemented yet");
  }

  async getFreight(): Promise<Freight> {
    // TODO: fetch freight data from backend DB/API
    throw new Error("DbPricingDataService.getFreight not implemented yet");
  }
}
