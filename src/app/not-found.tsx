import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="container section not-found-page"
    >
      <p className="eyebrow">Page not found</p>
      <h1 className="page-title">This page is unavailable.</h1>
      <p>Explore the GOOD INTERVAL collection.</p>
      <Link className="button button-primary" href="/shop">
        Show all coffee
      </Link>
    </main>
  );
}
