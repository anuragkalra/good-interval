import Link from "next/link";
import { CoffeeCard } from "@/components/coffee-card";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { brand, startingBrew } from "@/content/brand";
import { coffees, formatPrice, goodSet } from "@/content/catalog";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="hero-heading">
            <p className="eyebrow hero-eyebrow">{brand.hero.eyebrow}</p>
            <h1 id="hero-title">{brand.hero.headline}</h1>
          </div>
          <div className="hero-information">
            <p className="intro">{brand.hero.description}</p>
            <Link className="button button-primary" href="/shop">
              {brand.hero.primaryAction}
            </Link>
            <Link className="text-link" href="/shop">
              {brand.hero.secondaryAction}
            </Link>
          </div>
        </div>
        <ImagePlaceholder
          variant="hero"
          title="MIDDAY"
          description="Lifestyle photograph · coffee, ceramic cup & wood"
        />
      </section>

      <section
        className="section container"
        id="coffee"
        tabIndex={-1}
        aria-labelledby="coffee-title"
      >
        <div className="section-heading">
          <h2 id="coffee-title">Find your good interval</h2>
          <p className="intro">Find the cup you look forward to.</p>
        </div>
        <div className="coffee-grid">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>
        <p className="metadata shopping-notice" id="shopping-notice">
          {brand.previewNotice}
        </p>
      </section>

      <section
        className="section container ritual"
        id="our-approach"
        tabIndex={-1}
        aria-labelledby="approach-title"
      >
        <div className="ritual-image">
          <ImagePlaceholder
            variant="ritual"
            title="DAYBREAK"
            description="Brewing ritual photograph · glass dripper & carafe"
          />
        </div>
        <div className="ritual-copy">
          <p className="eyebrow">Our approach</p>
          <h2 id="approach-title">{brand.story.heading}</h2>
          <div className="ritual-information">
            <p>{brand.story.body}</p>
            <a className="text-link" href="#brew-guide">
              Explore the brew guide
            </a>
          </div>
        </div>
      </section>

      <section
        className="section container good-set"
        aria-labelledby="set-title"
      >
        <div className="set-copy">
          <p className="eyebrow">The whole collection</p>
          <h2 id="set-title">
            <Link href="/products/the-good-set">{goodSet.displayName}</Link>
          </h2>
          <p className="intro">{goodSet.description}</p>
          <ul className="set-contents" aria-label="Included coffees">
            {goodSet.contents.map((id) => {
              const coffee = coffees.find((item) => item.id === id)!;
              return (
                <li key={id}>
                  <span>
                    {coffee.displayName}
                    {coffee.decaf ? " · Decaf" : ""}
                  </span>
                  <span className="metadata">{coffee.weightGrams}g</span>
                </li>
              );
            })}
          </ul>
          <p className="metadata">
            3 × 250g whole bean · {goodSet.weightGrams}g total
          </p>
          <div className="set-purchase">
            <span className="price">{formatPrice(goodSet.priceCents)}</span>
            <button
              className="button button-primary"
              type="button"
              disabled
              aria-describedby="shopping-notice"
            >
              Add the set to cart
            </button>
          </div>
        </div>
        <ImagePlaceholder
          variant="collection"
          title={goodSet.name}
          description="Collection photograph · Daybreak, Midday & After hours"
        />
      </section>

      <section
        className="section container brew-note"
        id="brew-guide"
        tabIndex={-1}
        aria-labelledby="brew-title"
      >
        <div>
          <p className="eyebrow">Your daily brew</p>
          <h2 id="brew-title">Brew Guide</h2>
        </div>
        <div className="brew-information">
          <p>
            Start with 15g coffee and 250g water. A suggested starting point;
            adjust to your equipment and taste. Whole beans require a grinder.
          </p>
          <details className="brew-guide">
            <summary>Read the brew guide</summary>
            <div className="brew-recipe">
              <p className="metadata">
                Suggested filter recipe — a starting point, not a tested product
                recipe.
              </p>
              <dl>
                {startingBrew.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </details>
        </div>
      </section>
    </main>
  );
}
