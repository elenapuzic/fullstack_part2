import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({...course}) => {
    return(
        <div>
            {course.course.map((x) => {
                return(
                    <div key={x.id}>
                        <Header name={x.name}/>
                        <Content parts={x.parts}/>
                        <Total course={x}/>
                    </div>)
            })}
        </div>
    )
}

export default Course;
