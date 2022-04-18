/**
 * Function to remove NPR and Rs. from string
 * @param amount
 * @returns
 */
let fillterByText: any = 'Rs.' || 'NPR'

export const getAmountOnly = (amount: string) => {
  let amt: any
  if (amount) {
    if (amount?.includes(fillterByText)) {
      amt = amount.replace(fillterByText, '').trim()
    } else {
      amt = amount
    }
  }
}
