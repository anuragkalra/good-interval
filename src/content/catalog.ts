export type Coffee = {
  id: string;
  slug: string;
  name: string;
  displayName: string;
  tasteFamily: string;
  notes: readonly [string, string, string];
  country: "Colombia" | "Ethiopia";
  process: string;
  roast: string;
  decaf: boolean;
  format: "Whole bean";
  weightGrams: 250;
  priceCents: number;
  color: "persimmon" | "cobalt" | "dark-cherry";
  description: string;
};

// Fictional concept specifications approved in ../docs/BRAND_GUIDELINES.md.
export const coffees: readonly Coffee[] = [
  {
    id: "GI-MID-250",
    slug: "midday",
    name: "MIDDAY",
    displayName: "Midday",
    tasteFamily: "Sweet & Rounded",
    notes: ["Caramel", "Orange", "Cocoa"],
    country: "Colombia",
    process: "Washed",
    roast: "Medium-light",
    decaf: false,
    format: "Whole bean",
    weightGrams: 250,
    priceCents: 2000,
    color: "persimmon",
    description:
      "Caramel sweetness, a little orange, and a rounded cocoa finish. An easy coffee to return to.",
  },
  {
    id: "GI-DAY-250",
    slug: "daybreak",
    name: "DAYBREAK",
    displayName: "Daybreak",
    tasteFamily: "Bright & Juicy",
    notes: ["Apricot", "Bergamot", "Honey"],
    country: "Ethiopia",
    process: "Washed",
    roast: "Light",
    decaf: false,
    format: "Whole bean",
    weightGrams: 250,
    priceCents: 2200,
    color: "cobalt",
    description:
      "A lively cup with apricot sweetness, a bergamot lift, and a honey-like finish. A bright place to start.",
  },
  {
    id: "GI-AFT-250",
    slug: "after-hours",
    name: "AFTER HOURS",
    displayName: "After hours",
    tasteFamily: "Deep & Comforting",
    notes: ["Dark Chocolate", "Almond", "Brown Sugar"],
    country: "Colombia",
    process: "Ethyl acetate decaffeination",
    roast: "Medium",
    decaf: true,
    format: "Whole bean",
    weightGrams: 250,
    priceCents: 2200,
    color: "dark-cherry",
    description:
      "A comforting decaf with dark chocolate, almond, and brown-sugar notes. Full of character, at your pace.",
  },
];

export const goodSet = {
  id: "GI-SET-750",
  name: "THE GOOD SET",
  displayName: "The good set",
  priceCents: 5800,
  weightGrams: 750,
  contents: ["GI-DAY-250", "GI-MID-250", "GI-AFT-250"],
  description:
    "Meet the whole collection: one bright coffee, one rounded everyday coffee, and one comforting decaf.",
} as const;

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}
