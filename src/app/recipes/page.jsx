import Link from "next/link";
import { recipes } from "@/data/Recipies";

export const metadata = {
  title: "Recipes - PlayFire Recipes",
};

export default function RecipesPage() {
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

  const truncateDescription = (text, wordLimit = 20) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl sm:text-5xl font-black tracking-tighter mb-8">
        Our Recipes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
            <div className="flex flex-col group bg-white dark:bg-background-dark rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden cursor-pointer h-full">
              <div className="relative">
                <img
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  src={recipe.image}
                  alt={recipe.title}
                />
                <div
                  className={`absolute top-2 right-2 text-xs font-semibold px-2.5 py-0.5 rounded-full ${getCategoryColor(
                    recipe.category
                  )}`}
                >
                  {recipe.category}
                </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2">{recipe.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">
                  {truncateDescription(recipe.description)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
