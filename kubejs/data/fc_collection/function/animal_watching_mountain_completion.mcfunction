scoreboard players add @p animal_watching_mountain_completion 1
tellraw @p ["", {"translate":"questFunctions.mountainCompletion"}, {"score":{"name":"@p","objective":"animal_watching_mountain_completion"}}, {"translate":"questFunctions.2"}]
tellraw @p [""]
