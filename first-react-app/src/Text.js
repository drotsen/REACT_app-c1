import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
    const [text, setText] = useState("");
// useeffect example
   
useEffect(() =>{
        console.log("hejheja Useeffect hook");
    return () => {
        console.log("Component unmounted!");
    };

    },[]);

    return (
        <div>
            <input
                onChange={(event) => {
                    setText(event.target.value);
                }}
        />

        <h1>{text}</h1>
        </div>
    );
};