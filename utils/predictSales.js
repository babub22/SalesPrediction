const calculateGrowthCoefficient = require("./calculateGrowthCoefficient");
const getFutureTimestamp = require("./getFutureTimestamp");

function predictSales(data, numOfWeeks) {
  const predictionPeriod = numOfWeeks ?? 0;

  const salesData = data.map((x) => x.value);
  const salesDate = data.map((x) => x.timestamp)[data.length - 1];

  const predictions = [];

  for (let i = 0; i < predictionPeriod; i++) {
    const lastElement = salesData[salesData.length - 1];
    const growthCoefficient = calculateGrowthCoefficient(
      salesData,
      lastElement
    );

    const nextEstimatedValue = (growthCoefficient * lastElement).toFixed();
    salesData.push(nextEstimatedValue);

    const nextWeekData = {
      timestamp: getFutureTimestamp(salesDate, i),
      value: nextEstimatedValue,
    };

    predictions.push(nextWeekData);
  }

  return [...data, ...predictions];
}

module.exports = predictSales;
