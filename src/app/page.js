import Link from "next/link";
import { recipes } from "@/data/Recipies";

export default function Home() {
  return (
    <div className="ml-10">
      {/* Hero Section */}
      <div
        className="mb-12 flex flex-col gap-6 bg-cover bg-center items-center justify-center p-8 min-h-[480px]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJqJFp246kR3b7CADqYdCGkYs2YcIXU8EfGuLt4eweY4dBk3EhoMyhrmGdNdLqb9O3-Pc4JnK3cTBAOeVcIuVlWURmkp57jFL4dVzjLB6gBSVWTYovAZE8H6WsCmrzAYhcweT2vaCzyREu76Vr1qyB2OYx7AUARqcHUFrqwxKt6jxbf7K2WIEfb6_M9UYZ656rurqMbwuQ0acqALAvtCmajJlqv3Prv5Ciueu3An5klQvb_GcPC-vu12r7ucaJQqLdOn3OVoNRoY5m")',
        }}
      >
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-black leading-tight">
            Delicious recipes for every occasion!
          </h1>
          <p className="text-white text-sm md:text-base">
            Explore our collection of mouth-watering dishes.
          </p>
        </div>
        <Link
          href="/recipes"
          className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Browse Recipes
        </Link>
      </div>

      {/* Featured Recipes Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Featured Recipes</h2>
        <Link
          href="/recipes"
          className="text-primary font-semibold hover:underline text-lg"
        >
          View All →
        </Link>
      </div>

      {/* Featured Recipes Grid (show only 4) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recipes.slice(0, 4).map((recipe) => (
          <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
            <div className="flex flex-col gap-3 group cursor-pointer">
              <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover rounded-xl transition-transform duration-300 group-hover:scale-105 overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-base font-medium leading-normal">
                  {recipe.title}
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
