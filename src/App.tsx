import React from 'react';
import User from './component/User'
import Article from './component/Article'

// type User2={name:string;age:number}
// export type Array2={num1:number}
function sum(a: number, b: number): number {
  return a + b
}
function App() {

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
    </div>
  );
}

export default App;
