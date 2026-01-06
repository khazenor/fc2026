scoreboard players add @p animal_watching 1
tellraw @p ["", {"translate":"questFunctions.newAnimalObservedAnimalWatching"}, {"score":{"name":"@p","objective":"animal_watching"}}, {"translate":"questFunctions.48"}]
