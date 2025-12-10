
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { recipes } from "@/data/Recipies";

// Metadata for SEO
export const metadata = {
  title: "Recipes - PlayFire Recipes",
  description: "Explore authentic Pakistani recipes like Haleem, Chicken Tikka Boti, and Lahori Murgh Channay. Discover step-by-step guides and cultural stories.",
};

// Utility function to truncate description
const truncateDescription = (text, wordLimit = 20) => {
  if (!text) return "";
  const cleanText = text.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
  const words = cleanText.split(" ");
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : cleanText;
};

// Category color mapping
const getCategoryColor = (category) => {
  const colors = {
    Dinner: "bg-green-200 text-green-800",
    Dessert: "bg-purple-200 text-purple-800",
    Breakfast: "bg-yellow-200 text-yellow-800",
    Spicy: "bg-red-200 text-red-800",
    Vegetarian: "bg-blue-200 text-blue-800",
    Seafood: "bg-cyan-200 text-cyan-800",
  };
  return colors[category] || "bg-gray-200 text-gray-800";
};

export default function RecipesPage() {
  // Generate schema markup for recipes
  const recipeSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: recipes.map((recipe, index) => ({
      "@type": "Recipe",
      position: index + 1,
      name: recipe.title,
      url: `https://recipie-book-ashy.vercel.app/recipes/${recipe.slug}`,
      image: recipe.image,
      description: truncateDescription(recipe.description, 20),
    })),
  };

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Pakistani recipes, Haleem, Chicken Tikka, Lahori Channay, cooking" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }} />
      </Head>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-8 text-center">
          Our Recipes
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Savor authentic Pakistani dishes, from hearty Haleem to smoky Chicken Tikka Boti, crafted with love and tradition.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {recipes.map((recipe) => (
            <Link href={`/recipes/${recipe.slug}`} key={recipe.id} aria-label={`View ${recipe.title} recipe`}>
              <div className="flex flex-col group bg-white dark:bg-background-dark rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer h-full">
                <div className="relative w-full h-48">
                  <Image
                    src={recipe.image}
                    alt={`Image of ${recipe.title} dish`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={recipe.id <= 4}
                  />
                  <div
                    className={`absolute top-2 right-2 text-xs font-semibold px-2.5 py-0.5 rounded-full ${getCategoryColor(
                      recipe.category || "Recipe"
                    )}`}
                    aria-hidden="true"
                  >
                    {recipe.category || "Recipe"}
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2 line-clamp-2 min-h-[3.5rem]">
                    {recipe.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow text-justify leading-relaxed">
                    {truncateDescription(recipe.description)}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
