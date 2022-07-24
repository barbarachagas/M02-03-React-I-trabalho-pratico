const MONTHS = [
  "",
  "JAN",
  "FEV",
  "MAR",
  "ABR",
  "MAI",
  "JUN",
  "JUL",
  "AGO",
  "SET",
  "OUT",
  "NOV",
  "DEZ",
];
const moneyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
function helperFormatMonthYear(month, year) {
  return `${MONTHS[month]} / ${year}`;
}

function helperFormatMoney(value) {
  return moneyFormatter.format(value);
}

function helperFormatPercent(value) {
  return value.toFixed(2).replace(".", ",") + "%";
}

export { helperFormatMonthYear, helperFormatMoney, helperFormatPercent };
