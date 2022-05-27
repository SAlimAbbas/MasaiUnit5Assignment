
const sum=require("../components/sum_args")



describe("sum problem test cases",()=>{

    test("sum problem testcase",()=>{
        expect(sum(1,2,"ab")).toBe(undefined)
         expect(sum(1,2,3)).toBe(6)
       

    })

    test("sum problem for negative and positive number",()=>{
        expect(sum(-1,-1,0)).toBe(-2)
        expect(sum(100,-1,0)).toBe(99)
    })

})