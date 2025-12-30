scoreboard players add @p cooking_collection_cooking_pot_completion 1
tellraw @p ["", {"translate":"questFunctions.cookingPotCompletion"}, {"score":{"name":"@p","objective":"cooking_collection_cooking_pot_completion"}}, {"translate":"questFunctions.25"}]
tellraw @p [""]
