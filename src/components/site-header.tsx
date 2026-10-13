"use client";

import { useEffect, useRef, useState } from "react";
import { navigation } from "@/content/brand";
import { Wordmark } from "@/components/wordmark";

export function SiteHeader() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const navigationTargetRef = useRef<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) dialogRef.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  function openMenu() {
    dialogRef.current?.showModal();
    setMenuOpen(true);
  }

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="logo-link" href="#top" aria-label="GOOD INTERVAL home">
          <Wordmark />
        </a>
        <nav className="desktop-navigation" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            ref={menuRef}
            className="menu-trigger"
            type="button"
            aria-haspopup="dialog"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={openMenu}
          >
            Menu
          </button>
          <button
            className="cart-placeholder"
            type="button"
            disabled
            aria-label="Cart, 0 items. Shopping is not available in this preview."
            aria-describedby="preview-notice"
          >
            Cart <span aria-hidden="true">(0)</span>
          </button>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        id="mobile-menu"
        className="mobile-menu"
        aria-labelledby="mobile-menu-title"
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls =
            event.currentTarget.querySelectorAll<HTMLElement>(
              "button, a[href]",
            );
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClose={() => {
          setMenuOpen(false);
          const destination = navigationTargetRef.current;
          navigationTargetRef.current = null;
          if (destination) {
            const section = document.querySelector<HTMLElement>(destination);
            section?.focus({ preventScroll: true });
            section?.scrollIntoView({ block: "start" });
          } else {
            menuRef.current?.focus();
          }
        }}
      >
        <div className="menu-heading">
          <h2 id="mobile-menu-title">Menu</h2>
          <button
            type="button"
            className="button button-secondary"
            onClick={() => dialogRef.current?.close()}
          >
            Close
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => {
                navigationTargetRef.current = item.href;
                dialogRef.current?.close();
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </dialog>
    </header>
  );
}
