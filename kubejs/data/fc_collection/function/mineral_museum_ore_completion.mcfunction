scoreboard players add @p mineral_museum_ore_completion 1
tellraw @p ["", {"translate":"questFunctions.oreCompletion"}, {"score":{"name":"@p","objective":"mineral_museum_ore_completion"}}, {"translate":"questFunctions.5"}]
tellraw @p [""]
