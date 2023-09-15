import{j as t,R as y,M as u}from"./reactflow-a852bfd5.js";import{a as f,R as g}from"./react-67fe9742.js";import{s as a,H as x,M as h,d as b,D as k}from"./spectacle-a94c6cee.js";import"./mermaid-120b84ec.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();var i={},p=f;i.createRoot=p.createRoot,i.hydrateRoot=p.hydrateRoot;const j=[{id:"1",position:{x:200,y:0},data:{label:"Test double"},style:{background:"#456785"}},{id:"2",position:{x:0,y:100},data:{label:"mock"}},{id:"2-1",position:{x:0,y:200},data:{label:"mock and spy"}},{id:"3",position:{x:400,y:100},data:{label:"stub"}},{id:"3-1",position:{x:400,y:200},data:{label:"stub, fake, dummy"}}],R=[{id:"e1-2",source:"1",target:"2"},{id:"el-3",source:"1",target:"3"},{id:"el-2-1",source:"2",target:"2-1"},{id:"el-3-1",source:"3",target:"3-1"}],v=()=>t.jsx(y,{fitView:!0,nodes:j,edges:R}),w=()=>t.jsxs(a,{children:[t.jsx(x,{children:"Test doubles"}),t.jsx("p",{children:'proviene del termino "doble de accion"'}),t.jsx(v,{})]}),P=[{id:"1",data:{label:"System under test"},position:{x:0,y:100}},{id:"2",data:{label:"Service bus front door"},position:{x:200,y:0}},{id:"3",data:{label:"Data base"},position:{x:200,y:200},draggable:!0}],O=[{id:"ed-2",label:"send notification / mock",source:"2",target:"1",markerEnd:{type:u.ArrowClosed}},{id:"ed-3",label:"send notification / stub",source:"1",target:"3",markerEnd:{type:u.ArrowClosed}}],I=()=>t.jsx(y,{nodes:P,edges:O,fitView:!0}),M=()=>t.jsxs(a,{children:[t.jsx(x,{children:"How they work"}),t.jsx(I,{})]}),s=({md:l,title:r,language:n="tsx"})=>t.jsxs(a,{children:[t.jsx("h1",{children:r}),t.jsx(h,{children:`\`\`\`${n}
`+l+"\n```"})]}),S=`import { describe, expect, it, vi } from 'vitest'
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
`,T=`import { describe, expect, it, vi } from "vitest";
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
`,A=`import type { Calculator } from "../calculator";

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
`;const m="Mock (tool) vs mock. (the test double)";function B(){return t.jsxs(b,{template:t.jsx(k,{}),children:[t.jsx(w,{}),t.jsx(M,{}),t.jsx(s,{title:"Dependency Injection",md:A}),t.jsx(s,{title:m,md:S}),t.jsx(s,{title:m,md:T})]})}i.createRoot(document.getElementById("root")).render(t.jsx(g.StrictMode,{children:t.jsx(B,{})}));
