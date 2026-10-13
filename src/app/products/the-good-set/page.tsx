import { ProductDetail, productMetadata } from "@/components/product-detail";

export const metadata = productMetadata("the-good-set");

export default function TheGoodSetPage() {
  return <ProductDetail slug="the-good-set" />;
}
