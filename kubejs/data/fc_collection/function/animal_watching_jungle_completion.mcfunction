scoreboard players add @p animal_watching_jungle_completion 1
tellraw @p ["", {"translate":"questFunctions.jungleCompletion"}, {"score":{"name":"@p","objective":"animal_watching_jungle_completion"}}, {"translate":"questFunctions.2"}]
tellraw @p [""]
