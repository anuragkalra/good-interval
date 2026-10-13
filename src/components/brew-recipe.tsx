import { startingBrew } from "@/content/brand";

export function BrewRecipe() {
  return (
    <div className="brew-recipe">
      <p className="metadata">
        Suggested filter recipe — a starting point, not a tested product recipe.
        Adjust to your equipment and taste.
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
  );
}
