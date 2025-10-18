import Link from "next/link";
import { recipes } from "@/data/Recipies";
import { notFound } from "next/navigation";
import BackButton from "@/components/BackButton"; // 👈 new component

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    id: recipe.id.toString(),
  }));
}

export async function generateMetadata({ params }) {
  const awaitedParams = await params;
  const recipe = recipes.find((r) => r.id === parseInt(awaitedParams.id));
  if (!recipe) return { title: "Recipe not found" };
  return {
    title: `${recipe.title} - PlayFire Recipes`,
    description: recipe.description,
  };
}

export default async function RecipeDetail({ params }) {
  const awaitedParams = await params;
  const recipe = recipes.find((r) => r.id === parseInt(awaitedParams.id));

  if (!recipe) {
    notFound();
  }

  return (
    
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <BackButton />
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
        {recipe.title}
      </h1>

      <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6 text-justify">
        {recipe.description}
      </p>

      <div className="w-full overflow-hidden rounded-xl shadow-md mb-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-[450px] object-cover"
        />
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside space-y-2 text-text-light dark:text-text-dark">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {recipe.instructions?.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Instructions</h2>
          <ol className="list-decimal list-inside space-y-4 text-text-light dark:text-text-dark">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-6 border-t border-surface-light dark:border-surface-dark pt-8 mt-8">
        <div className="flex gap-3">
          <div className="flex items-center gap-x-2">
            <span className="text-sm">⏱️</span>
            <p className="text-sm font-medium">{recipe.time}</p>
          </div>
          <div className="flex items-center gap-x-2">
            <span className="text-sm">👥</span>
            <p className="text-sm font-medium">{recipe.servings} people</p>
          </div>
        </div>
      </div>
    </div>
  );
}
