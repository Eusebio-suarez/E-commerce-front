import React, { useState } from "react";

export const Recetas: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState({
    name: "Pan de Plátano",
    image:
      "https://readdy.ai/api/search-image?query=Delicious%20homemade%20banana%20bread%20with%20a%20golden%20brown%20crust%2C%20photographed%20on%20a%20rustic%20wooden%20table%20with%20a%20clean%20light%20background%2C%20styled%20with%20a%20vintage%20cloth%20napkin%20and%20scattered%20flour&width=600&height=400&seq=1&orientation=landscape",
    ingredients: [
      "3 plátanos maduros",
      "2 tazas de harina",
      "1/2 taza de azúcar",
      "2 huevos",
      "1/2 taza de mantequilla",
      "1 cucharadita de polvo de hornear",
      "Pizca de sal",
    ],
    instructions: `1. Precalentar el horno a 180°C
2. Machacar los plátanos hasta obtener un puré
3. Mezclar los ingredientes secos en un bowl
4. Batir la mantequilla con el azúcar
5. Incorporar los huevos y el puré de plátano
6. Añadir los ingredientes secos gradualmente
7. Hornear por 45-50 minutos`,
  });
  const recipes = [
    {
      category: "Panes",
      items: [
        {
          name: "Pan de Plátano",
          image:
            "https://readdy.ai/api/search-image?query=Delicious%20homemade%20banana%20bread%20with%20a%20golden%20brown%20crust%2C%20photographed%20on%20a%20rustic%20wooden%20table%20with%20a%20clean%20light%20background%2C%20styled%20with%20a%20vintage%20cloth%20napkin%20and%20scattered%20flour&width=300&height=200&seq=2&orientation=landscape",
          ingredients: [
            "3 plátanos maduros",
            "2 tazas de harina",
            "1/2 taza de azúcar",
            "2 huevos",
            "1/2 taza de mantequilla",
            "1 cucharadita de polvo de hornear",
            "Pizca de sal",
          ],
          instructions: `1. Precalentar el horno a 180°C
2. Machacar los plátanos hasta obtener un puré
3. Mezclar los ingredientes secos en un bowl
4. Batir la mantequilla con el azúcar
5. Incorporar los huevos y el puré de plátano
6. Añadir los ingredientes secos gradualmente
7. Hornear por 45-50 minutos`,
        },
        {
          name: "Pan de Coco",
          image:
            "https://readdy.ai/api/search-image?query=Fresh%20baked%20coconut%20bread%20with%20golden%20crust%20and%20visible%20coconut%20flakes%2C%20presented%20on%20a%20light%20marble%20surface%20with%20tropical%20elements%2C%20professional%20food%20photography%20with%20soft%20natural%20lighting&width=300&height=200&seq=3&orientation=landscape",
          ingredients: [
            "2 tazas de harina",
            "1 taza de coco rallado",
            "1/2 taza de azúcar",
            "2 huevos",
            "1 taza de leche de coco",
            "1/3 taza de aceite de coco",
            "2 cucharaditas de polvo de hornear",
          ],
          instructions: `1. Precalentar el horno a 175°C
2. Mezclar los ingredientes secos y el coco rallado
3. Batir los huevos con el azúcar
4. Añadir la leche de coco y el aceite
5. Incorporar los ingredientes secos
6. Verter en un molde engrasado
7. Hornear por 40-45 minutos`,
        },
        {
          name: "Pan de Leche",
          image:
            "https://readdy.ai/api/search-image?query=Soft%20and%20fluffy%20milk%20bread%20with%20a%20tender%20crumb%20structure%2C%20photographed%20on%20a%20light%20linen%20cloth%20with%20gentle%20natural%20lighting%2C%20minimal%20styling%20with%20a%20rustic%20elegant%20feel&width=300&height=200&seq=4&orientation=landscape",
          ingredients: [
            "4 tazas de harina",
            "1 1/4 taza de leche tibia",
            "1/4 taza de azúcar",
            "2 1/4 cucharaditas de levadura",
            "1 huevo",
            "3 cucharadas de mantequilla",
            "1 cucharadita de sal",
          ],
          instructions: `1. Activar la levadura en leche tibia con azúcar
2. Mezclar harina y sal en un bowl grande
3. Añadir el huevo y la mantequilla derretida
4. Amasar por 10 minutos hasta obtener masa suave
5. Dejar reposar 1 hora o hasta duplicar tamaño
6. Formar los panes y dejar reposar 30 minutos más
7. Hornear a 180°C por 25-30 minutos`,
        },
      ],
    },
    {
      category: "Sopas",
      items: [
        {
          name: "Sopa de Tortilla",
          image:
            "https://readdy.ai/api/search-image?query=Traditional%20Mexican%20tortilla%20soup%20with%20crispy%20tortilla%20strips%2C%20avocado%2C%20and%20cheese%2C%20served%20in%20a%20rustic%20bowl%20on%20a%20wooden%20table%20with%20garnishes%2C%20warm%20lighting%20and%20authentic%20presentation&width=300&height=200&seq=5&orientation=landscape",
          ingredients: [
            "6 tortillas de maíz cortadas en tiras",
            "2 tomates grandes",
            "1 cebolla",
            "2 dientes de ajo",
            "2 chiles chipotles",
            "6 tazas de caldo de pollo",
            "Aguacate y queso para servir",
          ],
          instructions: `1. Freír las tiras de tortilla hasta que estén doradas
2. Asar y pelar los tomates
3. Licuar tomates con cebolla y ajo
4. Freír la mezcla de tomate con los chiles
5. Agregar el caldo y cocinar 20 minutos
6. Servir con tortillas fritas, aguacate y queso
7. Decorar con chile y cilantro al gusto`,
        },
        {
          name: "Gazpacho",
          image:
            "https://readdy.ai/api/search-image?query=Refreshing%20Spanish%20gazpacho%20soup%20in%20a%20white%20bowl%2C%20garnished%20with%20fresh%20vegetables%20and%20herbs%2C%20clean%20modern%20presentation%20with%20bright%20natural%20lighting&width=300&height=200&seq=6&orientation=landscape",
          ingredients: [
            "6 tomates maduros",
            "1 pepino",
            "1 pimiento verde",
            "1/2 cebolla",
            "2 dientes de ajo",
            "2 rebanadas de pan duro",
            "Aceite de oliva y vinagre",
            "Sal al gusto",
          ],
          instructions: `1. Remojar el pan en agua
2. Pelar y trocear las verduras
3. Licuar todos los ingredientes
4. Añadir aceite, vinagre y sal
5. Colar la mezcla
6. Refrigerar por 2 horas
7. Servir frío con guarnición al gusto`,
        },
        {
          name: "Crema de Calabaza",
          image:
            "https://readdy.ai/api/search-image?query=Creamy%20pumpkin%20soup%20with%20a%20swirl%20of%20cream%20and%20pumpkin%20seeds%20on%20top%2C%20served%20in%20an%20elegant%20bowl%20against%20a%20light%20background%20with%20autumn%20decorative%20elements&width=300&height=200&seq=7&orientation=landscape",
          ingredients: [
            "1 kg de calabaza",
            "1 papa mediana",
            "1 cebolla",
            "2 dientes de ajo",
            "4 tazas de caldo de verduras",
            "1/2 taza de crema",
            "Nuez moscada y sal",
          ],
          instructions: `1. Pelar y cortar la calabaza y papa
2. Sofreír cebolla y ajo
3. Añadir calabaza y papa
4. Agregar el caldo y cocinar 20 minutos
5. Licuar hasta obtener textura cremosa
6. Añadir crema y especias
7. Servir con semillas de calabaza`,
        },
      ],
    },
  ];
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto rounded-lg shadow-xl overflow-hidden flex justify-between">
        <div className="scroll flex flex-col md:flex-row w-full h-[650px] justify-between">
          {/* Menú lateral */}
          <div className="p-2 flex flex-col mr-[20px] w-full md:w-1/4 overflow-y-auto rounded-lg backdrop-blur-xl bg-[#f0cf2c] border-2 border-gray-400">
            {recipes.map((category, index) => (
              <div key={index} className="p-4">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {category.category}
                </h2>
                <div className="space-y-8">
                  {category.items.map((recipe, recipeIndex) => (
                    <div
                      key={recipeIndex}
                      className="cursor-pointer transform transition-all duration-300 hover:scale-105"
                      onClick={() =>
                        setSelectedRecipe({
                          name: recipe.name,
                          image: recipe.image,
                          ingredients: recipe.ingredients,
                          instructions: recipe.instructions,
                        })
                      }
                    >
                      <div className="relative h-40 rounded-lg overflow-hidden">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                          <h3 className="text-white font-semibold text-lg">
                            {recipe.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Área de detalle de receta */}
          <div className="w-full md:w-3/4 p-8 overflow-y-auto ml-[20px] rounded-lg bg-white">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                {selectedRecipe.name}
              </h1>
              <div className="rounded-lg overflow-hidden mb-8 shadow-lg">
                <img
                  src={selectedRecipe.image}
                  alt={selectedRecipe.name}
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Ingredientes
                  </h2>
                  <ul className="space-y-2">
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-700"
                      >
                        <i className="fas fa-circle text-xs mr-3 text-yellow-500"></i>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Preparación
                  </h2>
                  <div className="text-gray-700 whitespace-pre-line">
                    {selectedRecipe.instructions}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};