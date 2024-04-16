import React, { useState } from 'react';
import User from './component/User'
import Article from './component/Article'
import { SrvRecord } from 'dns';
import Second from './component/Second';

// type User2={name:string;age:number}
// export type Array2={num1:number}
function sum(a: number, b: number): number {
  return a + b
}
type State = {
  name: string;
  age: number
}
type State2 = State & {
  childern:string[]
}
let st:State2={
  name:"",
  age:22,
  childern:["sara"]

}
interface IState {
  name: string;
  age: number
}
interface IState2 extends IState  {
  childern:string[]
}
let ist:IState2={
  name:"",
  age:22,
  childern:["sara"]

}
function App() {
  // const [state, setState] = useState<State | null>(null);
  const [state, setState] = useState<string>("sara");

  // let name :string= "ali"
  // name="1"

  ////////////////////////////////////////////////Type for object and array
  // let array:number[]=[1,2,3]
  // let array2:(number|string)[]=[1,"sara"]

  // let user:User2={
  //   name:"sara",
  //   age:25
  // }
  return (
    <div>
      TypeScript
      {/* <h1>{sum(2,5)}</h1> */}
      <User name="sara" age={24} hasChild={true} sum={sum} father='ss' mother={'momi'} />
      <br />
      <Article>
        <h1>dddd</h1>
      </Article>
      {/* {
        state?.name
      } */}

      <Second value={state} onChange={setState}/>
    </div>
  );
}

export default App;
