import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { notFound } from "next/navigation";
import { recipes } from "@/data/Recipies";
import BackButton from "@/components/BackButton";

// TODO: Set metadataBase to your production URL after deployment
// export const metadataBase = new URL("https://your-domain-here.com"); // e.g., https://recipie-book-ashy.vercel.app

export async function generateStaticParams() {
  //console.log("Recipes slugs in generateStaticParams:", recipes.map((r) => r.slug)); // Debug log
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

export async function generateMetadata({ params }) {
  const awaitedParams = await params;
  const slug =await awaitedParams.slug;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) {
    return {
      title: "Recipe Not Found - PlayFire Recipes",
      description: "The requested recipe could not be found.",
    };
  }
  return {
    title: `${recipe.title} - PlayFire Recipes`,
    description: recipe.description.slice(0, 160),
    keywords: `Pakistani recipes, ${recipe.title}, cooking, authentic cuisine`,
    openGraph: {
      title: recipe.title,
      description: recipe.description.slice(0, 100),
      images: [{ url: recipe.image }],
      url: `/recipes/${recipe.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: recipe.title,
      description: recipe.description.slice(0, 100),
      images: [recipe.image],
    },
  };
}

export default async function RecipeDetail({ params }) {
  const slug =  await params.slug;
  console.log("Slug received in RecipeDetail:", slug); // Debug log
  console.log("Available slugs in recipes:", recipes.map((r) => r.slug)); // Debug log
  const recipe = recipes.find((r) => r.slug === slug);

  if (!recipe) {
    console.log("Recipe not found for slug:", slug); // Debug log
    notFound();
  }

  // Schema markup for SEO
  const recipeSchema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: recipe.title,
    description: recipe.description.slice(0, 200),
    image: [recipe.image, ...(recipe.supportingImages || [])],
    recipeIngredient: recipe.ingredients,
    recipeInstructions: recipe.steps.map((step, index) => ({
      "@type": "HowToStep",
      name: `Step ${index + 1}`,
      text: step,
    })),
    prepTime: recipe.time || "PT30M",
    recipeYield: recipe.servings || "4 servings",
    recipeCategory: recipe.category || "Main Dish",
    author: {
      "@type": "Person",
      name: "PlayFire Recipes", // Replace with your name for E-E-A-T
    },
  };

  // Fallback image if supportingImages is empty
  const displayImages = recipe.supportingImages?.length > 0 ? recipe.supportingImages : ["/images/default_recipe.jpg"];

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }}
        />
      </Head>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BackButton />
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-2">
          {recipe.title}
        </h1>
        <p className="text-lg text-subtext-light dark:text-subtext-dark leading-relaxed mb-6 text-justify">
          {recipe.description}
        </p>
        <div className="w-full overflow-hidden rounded-xl shadow-md mb-8">
          <Image
            src={recipe.image}
            alt={`Main image of ${recipe.title} dish`}
            width={1200}
            height={450}
            className="w-full h-[450px] object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
            priority
          />
        </div>

        {/* Ingredients */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
          <ul
            className="list-disc list-inside space-y-2 text-text-light dark:text-text-dark"
            aria-label="Ingredients list"
          >
            {recipe.ingredients.map((ingredient, index) => (
              <li key={`ingredient-${index}`}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Instructions */}
        {recipe.instructions?.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
            <p
              className="text-text-light dark:text-text-dark leading-relaxed"
              aria-label="Cooking instructions"
            >
              {recipe.instructions}
            </p>
          </div>
        )}

        {/* Steps */}
        {recipe.steps?.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Steps</h2>
            <ol
              className="list-decimal list-inside space-y-4 text-text-light dark:text-text-dark"
              aria-label="Cooking steps"
            >
              {recipe.steps.map((step, index) => (
                <li key={`step-${index}`}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        {/* Supporting Images */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">More Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className="w-full overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={recipe.supportingImage || "/images/default_recipe.jpg"}
                alt={`Supporting image of ${recipe.title}`}
                width={600}
                height={300}
                className="w-full h-[300px] object-cover"
                sizes="(max-width: 640px) 100vw, 600px"
              />
            </div>
          </div>
        </div>

        {/* Tips Section */}
        {recipe.tips?.length > 0 && (
          <div className="mb-8 bg-surface-light/50 dark:bg-surface-dark/30 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Tips</h2>
            <ul
              className="list-disc list-inside space-y-3 text-text-light dark:text-text-dark"
              aria-label="Cooking tips"
            >
              {recipe.tips.map((tip, index) => (
                <li key={`tip-${index}`}>{tip}</li>
              ))}
            </ul>
          </div>
        )}

        {/* FAQ Section */}
        {recipe.faq?.length > 0 && (
          <div className="mb-8 bg-surface-light/50 dark:bg-surface-dark/30 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4" aria-label="Frequently asked questions">
              {recipe.faq.map((faq, index) => (
                <div key={`faq-${index}`}>
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="text-text-light dark:text-text-dark">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Nutrients Section */}
        {recipe.nutrients && (
          <div className="mb-8 bg-surface-light/50 dark:bg-surface-dark/30 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Nutritional Information</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4" aria-label="Nutritional information">
              {recipe.nutrients.calories && (
                <div className="text-center p-4 bg-background-light dark:bg-background-dark rounded-lg">
                  <p className="text-lg font-semibold text-primary">{recipe.nutrients.calories}</p>
                  <p className="text-sm text-text-light dark:text-text-dark">Calories</p>
                </div>
              )}
              {recipe.nutrients.protein && (
                <div className="text-center p-4 bg-background-light dark:bg-background-dark rounded-lg">
                  <p className="text-lg font-semibold text-primary">{recipe.nutrients.protein}</p>
                  <p className="text-sm text-text-light dark:text-text-dark">Protein</p>
                </div>
              )}
              {recipe.nutrients.carbohydrates && (
                <div className="text-center p-4 bg-background-light dark:bg-background-dark rounded-lg">
                  <p className="text-lg font-semibold text-primary">{recipe.nutrients.carbohydrates}</p>
                  <p className="text-sm text-text-light dark:text-text-dark">Carbs</p>
                </div>
              )}
              {recipe.nutrients.fat && (
                <div className="text-center p-4 bg-background-light dark:bg-background-dark rounded-lg">
                  <p className="text-lg font-semibold text-primary">{recipe.nutrients.fat}</p>
                  <p className="text-sm text-text-light dark:text-text-dark">Fat</p>
                </div>
              )}
            </div>
            <p className="text-sm text-subtext-light dark:text-subtext-dark mt-4 text-center">
              *Approximate values per serving
            </p>
          </div>
        )}

        {/* Footer Info */}
        <div className="flex flex-wrap items-center gap-6 border-t border-surface-light dark:border-surface-dark pt-8 mt-8">
          <div className="flex gap-3">
            {recipe.time && (
              <div className="flex items-center gap-x-2">
                <span className="text-sm" aria-hidden="true">
                  ⏱️
                </span>
                <p className="text-sm font-medium">{recipe.time}</p>
              </div>
            )}
            {recipe.servings && (
              <div className="flex items-center gap-x-2">
                <span className="text-sm" aria-hidden="true">
                  👥
                </span>
                <p className="text-sm font-medium">{recipe.servings}</p>
              </div>
            )}
            {recipe.category && (
              <div className="flex items-center gap-x-2">
                <span className="text-sm" aria-hidden="true">
                  📁
                </span>
                <p className="text-sm font-medium">{recipe.category}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}