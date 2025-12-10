export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-6 text-primary-light dark:text-primary-dark">
        About PlayFire Recipes
      </h1>

      <div className="text-center mb-8">
        <p className="text-xl text-subtext-light dark:text-subtext-dark italic mb-6">
          "Sharing the authentic flavors and food memories that make Pakistani cuisine so special"
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
        My Story
      </h2>
      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        Hello! I'm <strong>Salaar Asim</strong>, the creator behind PlayFire Recipes. Growing up in Lahore, I was surrounded by the incredible food culture that defines Pakistan. From the sizzling street food carts near Lakshmi Chowk to the family recipes passed down through generations, food has always been at the heart of my memories.
      </p>

      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        This website started as a passion project to preserve and share the authentic recipes I learned from my family, especially my uncle who makes the most incredible halwa puri, and my mother who taught me the secrets of perfect chicken karahi. Every recipe here comes with a story, a tip from my kitchen, or a memory from the streets of Lahore.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
        Why "PlayFire"?
      </h2>
      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        The name reflects my approach to cooking - it should be playful, creative, and fired with passion. Whether you're making the famous Lahori Murgh Channay that powerlifters swear by, or trying your hand at the perfect seekh kabab, I believe cooking should be an adventure, not a chore.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
        What Makes Our Recipes Special
      </h2>
      <ul className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6 space-y-3">
        <li>• <strong>Authentic & Tested:</strong> Every recipe is cooked multiple times in my own kitchen</li>
        <li>• <strong>Local Insights:</strong> I share where to find the best ingredients and which local variations work best</li>
        <li>• <strong>Cultural Context:</strong> Learn not just how to cook, but the history and stories behind each dish</li>
        <li>• <strong>Practical Tips:</strong> From my uncle's halwa puri secrets to the coal-smoking technique for that authentic dhaba flavor</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
        Beyond Just Recipes
      </h2>
      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        This is more than just a recipe collection - it's a celebration of Pakistani food culture. I share personal anecdotes, recommend the best street food spots in Lahore (like Qalandari dal chawal near Amana Mal), and explain why certain techniques make all the difference in achieving that authentic taste.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-primary-light dark:text-primary-dark">
        Join Our Cooking Community
      </h2>
      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6">
        I'd love to hear about your cooking adventures! Have a question about a recipe? Found a great variation? Want to share your own family's cooking secrets? Reach out to me directly at <a href="mailto:salaarasim345@gmail.com" className="text-primary-light dark:text-primary-dark font-semibold hover:underline">salaarasim345@gmail.com</a> or through our <a href="/contact" className="text-primary-light dark:text-primary-dark font-semibold hover:underline">contact form</a>.
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mt-8">
        <p className="text-lg text-subtext-light dark:text-subtext-dark text-center">
          <strong>Happy cooking, and may your kitchen always be filled with the amazing aromas of Pakistani cuisine!</strong>
        </p>
        <p className="text-center mt-4 text-subtext-light dark:text-subtext-dark">
          — Salaar Asim
        </p>
      </div>
    </div>
  );
}