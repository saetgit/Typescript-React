import React from "react";

interface TSecond {
    value:string;
    onChange: React.Dispatch<React.SetStateAction<string>>
}
// type TSecond = {
//     value:string;
//     onChange: React.Dispatch<React.SetStateAction<string>>
// }

function Second({ value,onChange }: TSecond) {

    return (
        <div>
            {value}
        </div>
    )
}
export default Second