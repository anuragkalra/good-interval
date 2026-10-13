import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { ProductQuantity } from "@/components/product-quantity";
import { BrewRecipe } from "@/components/brew-recipe";
import { brand } from "@/content/brand";
import {
  coffeeInformation,
  formatPrice,
  getBundleContents,
  getProduct,
  productHref,
} from "@/content/catalog";

export function productMetadata(slug: string): Metadata {
  const product = getProduct(slug);
  if (!product) throw new Error(`Missing approved product: ${slug}`);
  return {
    title: `${product.displayName} — GOOD INTERVAL`,
    description: `${product.description} ${brand.productDisclosure}`,
  };
}

export function ProductDetail({ slug }: { slug: string }) {
  const product = getProduct(slug);
  if (!product) notFound();
  const bundleContents = product.kind === "bundle" ? getBundleContents() : [];

  return (
    <main id="main-content" tabIndex={-1} className="container product-page">
      <nav className="breadcrumbs metadata" aria-label="Breadcrumb">
        <Link href="/shop">Shop Coffee</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{product.displayName}</span>
      </nav>
      <section className="product-overview" aria-labelledby="product-title">
        <div className="product-main-image">
          <ImagePlaceholder
            variant={product.kind === "coffee" ? "product" : "collection"}
            title={product.name}
            description={
              product.kind === "coffee"
                ? "Front studio photograph · 4:5"
                : "Collection photograph · Daybreak, Midday & After hours"
            }
          />
        </div>
        <div className="product-information">
          <div className="product-heading">
            <p className="eyebrow">
              {product.kind === "coffee"
                ? "Specialty coffee"
                : "The whole collection"}
            </p>
            <h1 id="product-title" className="page-title">
              {product.displayName}
            </h1>
            <div className="product-taste">
              <p className="intro taste-family">{product.tasteFamily}</p>
              {product.kind === "coffee" && product.decaf && (
                <span className="decaf-label metadata">Decaf</span>
              )}
            </div>
          </div>
          <p className="product-price">
            {formatPrice(product.priceCents)}{" "}
            <span className="metadata">USD</span>
          </p>
          {product.kind === "coffee" && (
            <p className="product-tasting-notes">{product.notes.join(" · ")}</p>
          )}
          <p className="metadata">
            {product.kind === "coffee"
              ? `${product.country} · ${product.format} · ${product.weightGrams}g`
              : `3 × 250g whole bean · ${product.weightGrams}g total · Includes decaf`}
          </p>
          <p className="metadata">Whole beans require a grinder.</p>
          <div className="product-purchase">
            <ProductQuantity />
            <button
              className="button button-primary"
              type="button"
              disabled
              aria-describedby="shopping-notice"
            >
              Add to cart
            </button>
          </div>
          <p id="shopping-notice" className="metadata">
            {brand.previewNotice}
          </p>
          <p>{product.description}</p>
          {product.kind === "coffee" ? (
            <div className="product-brew-suitability">
              <p>
                <span className="taste-family">Brew with</span>{" "}
                {product.brewSuitability.toLowerCase()}.
              </p>
              {product.decaf && (
                <p className="metadata">
                  Decaf · {product.process}. Decaf does not mean caffeine-free.
                </p>
              )}
            </div>
          ) : (
            <ul className="bundle-inclusions" aria-label="Included coffees">
              {bundleContents.map((coffee) => (
                <li key={coffee.id}>
                  <Link href={productHref(coffee)}>{coffee.displayName}</Link>
                  <span className="metadata">
                    {coffee.weightGrams}g ·{" "}
                    {coffee.decaf ? "Decaf" : "Caffeinated"}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <p className="metadata product-disclosure">
            {brand.productDisclosure}
          </p>
        </div>
      </section>

      <section
        className="section product-support"
        aria-labelledby="details-title"
      >
        <div className="product-secondary">
          {product.kind === "coffee" ? (
            <ImagePlaceholder
              variant="product"
              title={product.name}
              description="Three-quarter studio photograph · 4:5"
            />
          ) : (
            <div className="bundle-detail-list">
              <h2 id="included-title">In the set</h2>
              {bundleContents.map((coffee) => (
                <article key={coffee.id}>
                  <h3>
                    <Link className="text-link" href={productHref(coffee)}>
                      {coffee.displayName}
                    </Link>
                  </h3>
                  <p className="taste-family">{coffee.tasteFamily}</p>
                  <p>{coffee.notes.join(" · ")}</p>
                  <p className="metadata">
                    {coffee.weightGrams}g whole bean ·{" "}
                    {coffee.decaf ? "Decaf" : "Caffeinated"}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
        <div className="product-detail-sections">
          <h2 id="details-title">Good to know</h2>
          <details className="product-detail" open>
            <summary>
              {product.kind === "coffee" ? "Coffee details" : "Set details"}
            </summary>
            {product.kind === "coffee" ? (
              <dl className="product-facts">
                <div>
                  <dt>Fictional origin</dt>
                  <dd>{product.country}</dd>
                </div>
                <div>
                  <dt>Process</dt>
                  <dd>{product.process}</dd>
                </div>
                <div>
                  <dt>Roast profile</dt>
                  <dd>{product.roast}</dd>
                </div>
                <div>
                  <dt>Coffee type</dt>
                  <dd>{product.decaf ? "Decaf" : "Caffeinated"} Arabica</dd>
                </div>
                <div>
                  <dt>Format</dt>
                  <dd>
                    {product.format} · {product.weightGrams}g
                  </dd>
                </div>
              </dl>
            ) : (
              <p>
                One sealed 250g bag each of{" "}
                {bundleContents.map((coffee) => coffee.displayName).join(", ")}.{" "}
                {product.weightGrams}g total, including a decaf option. Whole
                beans require a grinder.
              </p>
            )}
            <p className="metadata">
              Ingredients: {coffeeInformation.ingredients} Tasting notes
              describe the imagined sensory profile, not added ingredients.
            </p>
            <p className="metadata">{coffeeInformation.storage}</p>
          </details>
          <details className="product-detail">
            <summary>A starting brew</summary>
            <BrewRecipe />
          </details>
          <details className="product-detail">
            <summary>Demo shipping terms</summary>
            <p>{brand.shippingProposal}</p>
          </details>
          <Link className="text-link" href="/shop">
            Explore the collection
          </Link>
        </div>
      </section>
    </main>
  );
}
