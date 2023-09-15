import { describe, expect, it, vi } from "vitest";
import { RegisterBox } from ".";
import { Calculator } from "../calculator";

describe('register box', ()=>{
  const calculator = new Calculator()
  const registerBox = new RegisterBox(calculator)

  it('checkIn', ()=>{
    const mockSpyAdd = vi
      .spyOn(calculator, 'add')
      .mockImplementationOnce(()=> 10)
    
    const mockSpyMultiply = vi
      .spyOn(calculator, 'multiply')
      .mockImplementationOnce(()=> 10)

    const dummyProduct = {
      name: 'dummy product',
      price: 20,
      qty: 20
    }

    const result = registerBox.checkIn(dummyProduct)

    console.log(result.registry)

    expect(mockSpyAdd).toReturnWith(10)
    expect(mockSpyMultiply).toHaveReturnedWith(10)

    const secondResult = registerBox.checkIn(dummyProduct)
    

    console.log(mockSpyAdd.mock.calls)

    expect(secondResult.registry[0].products[0]).toBe(dummyProduct)

  })
})
