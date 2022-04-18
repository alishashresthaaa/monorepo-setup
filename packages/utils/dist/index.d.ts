/**
 * Function to remove NPR and Rs. from string
 * @param amount
 * @returns
 */
declare const getJustAmount: (amount: string) => any;

/**
 * Get payable amount
 * @param cashBackList
 * @returns
 */
declare const getPayableAmount: (cashBackList: []) => any;

declare const getToPayAmount: (payableAmount: any, totalAmount: any) => any;

declare const dateWithDash: (date: any) => string;

declare const dateWithSlash: (obj: string) => string;

declare const getAmountOnly: (amount: string) => void;

export { dateWithDash, dateWithSlash, getAmountOnly, getJustAmount, getPayableAmount, getToPayAmount };
