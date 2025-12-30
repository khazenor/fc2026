scoreboard players add @p cooking_collection_stove_completion 1
tellraw @p ["", {"translate":"questFunctions.stoveCompletion"}, {"score":{"name":"@p","objective":"cooking_collection_stove_completion"}}, {"translate":"questFunctions.37"}]
tellraw @p [""]
