import React from "react";
import Part from "./Part";

const Content = ({parts}) => {
    return(
        <>
            {parts.map((part) => {
                return (
                    <div key={part.id}>
                        <Part
                            part={part}/>
                    </div>
                )}
            )}
        </>
    )
}

export default Content;