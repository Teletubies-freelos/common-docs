interface CalculatorHistoryItem {
  operation: keyof Omit<Calculator, 'history'>;
  input: number[];
  result: number;
}

export class Calculator{
  private _history: CalculatorHistoryItem[] = []

  private static reduceAdd(prev: number, next: number){
    return prev + next
  }

  constructor(private igv = 18){}

  add(firstSummand: number | number[], ...args: number[]){
    const initialAddition = (Array.isArray(firstSummand)) 
      ? firstSummand.reduce(Calculator.reduceAdd) 
      : firstSummand

    const result = args.reduce(Calculator.reduceAdd, initialAddition)

    this._history.push({
      operation: 'add',
      input: args,
      result,
    })

    return result
  }

  subtract(a: number, b: number){
    const result = a - b
  
    this._history.push({
      operation: 'subtract',
      input: [a, b],
      result,
    })

    return result
  }

  multiply(...args: number[]){
    const result = args.reduce((prev, next)=> prev*next)
    
    this._history.push({
      operation: 'multiply',
      input: args,
      result
    })

    return result;
  }

  divide(a: number, b: number){
    const result = a/b

    this._history.push({
      operation: 'divide',
      input: [a, b],
      result
    })

    return result;
  }

  get history(){
    return [...this._history]
  }

  flushHistory(){
    this._history = []
  }

  deleteEntry(position: number){
    return this._history.splice(position)
  }

  withIgv(price: number){
    return this.multiply(this.add(1, this.igv/100),  price);
  }

}
