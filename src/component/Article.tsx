import React from "react";

type ArticleP = {
    children: JSX.Element
}

function Article({ children }: ArticleP) {

    return (
        <div>
            {children}
        </div>
    )
}
export default Article