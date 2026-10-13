import { type Coffee, formatPrice } from "@/content/catalog";
import { ImagePlaceholder } from "@/components/image-placeholder";

export function CoffeeCard({ coffee }: { coffee: Coffee }) {
  return (
    <article className="coffee-card" aria-labelledby={`${coffee.slug}-name`}>
      <ImagePlaceholder
        variant="product"
        title={coffee.name}
        description="Studio photograph · 4:5"
      />
      <div className="coffee-card-information">
        <div className="coffee-card-heading">
          <h3 className="product-name" id={`${coffee.slug}-name`}>
            {coffee.displayName}
          </h3>
          {coffee.decaf && <span className="decaf-label metadata">Decaf</span>}
        </div>
        <p className="taste-family">{coffee.tasteFamily}</p>
        <p className="metadata">
          {coffee.country} · {coffee.format} · {coffee.weightGrams}g
        </p>
        <p className="coffee-notes">{coffee.notes.join(" · ")}</p>
        <div className="coffee-card-purchase">
          <span className="price">{formatPrice(coffee.priceCents)}</span>
          <button
            className="button button-secondary"
            type="button"
            disabled
            aria-label={`Add ${coffee.displayName} to cart — unavailable in this preview`}
            aria-describedby="shopping-notice"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
