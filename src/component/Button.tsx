import React, { ComponentProps } from "react";


type Button = ComponentProps<"button"> & {
    buttonLabel?: string
}
function Button({ type, onChange, onClick }: Button) {

    return (
        <div>
            <button type={type}>sss</button>        </div>
    )
}
export default Button