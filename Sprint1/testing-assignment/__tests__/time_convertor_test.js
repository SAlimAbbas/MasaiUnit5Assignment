const time_convertor = require("../components/time_convertor")

test("time convertor checking",()=>{
    expect(time_convertor(1000).second).toBe(1)
    expect(time_convertor(1000).minut).toBe(0)
    expect(time_convertor(1000).hour).toBe(0)

    expect(time_convertor(200000).second).toBe(20)
    expect(time_convertor(200000).minut).toBe(3)
    expect(time_convertor(20000).hour).toBe(0)
})