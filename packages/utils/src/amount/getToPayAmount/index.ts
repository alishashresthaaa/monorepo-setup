// pass payable amount and total amount and return the higher amount between them
// the greater amount is to be actually paid
// if serviceCharge = payableAmount is paid
//  if cashback = totalAmount is paid

import { getJustAmount } from "../getJustAmount";

export const getToPayAmount = (payableAmount: any, totalAmount: any) => {
  let payAmt = getJustAmount(payableAmount);

  try {
    if (payAmt) payAmt = Number(payAmt.replace(/,/g, ""));
  } catch (error) {}

  const totalAmt = getJustAmount(totalAmount);

  if (Number(payAmt) > Number(totalAmt)) {
    return payAmt;
  } else if (Number(payAmt) < Number(totalAmt)) {
    return totalAmt;
  } else if (Number(payAmt) === Number(totalAmt)) {
    return payAmt;
  }

  return;
};
