import React from 'react';
type User2={name:string;age:number}
export type Array2={num1:number}
function App() {

  let name :string= "ali"
  name="1"

  ////////////////////////////////////////////////Type for object and array
  let array:number[]=[1,2,3]
  let array2:(number|string)[]=[1,"sara"]

  let user:User2={
    name:"sara",
    age:25
  }
  return (
    <div>
      TypeScript
    </div>
  );
}

export default App;
