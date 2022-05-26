
const tax_cal=require("../components/tax_calculator")

test("testing calculator",()=>{
    expect(tax_cal(500000)).toBe(25000)
    expect(tax_cal(-500000)).toBe(undefined)
    expect(tax_cal(0)).toBe(0)
})