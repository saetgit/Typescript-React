import React from "react";

type TSecond = {
    value:string;
    onChange: React.Dispatch<React.SetStateAction<string>>
}

function Second({ value,onChange }: TSecond) {

    return (
        <div>
            {value}
        </div>
    )
}
export default Second