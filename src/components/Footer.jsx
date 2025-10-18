export default function Footer() {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-light dark:border-dark mt-10">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 text-center">
        {/* Branding */}
        <div className="text-sm text-subtext-light dark:text-subtext-dark mb-4">
          © {new Date().getFullYear()} <span className="font-semibold">PlayFire Recipes</span> — All rights reserved.
        </div>

        {/* Footer Legal Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs text-subtext-light dark:text-subtext-dark mb-6">
          <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a>
        </div>

    

       
      </div>
    </footer>
  );
}
