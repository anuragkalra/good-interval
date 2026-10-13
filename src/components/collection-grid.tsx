"use client";

import { useRef, useState } from "react";
import { CoffeeCard } from "@/components/coffee-card";
import { products, tasteFamilies } from "@/content/catalog";

export function CollectionGrid() {
  const allFilterRef = useRef<HTMLButtonElement>(null);
  const [selected, setSelected] = useState<string>("All");
  const visible =
    selected === "All"
      ? products
      : products.filter(
          (product) =>
            product.kind === "coffee" && product.tasteFamily === selected,
        );

  return (
    <div className="collection-discovery">
      <fieldset className="taste-filters">
        <legend className="eyebrow">Find your taste</legend>
        <div className="taste-filter-buttons">
          {["All", ...tasteFamilies].map((taste) => (
            <button
              ref={taste === "All" ? allFilterRef : undefined}
              key={taste}
              type="button"
              className="button taste-filter"
              aria-pressed={selected === taste}
              aria-controls="collection-products"
              onClick={() => setSelected(taste)}
            >
              {selected === taste && <span aria-hidden="true">✓</span>}
              {taste}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="collection-results">
        <p
          className="metadata"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {visible.length} {visible.length === 1 ? "product" : "products"} ·{" "}
          {selected === "All" ? "The whole collection" : selected}
        </p>
        {selected !== "All" && (
          <button
            type="button"
            className="text-link reset-filter"
            onClick={() => {
              setSelected("All");
              allFilterRef.current?.focus();
            }}
          >
            Show all coffee
          </button>
        )}
      </div>
      <div id="collection-products" className="coffee-grid">
        {visible.map((product) => (
          <CoffeeCard key={product.id} coffee={product} headingLevel={2} />
        ))}
      </div>
    </div>
  );
}
