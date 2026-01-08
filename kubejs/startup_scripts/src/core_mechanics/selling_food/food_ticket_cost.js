const FoodTicketCost = {
  tiers: [5, 10, 15, 25, 40, 65, 105, 170, 275, 445],
  costs: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  foodCost (numFoodCollected) {
    if (numFoodCollected < this.tiers[0]) {
      return this.costs[0]
    }
    for (let i = 1; i < this.tiers.length; i++) {
      let tier = this.tiers[i]
      if (tier > numFoodCollected) {
        return this.costs[i-1]
      } else if (tier === numFoodCollected) {
        return this.costs[i]
      }
    }
  }
}