import React from "react";
function User(props: { name: string; age: number; hasChild: boolean, sum:(a:number,b:number)=> number }) {

    return (
        <div>
            {props.name}
            {props.age}

            {`${props.hasChild}`}<br/>
            {props.sum(4,5)}

        </div>
    )
}
export default User