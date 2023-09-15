import { describe, expect, it, vi } from 'vitest'
import { Calculator } from '.'


describe('calculator', ()=>{
  const calculator = new Calculator()

  it('addition spy', ()=>{
    const spy = vi
      .spyOn(calculator, 'add')
    
    calculator.add(3, 2, 5)
    calculator.add(6, 7)

    console.log(spy.mock.calls) // [ [ 3, 2, 5 ], [ 6, 7 ] ]
    
    expect(spy)
      .toBeCalledTimes(2)
  })

  it('addition ')
})
