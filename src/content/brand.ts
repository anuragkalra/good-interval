export const brand = {
  name: "GOOD INTERVAL",
  descriptor: "Specialty Coffee",
  hero: {
    eyebrow: "SPECIALTY COFFEE",
    headline: "Make room for good coffee.",
    description:
      "Three distinct coffees. Clear taste notes. A good place to begin.",
    primaryAction: "Shop coffee",
    secondaryAction: "Explore the collection",
  },
  story: {
    heading: "A good cup can change the pace of a day.",
    body: "GOOD INTERVAL is built around that small pleasure: coffee with character, clear choices, and room to enjoy it. From a bright first brew to a familiar afternoon cup, our collection brings thoughtful design to an everyday ritual.",
  },
  disclosure: "Independent portfolio concept — not a retail store.",
  previewNotice: "Shopping preview. Cart and checkout are not available yet.",
  productDisclosure:
    "Fictional coffee product created for a portfolio concept.",
  shippingProposal:
    "Demo shipping proposal: US standard delivery is $5.00, waived on merchandise subtotals of $50.00 or more. These are simulation terms, not a fulfillment promise. Sales tax is not calculated. No orders or deliveries are processed in this preview.",
} as const;

export const navigation = [
  { label: "Shop Coffee", href: "/shop" },
  { label: "Our Approach", href: "/#our-approach" },
  { label: "Brew Guide", href: "/#brew-guide" },
] as const;

export const startingBrew = [
  { label: "Coffee", value: "15g" },
  { label: "Water", value: "250g · approximately 93°C" },
  { label: "Grind", value: "Medium" },
  { label: "Brew window", value: "2:30–3:30" },
] as const;
