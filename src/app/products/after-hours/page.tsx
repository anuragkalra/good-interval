import { ProductDetail, productMetadata } from "@/components/product-detail";

export const metadata = productMetadata("after-hours");

export default function AfterHoursPage() {
  return <ProductDetail slug="after-hours" />;
}
