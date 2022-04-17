import { getJustAmount } from "./index"

test('get amount', () => {
    expect(getJustAmount("Rs. 200")).toBe("200")
})