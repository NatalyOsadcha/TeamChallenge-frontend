const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'EUR',
  style: 'currency',
});

export default function FormatCurrency(number) {
  return CURRENCY_FORMATTER.format(number);
}
