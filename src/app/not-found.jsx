import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12 text-center">
      <h1 className="text-6xl font-bold text-primary-light mb-4">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
        Oops! Page Not Found
      </h2>
      <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Don’t worry—you can always go back to the home page and continue exploring delicious recipes!
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition-colors"
      >
        Go to Home
      </Link>
    </div>
  );
}
