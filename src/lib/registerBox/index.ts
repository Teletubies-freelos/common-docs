import type { Calculator } from "../calculator";

interface Product{
  qty?: number;
  name: string;
  price: number;
}

interface RegistryItem{
  products: Product[],
  rawTotal: number;
  total: number;
}

export class RegisterBox{
  constructor(private calculator: Calculator, private _registry : RegistryItem[] = []){}

  checkIn(productsOrProduct: Product[] | Product){
    const products = Array.isArray(productsOrProduct)? productsOrProduct : [productsOrProduct]

    const rawTotal = this
      .calculator
      .add(products
        .map(
          ({qty = 1, price})=> this.calculator.multiply(qty, price)
        )
      )
    
    this._registry.push({
      products,
      rawTotal,
      total: this.calculator.withIgv(rawTotal)
    })

    return this;
  }

  get registry(){
    return [...this._registry]
  }
}
