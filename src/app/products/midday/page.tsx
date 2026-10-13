import { ProductDetail, productMetadata } from "@/components/product-detail";

export const metadata = productMetadata("midday");

export default function MiddayPage() {
  return <ProductDetail slug="midday" />;
}
