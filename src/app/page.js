import Link from "next/link";
import { recipes } from "@/data/Recipies";
import Head from "next/head";

export default function Home() {
  return (
    <div className="ml-10">
      <Head>
        <title>PlayFire Recipes - Authentic Pakistani Dishes</title>
        <meta
          name="description"
          content="Discover authentic Pakistani recipes like Haleem and Chicken Tikka, crafted with love. Explore step-by-step guides, cultural stories, and expert tips for every occasion."
        />
      </Head>
      {/* Hero Section */}
      <div
        className="mb-12 flex flex-col gap-6 bg-cover bg-center items-center justify-center p-8 min-h-[480px]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/...")',
        }}
      >
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight">
            Savor Authentic Pakistani Recipes!
          </h1>
          <p className="text-white text-sm md:text-base">
            From hearty Haleem to smoky Chicken Tikka, our collection brings Pakistan’s culinary heritage to your kitchen. Crafted by a passionate home cook, each dish includes personal tips and step-by-step guides.
          </p>
        </div>
        <Link
          href="/recipes"
          className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Explore Recipes
        </Link>
      </div>

      {/* Why Our Recipes */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Why PlayFire Recipes?</h2>
        <p className="text-base mt-4">
          At PlayFire Recipes, we celebrate Pakistan’s rich food culture. From the bustling streets of Lahore to cozy Karachi kitchens, our recipes—like Lahori Murgh Channay and Ramadan-favorite Haleem—are tested by a home cook with a passion for authentic flavors. Expect detailed guides, vibrant photos, and tips to make every dish a hit!
        </p>
      </div>

      {/* Featured Recipes */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Featured Recipes</h2>
        <Link
          href="/recipes"
          className="text-primary font-semibold hover:underline text-lg"
        >
          View All →
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recipes.slice(0, 4).map((recipe) => (
          <Link href={`/recipes/${recipe.slug}`} key={recipe.id}>
            <div className="flex flex-col gap-3 group cursor-pointer">
              <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={`Step-by-step ${recipe.title} recipe`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-base font-medium leading-normal">
                  {recipe.title}
                </p>
                <p className="text-sm font-normal leading-normal text-subtext-light dark:text-subtext-dark">
                  {recipe.description.slice(0, 100)}... {/* Short teaser */}
                </p>
                <p className="text-sm font-normal leading-normal text-subtext-light dark:text-subtext-dark">
                  {recipe.time}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}