export const recipes = [
  {
    id: 1,
    title: "Spicy Thai Green Curry",
    category: "Dinner",
    time: "45 mins",
    servings: 4,
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p",
    description:
      "This spicy Thai green curry is a beautiful balance of heat, creaminess, and aroma. It’s made with coconut milk, fresh Thai basil, lime leaves, and green curry paste that together create a comforting yet bold dish. The flavor develops with every bite, with just the right kick of chili that warms the soul. The combination of fresh herbs and spices makes it an incredibly rich and authentic Thai experience. Whether you’re making it for a cozy dinner or a family gathering, this curry is a showstopper. The coconut milk adds creaminess, while the basil gives it a fresh, herbal finish. Serve it with jasmine rice for a truly satisfying meal.",
    shortDesc:
      "An authentic Thai curry bursting with flavor, spice, and the freshness of coconut milk and basil.",
    ingredients: [
      "2 tbsp green curry paste",
      "1 can (13.5 oz) coconut milk",
      "1 lb chicken breast, sliced",
      "1 cup bamboo shoots",
      "1 red bell pepper, sliced",
      "1/2 cup Thai basil leaves",
      "1 tbsp fish sauce",
      "1 tsp sugar",
      "2 kaffir lime leaves",
      "Steamed jasmine rice"
    ],
    instructions: [
      "Heat the thick part of the coconut milk in a skillet until it bubbles.",
      "Add curry paste and stir until fragrant.",
      "Add chicken and cook until no longer pink.",
      "Add remaining coconut milk, fish sauce, and sugar.",
      "Stir in vegetables and cook until tender.",
      "Add basil and lime leaves, then serve hot with rice."
    ]
  },
  {
    id: 2,
    title: "Classic Italian Lasagna",
    category: "Dinner",
    time: "90 mins",
    servings: 6,
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p",
    description:
      "A timeless comfort dish that layers rich tomato meat sauce, tender lasagna noodles, and creamy cheese into one perfect bite. Each layer blends into the next, giving you a symphony of textures and flavors. The slow-cooked meat sauce brings out deep umami notes, balanced perfectly by the creamy ricotta and melted mozzarella. This lasagna isn’t just food — it’s tradition, love, and warmth baked in an oven. Whether served for Sunday dinner or a celebration, it’s a crowd-pleaser every time.",
    shortDesc:
      "Layers of pasta, meat sauce, and creamy cheese baked to golden perfection.",
    ingredients: [
      "1 lb ground beef",
      "1 onion, diced",
      "4 garlic cloves, minced",
      "2 cans crushed tomatoes",
      "2 tbsp tomato paste",
      "1 tsp oregano",
      "Salt & pepper",
      "12 lasagna noodles",
      "15 oz ricotta",
      "2 cups mozzarella",
      "1/2 cup parmesan",
      "1 egg"
    ],
    instructions: [
      "Preheat oven to 375°F.",
      "Brown beef with onion and garlic; drain.",
      "Add tomatoes, paste, oregano, salt, and pepper. Simmer 15 mins.",
      "Boil noodles until al dente.",
      "Mix ricotta, egg, and half the cheese.",
      "Layer noodles, sauce, and cheese mixture. Repeat.",
      "Top with mozzarella and bake 40 minutes until golden."
    ]
  },
  {
    id: 3,
    title: "Vegan Chocolate Avocado Mousse",
    category: "Dessert",
    time: "15 mins",
    servings: 4,
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p",
    description:
      "A silky-smooth vegan dessert that feels indulgent but is secretly healthy. The avocado gives the mousse its creamy base, while cocoa powder brings rich chocolate flavor. It’s sweetened naturally with maple syrup and finished with a touch of vanilla. You’ll never believe something this decadent is made without dairy or refined sugar. Perfect for a quick treat, romantic dessert, or guilt-free snack.",
    shortDesc:
      "Rich and creamy vegan chocolate mousse made with avocado and cocoa.",
    ingredients: [
      "2 ripe avocados",
      "1/2 cup cocoa powder",
      "1/4 cup maple syrup",
      "1/4 cup almond milk",
      "1 tsp vanilla extract",
      "Pinch sea salt"
    ],
    instructions: [
      "Blend all ingredients until smooth and creamy.",
      "Adjust sweetness and cocoa to taste.",
      "Spoon into glasses and chill 30 mins.",
      "Top with berries or dark chocolate shavings."
    ]
  },
  {
    id: 4,
    title: "Crispy Baked Lemon Herb Chicken",
    category: "Dinner",
    time: "45 mins",
    servings: 4,
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p",
    description:
      "This baked lemon herb chicken delivers crisp skin, juicy meat, and fresh citrus flavor. The herbs add aroma while the breadcrumbs create a satisfying crunch. It’s light yet hearty — the perfect weeknight meal that tastes restaurant-quality. Serve it with roasted vegetables or mashed potatoes for a balanced plate. The lemon cuts through the richness, leaving your palate refreshed with every bite.",
    shortDesc:
      "Perfectly seasoned crispy chicken with lemon and herbs.",
    ingredients: [
      "4 chicken breasts",
      "1/2 cup panko",
      "Zest of 2 lemons",
      "2 tbsp thyme",
      "2 tbsp rosemary",
      "2 garlic cloves, minced",
      "1/4 cup olive oil",
      "1 egg",
      "Salt and pepper"
    ],
    instructions: [
      "Preheat oven to 400°F.",
      "Mix breadcrumbs with herbs, lemon zest, and garlic.",
      "Dip chicken in egg, coat with mixture, drizzle with oil.",
      "Bake 25 mins until golden and crisp.",
      "Serve with lemon wedges."
    ]
  },
  // --- 20 more dummy recipes ---
  ...Array.from({ length: 20 }, (_, i) => ({
    id: i + 5,
    title: `Chef’s Special Dish ${i + 1}`,
    category: i % 2 === 0 ? "Dinner" : "Dessert",
    time: `${30 + i * 2} mins`,
    servings: (i % 4) + 2,
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p",
    description:
      `This is a richly detailed recipe designed for performance testing. Each dish brings out the best of culinary creativity, combining traditional flavors with modern twists. It highlights ingredient harmony, cooking precision, and plating elegance. Whether baked, roasted, sautéed, or chilled, each step ensures balance of taste and texture. With vibrant aromas and thoughtfully paired spices, this recipe showcases how comfort food meets sophistication. It’s meant to simulate a real, content-heavy dataset while providing meaningful context. Imagine the warmth of a home-cooked meal meeting the finesse of a gourmet restaurant experience. Each word adds to the realism of a production-grade app dataset.`,
    shortDesc:
      "A balanced recipe with deep flavors, texture contrast, and simple preparation.",
    ingredients: [
      "1 cup ingredient A",
      "2 tbsp ingredient B",
      "3 cloves garlic",
      "Salt and pepper",
      "Olive oil",
      "Optional garnish"
    ],
    instructions: [
      "Prepare all ingredients and preheat the cooking surface.",
      "Mix seasonings and coat main ingredient evenly.",
      "Cook or bake as required until golden brown.",
      "Serve warm and garnish for presentation."
    ]
  }))
];
