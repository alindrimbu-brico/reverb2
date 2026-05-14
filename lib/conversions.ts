export type UnitCategory = "lungime" | "greutate" | "volum" | "arie" | "temperatura";

export interface Unit {
  id: string;
  name: string;
  symbol: string;
  ratio: number; // Ratio to base unit (e.g. if base is meter, km ratio is 1000, meaning 1 km = 1000 m)
}

export interface CategoryData {
  id: UnitCategory;
  name: string;
  baseUnit: string; // id of the base unit
  units: Unit[];
}

export const conversionData: Record<UnitCategory, CategoryData> = {
  lungime: {
    id: "lungime",
    name: "Lungime",
    baseUnit: "m",
    units: [
      { id: "m", name: "Metru", symbol: "m", ratio: 1 },
      { id: "km", name: "Kilometru", symbol: "km", ratio: 1000 },
      { id: "cm", name: "Centimetru", symbol: "cm", ratio: 0.01 },
      { id: "mm", name: "Milimetru", symbol: "mm", ratio: 0.001 },
      { id: "mi", name: "Milă", symbol: "mi", ratio: 1609.344 },
      { id: "yd", name: "Yard", symbol: "yd", ratio: 0.9144 },
      { id: "ft", name: "Picior (Foot)", symbol: "ft", ratio: 0.3048 },
      { id: "in", name: "Țol (Inch)", symbol: "in", ratio: 0.0254 },
    ]
  },
  greutate: {
    id: "greutate",
    name: "Greutate & Masă",
    baseUnit: "kg",
    units: [
      { id: "kg", name: "Kilogram", symbol: "kg", ratio: 1 },
      { id: "g", name: "Gram", symbol: "g", ratio: 0.001 },
      { id: "mg", name: "Miligram", symbol: "mg", ratio: 0.000001 },
      { id: "t", name: "Tonă", symbol: "t", ratio: 1000 },
      { id: "lb", name: "Livră (Pound)", symbol: "lb", ratio: 0.45359237 },
      { id: "oz", name: "Uncie (Ounce)", symbol: "oz", ratio: 0.028349523125 },
    ]
  },
  volum: {
    id: "volum",
    name: "Volum",
    baseUnit: "l",
    units: [
      { id: "l", name: "Litru", symbol: "l", ratio: 1 },
      { id: "ml", name: "Mililitru", symbol: "ml", ratio: 0.001 },
      { id: "m3", name: "Metru Cub", symbol: "m³", ratio: 1000 },
      { id: "cm3", name: "Centimetru Cub", symbol: "cm³", ratio: 0.001 },
      { id: "gal", name: "Galon (US)", symbol: "gal", ratio: 3.785411784 },
      { id: "qt", name: "Sfert (Quart US)", symbol: "qt", ratio: 0.946352946 },
      { id: "pt", name: "Pint (US)", symbol: "pt", ratio: 0.473176473 },
      { id: "oz_fl", name: "Uncie Fluidă (US)", symbol: "fl oz", ratio: 0.0295735295625 },
    ]
  },
  arie: {
    id: "arie",
    name: "Arie",
    baseUnit: "m2",
    units: [
      { id: "m2", name: "Metru Pătrat", symbol: "m²", ratio: 1 },
      { id: "km2", name: "Kilometru Pătrat", symbol: "km²", ratio: 1000000 },
      { id: "ha", name: "Hectar", symbol: "ha", ratio: 10000 },
      { id: "ac", name: "Acre", symbol: "ac", ratio: 4046.8564224 },
      { id: "sq_ft", name: "Picior Pătrat", symbol: "sq ft", ratio: 0.09290304 },
      { id: "sq_yd", name: "Yard Pătrat", symbol: "sq yd", ratio: 0.83612736 },
      { id: "sq_in", name: "Țol Pătrat", symbol: "sq in", ratio: 0.00064516 },
    ]
  },
  temperatura: {
    id: "temperatura",
    name: "Temperatură",
    baseUnit: "c",
    // Temperatura are conversie non-liniară, deci `ratio` nu e suficient, dar adăugăm o funcție specială.
    // Vom folosi câmpul ratio doar formal aici.
    units: [
      { id: "c", name: "Celsius", symbol: "°C", ratio: 1 },
      { id: "f", name: "Fahrenheit", symbol: "°F", ratio: 1 },
      { id: "k", name: "Kelvin", symbol: "K", ratio: 1 },
    ]
  }
};

export function convertTemperature(value: number, fromId: string, toId: string): number {
  let celsius = value;
  
  // Convert to Celsius first
  if (fromId === "f") celsius = (value - 32) * 5/9;
  else if (fromId === "k") celsius = value - 273.15;
  
  // Convert from Celsius to target
  if (toId === "c") return celsius;
  if (toId === "f") return (celsius * 9/5) + 32;
  if (toId === "k") return celsius + 273.15;
  
  return value;
}

export function convertValue(value: number, category: UnitCategory, fromUnitId: string): { unit: Unit, value: number }[] {
  const catData = conversionData[category];
  const fromUnit = catData.units.find(u => u.id === fromUnitId);
  
  if (!fromUnit) return [];

  return catData.units.map(targetUnit => {
    let convertedValue = 0;
    
    if (category === "temperatura") {
      convertedValue = convertTemperature(value, fromUnitId, targetUnit.id);
    } else {
      // 1. Convert to base unit
      const valueInBase = value * fromUnit.ratio;
      // 2. Convert from base to target unit
      convertedValue = valueInBase / targetUnit.ratio;
    }
    
    return {
      unit: targetUnit,
      value: convertedValue
    };
  });
}
