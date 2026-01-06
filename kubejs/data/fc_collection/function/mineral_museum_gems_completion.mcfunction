scoreboard players add @p mineral_museum_gems_completion 1
tellraw @p ["", {"translate":"questFunctions.gemsCompletion"}, {"score":{"name":"@p","objective":"mineral_museum_gems_completion"}}, {"translate":"questFunctions.10"}]
tellraw @p [""]
