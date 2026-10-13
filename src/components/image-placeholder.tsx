type ImagePlaceholderProps = {
  title: string;
  description: string;
  variant: "hero" | "product" | "ritual" | "collection";
};

export function ImagePlaceholder({
  title,
  description,
  variant,
}: ImagePlaceholderProps) {
  return (
    <div className={`image-placeholder image-placeholder-${variant}`}>
      <span className="eyebrow placeholder-status">Image placeholder</span>
      <div className="placeholder-caption">
        <p className="placeholder-title">{title}</p>
        <p className="metadata">{description}</p>
      </div>
    </div>
  );
}
