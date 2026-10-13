import Link from "next/link";
import {
  type Product,
  formatPrice,
  getBundleContents,
  productHref,
} from "@/content/catalog";
import { ImagePlaceholder } from "@/components/image-placeholder";

export function CoffeeCard({
  coffee,
  headingLevel = 3,
}: {
  coffee: Product;
  headingLevel?: 2 | 3;
}) {
  const Heading = headingLevel === 2 ? "h2" : "h3";
  const bundleContents = coffee.kind === "bundle" ? getBundleContents() : [];
  return (
    <article className="coffee-card" aria-labelledby={`${coffee.slug}-name`}>
      <Link
        className="product-image-link"
        href={productHref(coffee)}
        aria-label={`View ${coffee.displayName}`}
      >
        <ImagePlaceholder
          variant="product"
          title={coffee.name}
          description={
            coffee.kind === "coffee"
              ? "Studio photograph · 4:5"
              : "Collection photograph · three existing bags"
          }
        />
      </Link>
      <div className="coffee-card-information">
        <div className="coffee-card-heading">
          <Heading className="product-name" id={`${coffee.slug}-name`}>
            <Link href={productHref(coffee)}>{coffee.displayName}</Link>
          </Heading>
          {coffee.kind === "coffee" && coffee.decaf && (
            <span className="decaf-label metadata">Decaf</span>
          )}
        </div>
        <p className="taste-family">{coffee.tasteFamily}</p>
        <p className="metadata">
          {coffee.kind === "coffee"
            ? `${coffee.country} · ${coffee.format} · ${coffee.weightGrams}g`
            : `3 × 250g whole bean · ${coffee.weightGrams}g total`}
        </p>
        <p className="coffee-notes">
          {coffee.kind === "coffee"
            ? coffee.notes.join(" · ")
            : bundleContents.map((item) => item.displayName).join(" · ") +
              " (includes decaf)"}
        </p>
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
