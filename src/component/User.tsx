import React from "react";
function User(Props: { name: string; age: number; hasChild: boolean }) {

    return (
        <div>
            {Props.name}
            {Props.age}

            {`${Props.hasChild}`}
        </div>
    )
}
export default User