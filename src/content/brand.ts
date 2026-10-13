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
  previewNotice:
    "Homepage preview. Shopping functionality is not available yet.",
} as const;

export const navigation = [
  { label: "Shop Coffee", href: "#coffee" },
  { label: "Our Approach", href: "#our-approach" },
  { label: "Brew Guide", href: "#brew-guide" },
] as const;

export const startingBrew = [
  { label: "Coffee", value: "15g" },
  { label: "Water", value: "250g · approximately 93°C" },
  { label: "Grind", value: "Medium" },
  { label: "Brew window", value: "2:30–3:30" },
] as const;
