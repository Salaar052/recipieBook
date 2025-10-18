"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background-light dark:bg-background-dark/90 backdrop-blur-sm border-b border-surface-light dark:border-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Title */}
          <Link href="/" className="flex items-center gap-2">
            <svg
              className="h-7 w-7 text-primary"
              fill="currentColor"
              viewBox="0 0 48 48"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.08 24L4 19.25L9.96 8.75L18.04 13.5V4h11.92v9.5l8.08-4.75L44 19.25L35.92 24L44 28.75L38.04 39.25L29.96 34.5V44H18.04v-9.5L9.96 39.25L4 28.75L12.08 24Z"
              />
            </svg>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight">
              PlayFire Recipes
            </h1>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-subtext-light dark:text-subtext-dark">
            <Link
              href="/"
              className="hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              href="/recipes"
              className="hover:text-primary transition-colors duration-200"
            >
              Recipes
            </Link>
            <Link
              href="/about"
              className="hover:text-primary transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-primary transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}