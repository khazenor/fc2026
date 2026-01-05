scoreboard players add @p animal_watching_swamp_completion 1
tellraw @p ["", {"translate":"questFunctions.swampCompletion"}, {"score":{"name":"@p","objective":"animal_watching_swamp_completion"}}, {"translate":"questFunctions.2"}]
tellraw @p [""]
