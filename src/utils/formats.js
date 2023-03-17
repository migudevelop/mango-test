export const numberToCurrency = ({
  number,
  lang = 'es-ES',
  currency = 'EUR'
}) =>
  new Intl.NumberFormat(lang, { style: 'currency', currency }).format(number)
