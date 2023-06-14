function getFutureTimestamp(initialDate, index) {
  const date = new Date(initialDate);
  date.setDate(date.getDate() + 7 * index);
  return date;
}

module.exports = getFutureTimestamp;
