RequestHandler.recipes.remove.byItemId([
  'adorablehamsterpets:cheese'
])

RequestHandler.recipes.add.shapeless([
  'meadow:amethyst_cheese_slice',
  'meadow:buffalo_cheese_slice',
  'meadow:cheese_slice',
  'meadow:cheese_tart_slice',
  'meadow:cheesecake_slice',
  'meadow:goat_cheese_slice',
  'meadow:grain_cheese_slice',
  'meadow:sheep_cheese_slice',
  'meadow:warped_cheese_slice'
].map(slice => [
  'adorablehamsterpets:cheese', [slice]
]))

RequestHandler.recipes.add.shapeless([[
  'meadow:cheese_slice', ['adorablehamsterpets:cheese']
]])