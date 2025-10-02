import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  JsonPricingDataService,
  IPricingDataService,
  Product,
  Freight
} from "@/services/pricingDataService";

const ROICalculator = () => {
  // --------------------
  // Service Layer
  // --------------------
  const dataService: IPricingDataService = new JsonPricingDataService();

  // --------------------
  // State
  // --------------------
  const [pricingData, setPricingData] = useState<Product[]>([]);
  const [freightData, setFreightData] = useState<Freight>({});
  const [city, setCity] = useState<string>("");
  const [product, setProduct] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [truckType, setTruckType] = useState<string>("");

  // --------------------
  // Fetch data from service
  // --------------------
  useEffect(() => {
    const fetchData = async () => {
      const pricing = await dataService.getPricing();
      const freight = await dataService.getFreight();
      setPricingData(pricing);
      setFreightData(freight);
    };
    fetchData();
  }, [dataService]);

  // --------------------
  // Options
  // --------------------
  const cities = Object.keys(freightData);
  const products = pricingData.map((p) => p.product);
  const truckTypes = city ? Object.keys(freightData[city]) : [];

  // --------------------
  // Calculation Logic
  // --------------------
  const calculateSavings = () => {
    if (!city || !product || quantity <= 0 || !truckType) return null;

    const selectedProduct = pricingData.find((p) => p.product === product);
    if (!selectedProduct) return null;

    const selectedFreight = freightData[city]?.[truckType] ?? 0;

    const totalExWarehouse = selectedProduct.rockGripPrice * quantity;
    const totalFreight = selectedFreight;
    const totalCost = totalExWarehouse + totalFreight;

    const marketTotal = selectedProduct.marketPrice * quantity;
    const totalSaving = marketTotal - totalCost;
    const professionalMargin =
      (selectedProduct.rockGripPrice - selectedProduct.dealerPrice) * quantity;

    return {
      totalCost,
      totalSaving,
      professionalMargin,
      masonCoupon: selectedProduct.masonCoupon * quantity
    };
  };

  const result = calculateSavings();

  // --------------------
  // Render
  // --------------------
  return (
    <div className="max-w-3xl mx-auto p-6 bg-card text-card-foreground rounded-lg shadow-elevated">
      <h2 className="text-2xl font-bold mb-4">Calculate Your Project Savings</h2>

      {/* Form Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block mb-1 font-medium">Select City</label>
          <select
            className="w-full p-2 border border-border rounded"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              setTruckType(""); // Reset truck type when city changes
            }}
          >
            <option value="">--Select City--</option>
            {cities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Select Product</label>
          <select
            className="w-full p-2 border border-border rounded"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          >
            <option value="">--Select Product--</option>
            {products.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Quantity (bags)</label>
          <input
            type="number"
            min={1}
            className="w-full p-2 border border-border rounded"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Truck Type</label>
          <select
            className="w-full p-2 border border-border rounded"
            value={truckType}
            onChange={(e) => setTruckType(e.target.value)}
            disabled={!city}
          >
            <option value="">--Select Truck Type--</option>
            {truckTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Calculate Button */}
      <div className="mb-6">
        <Button size="lg" onClick={calculateSavings}>
          Calculate Savings
        </Button>
      </div>

      {/* Results */}
      {result && (
        <div className="p-4 bg-muted rounded-md">
          <p>
            <strong>Total Cost (Ex Warehouse + Freight):</strong> ₹{result.totalCost}
          </p>
          <p>
            <strong>Total Savings vs Market Price:</strong> ₹{result.totalSaving}
          </p>
          <p>
            <strong>Professional Net Margin:</strong> ₹{result.professionalMargin}
          </p>
          <p>
            <strong>Mason Coupon Earned:</strong> ₹{result.masonCoupon}
          </p>
        </div>
      )}
    </div>
  );
};

export default ROICalculator;
