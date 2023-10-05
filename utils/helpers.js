/* 
 * Get an interger number and return as roman
 */
export function formatIntergerToRoman(number) {
  switch(number) {
    case 1:
      return ' I'
    case 2:
      return ' II'
    case 3:
      return ' III'
    case 4:
      return ' IV'
    case 5:
      return ' V'
    case 6:
      return ' VI'
    default: (number)
  }
}

/* 
 * Format date to the United Kingdom notation
 */
export function formatDateToEnGB(date) {
  const formattedDate = new Date(date).toLocaleString('en-GB', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    timeZone: 'UTC'
  })

  return formattedDate
}