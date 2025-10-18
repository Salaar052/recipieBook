export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary-light dark:text-primary-dark">
        About PlayFire Recipes
      </h1>

      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        Welcome to <strong>PlayFire Recipes</strong>, your go-to platform for delicious, easy-to-follow recipes that spark creativity in the kitchen. Our mission is to make cooking enjoyable, accessible, and inspiring for everyone—from beginners to seasoned home chefs.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
        Our Mission
      </h2>
      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        At PlayFire Recipes, we aim to enhance your cooking experience by providing practical, flavorful, and reliable recipes. From hearty breakfasts and quick snacks to wholesome dinners and refreshing drinks, we cover a wide range of dishes for every occasion.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
        Why Choose Us
      </h2>
      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        We believe food is more than just sustenance—it’s about creativity, connection, and enjoyment. That’s why each recipe includes helpful tips, ingredient insights, and kitchen-friendly techniques to ensure a smooth and enjoyable cooking experience.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
        Our Commitment
      </h2>
      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        Every recipe is carefully tested and written with attention to detail. Our library celebrates flavors from around the world, combining classic favorites with modern twists. We continuously update and expand our collection to remain a trusted resource for home cooks.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
        Connect With Us
      </h2>
      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        Your feedback helps us grow! If you have questions, suggestions, or ideas, feel free to reach out via our 
        <a href="/contact" className="text-primary-light dark:text-primary-dark font-semibold hover:underline ml-1">
          Contact page
        </a>.  
        You can also contact me directly at <a href="mailto:salaarasim345@gmail.com" className="text-primary-light dark:text-primary-dark font-semibold hover:underline">salaarasim345@gmail.com</a>.
      </p>

      <div className="text-center mt-10">
        <p className="text-base text-subtext-light dark:text-subtext-dark italic">
          — The PlayFire Recipes Team
        </p>
      </div>
    </div>
  );
}
