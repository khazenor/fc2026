scoreboard players add @p cooking_collection_crafting_bowl_completion 1
tellraw @p ["", {"translate":"questFunctions.craftingBowlCompletion"}, {"score":{"name":"@p","objective":"cooking_collection_crafting_bowl_completion"}}, {"translate":"questFunctions.10"}]
tellraw @p [""]
