function calculateGrowthCoefficient(array, lastElement) {
  const firstElement = array[0];
  const growthCoefficient = Math.pow(
    lastElement / firstElement,
    1 / (array.length - 1)
  );

  return growthCoefficient;
}

module.exports = calculateGrowthCoefficient;
