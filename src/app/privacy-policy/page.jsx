export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary-light dark:text-primary-dark">
        Privacy Policy
      </h1>

      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        Welcome to <strong>PlayFire Recipes</strong>. We are committed to protecting your privacy and being transparent about our data practices. This Privacy Policy explains how we handle information when you visit our recipe website.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
        Information Collection
      </h2>
      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        PlayFire Recipes is a content-based website that does not require user registration, login, or the submission of personal information to access our recipes. You can browse our content anonymously.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
        Third-Party Advertising and Cookies
      </h2>
      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. Google's use of advertising cookies enables it and its partners to serve ads to you based on your visit to our site and/or other sites on the Internet.
      </p>
      
      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        You may opt out of personalized advertising by visiting 
        <a href="https://www.google.com/settings/ads" className="text-primary-light dark:text-primary-dark font-semibold hover:underline ml-1" target="_blank" rel="noopener noreferrer">
          Google's Ads Settings
        </a>. Alternatively, you can opt out of third-party vendor's use of cookies for personalized advertising by visiting 
        <a href="https://www.aboutads.info" className="text-primary-light dark:text-primary-dark font-semibold hover:underline ml-1" target="_blank" rel="noopener noreferrer">
          www.aboutads.info
        </a>.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
        Voluntary Information
      </h2>
      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        If you choose to contact us through our contact form or email, we will only use the information you provide to respond to your inquiry. We do not use this information for marketing purposes or share it with third parties.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
        External Links
      </h2>
      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        Our website may contain links to external sites that are not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility for their privacy policies.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
        Your Rights
      </h2>
      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        You have the right to control cookie settings through your browser. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
        Changes to This Policy
      </h2>
      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
        Contact Us
      </h2>
      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        If you have any questions about this Privacy Policy, please contact us at:
        <br />
        <strong>Salaar Asim</strong>
        <br />
        <a href="mailto:salaarasim345@gmail.com" className="text-primary-light dark:text-primary-dark font-semibold hover:underline">
          salaanasim345@gmail.com
        </a>
      </p>

      <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <p className="text-sm text-subtext-light dark:text-subtext-dark">
          <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>
    </div>
  );
}