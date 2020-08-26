import React from "react";

const Total = ({course}) => {
    const showExercises = course.parts.map(x => x.exercises)
    const total = showExercises.reduce((p, s) => {
        return p + s
    })

    return (
        <>
           <p>Total amount of exercises is {total}</p>
        </>
    )
}

export default Total;