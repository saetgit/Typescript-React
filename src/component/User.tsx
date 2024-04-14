import React from "react";
type USER = {
    name: string; age: number; hasChild: boolean; sum: (a: number, b: number) => number
}

// function

// function User({age,name,hasChild,sum}:USER) { 


// arrow function
    const User:React.FC<USER>=({age,name,hasChild,sum})=> {

    return (
        <div>
            {name}
            {age}

            {`${hasChild}`}<br />
            {sum(4, 5)}

        </div>
    )
}
export default User