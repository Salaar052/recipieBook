export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-subtext-light dark:text-subtext-dark mb-8">
        We’d love to hear from you! Just click below to send us an email — no forms, no hassle.
      </p>

      <a
        href="mailto:support@playfire-recipes.com?subject=Contact%20from%20Website"
        className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
      >
        Send Email
      </a>

      <p className="mt-8 text-sm text-subtext-light dark:text-subtext-dark">
        Or email us directly at <b>support@playfire-recipes.com</b>
      </p>
    </div>
  );
}
