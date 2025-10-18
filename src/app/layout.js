import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PlayFire Recipes",
  description: "Delicious recipes for every occasion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark font-display overflow-x-hidden">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}