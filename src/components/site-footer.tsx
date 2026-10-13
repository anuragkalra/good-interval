import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { brand, navigation } from "@/content/brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <Link className="logo-link" href="/" aria-label="GOOD INTERVAL home">
            <Wordmark />
          </Link>
          <nav aria-label="Footer navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer-information">
          <p className="metadata">{brand.disclosure}</p>
          <p className="metadata" id="preview-notice">
            {brand.previewNotice}
          </p>
        </div>
      </div>
    </footer>
  );
}
