import type { Metadata } from "next";
import { CollectionGrid } from "@/components/collection-grid";
import { brand } from "@/content/brand";

export const metadata: Metadata = {
  title: "Shop Coffee — GOOD INTERVAL",
  description:
    "Find the cup you look forward to. Explore three fictional whole-bean coffees and The good set, an independent portfolio concept.",
};

export default function ShopCoffee() {
  return (
    <main id="main-content" tabIndex={-1} className="container shop-page">
      <div className="collection-introduction">
        <div>
          <p className="eyebrow">Specialty coffee</p>
          <h1 className="page-title">Shop Coffee</h1>
        </div>
        <p className="intro">Find the cup you look forward to.</p>
      </div>
      <CollectionGrid />
      <p id="shopping-notice" className="metadata shopping-notice">
        {brand.previewNotice}
      </p>
    </main>
  );
}
