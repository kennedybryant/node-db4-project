const recipes = [
  { recipe_name: 'Lemon Chicken Piccata' },
  { recipe_name: 'Filet Mignon' },
  { recipe_name: 'Chicken Florentine' }
]

const ingredients = [
  { ingredient_name: 'Lemon', ingredient_unit: 'slices' },
  { ingredient_name: 'Chicken', ingredient_unit: 'lbs' },
  { ingredient_name: 'Steak', ingredient_unit: 'lbs' },
  { ingredient_name: 'Spinach', ingredient_unit: 'oz' },
  { ingredient_name: 'Pasta', ingredient_unit: 'oz' }
]

const step_ingredients = [
  // lemon chicken piccata
  { step_id: 2, ingredient_id: 2, quantity: 2 },
  { step_id: 3, ingredient_id: 1, quantity: 1 },
  //filet
  { step_id: 5, ingredient_id: 3, quantity: 2 },
  // chicken florentine
  { step_id: 8, ingredient_id: 2, quantity: 2 },
  { step_id: 9, ingredient_id: 4, quantity: 21},
]

const steps = [
  // lemon chicken piccata
  { step_number: 1, step_instructions: 'Turn on stove', recipe_id: 1},
  { step_number: 2, step_instructions: 'Cook chicken', recipe_id: 1},
  { step_number: 3, step_instructions: 'Add lemon', recipe_id: 1},
  //filet
  { step_number: 1, step_instructions: 'Turn on stove', recipe_id: 2},
  { step_number: 2, step_instructions: 'Sear steak', recipe_id: 2},
  { step_number: 3, step_instructions: 'Bake steak', recipe_id: 2},
  //chicken florentine
  { step_number: 1, step_instructions: 'Turn on stove', recipe_id: 3},
  { step_number: 2, step_instructions: 'Cook chicken', recipe_id: 3},
  { step_number: 3, step_instructions: 'Add Spinach', recipe_id: 3}
]

exports.seed = async function(knex) {
  await knex('recipes').insert(recipes)
  await knex('ingredients').insert(ingredients)
  await knex('steps').insert(steps)
  await knex('step_ingredients').insert(step_ingredients)
}