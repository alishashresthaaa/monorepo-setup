/**
 * Function to remove NPR and Rs. from string
 * @param amount
 * @returns
 */
export const getJustAmount = (amount: string) => {
  let amt: any
  if (amount) {
    if (amount?.includes('Rs.')) {
      amt = amount.replace('Rs.', '').trim()
    } else if (amount?.includes('NPR')) {
      amt = amount.replace('NPR', '').trim()
    } else {
      amt = amount
    }
  }
  return amt
}

