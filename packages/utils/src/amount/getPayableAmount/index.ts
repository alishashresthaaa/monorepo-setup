/**
 * Get payable amount
 * @param cashBackList
 * @returns
 */
export const getPayableAmount = (cashBackList: []) => {
  let payableAmount: any = [];
  // console.log("lll", cashBackList)

  if (cashBackList) {
    if (cashBackList.length > 0) {
      cashBackList.forEach((item: any) => {
        const values = Object.values(item);
        if (values.includes("Payable Amount") === true) {
          payableAmount = item.data;
        }
      });
    }
  }

  return payableAmount;
};
