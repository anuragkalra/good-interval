import { ProductDetail, productMetadata } from "@/components/product-detail";

export const metadata = productMetadata("daybreak");

export default function DaybreakPage() {
  return <ProductDetail slug="daybreak" />;
}
