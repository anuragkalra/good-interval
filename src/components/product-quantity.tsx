"use client";

import { useState } from "react";

// Local presentation state only. No cart, storage, purchase, or checkout effects.
export function ProductQuantity() {
  const [draft, setDraft] = useState("1");
  const parsed = Number(draft);
  const quantity = Number.isSafeInteger(parsed) && parsed >= 1 ? parsed : 1;

  return (
    <div className="quantity-field">
      <label className="metadata" htmlFor="product-quantity">
        Quantity
      </label>
      <div className="quantity-control">
        <button
          type="button"
          aria-label="Decrease quantity"
          disabled={quantity === 1}
          onClick={() => setDraft(String(quantity - 1))}
        >
          −
        </button>
        <input
          id="product-quantity"
          name="quantity"
          type="number"
          inputMode="numeric"
          min="1"
          step="1"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onBlur={() => setDraft(String(quantity))}
        />
        <button
          type="button"
          aria-label="Increase quantity"
          disabled={quantity === Number.MAX_SAFE_INTEGER}
          onClick={() => setDraft(String(quantity + 1))}
        >
          +
        </button>
      </div>
    </div>
  );
}
