import React, { useEffect, useState } from 'react';
import "./App.css";

const App = () => {
    const [gender, setGender] = useState("");
    const [name, setName] = useState("");

    const changeHandler = (e) => {
        setName(e.target.value);
    }

    // Sub Approach 1 

    useEffect(() => {
        let timer = setTimeout(() => {
            fetch(`https://api.genderize.io?name=${name}`)
                .then((data) => data.json())
                .then((data) => setGender(data.gender));
        }, 1500);

        return () => {
            clearTimeout(timer);
        }
    }, [name]);



    // Sub Approach 2

    // useEffect(() => {
    //     const controller = new AbortController();
    //     const signal = controller.signal;

    //     fetch(`https://api.genderize.io?name=${name}`, { signal: signal })
    //         .then((data) => data.json())
    //         .then((data) => setGender(data.gender))
    //         .catch(e => {
    //             if (e.name != "AbortError") {
    //                 console.log("Error - ", e);
    //             }
    //         });

    //     return () => {
    //         controller.abort();
    //     }
    // }, [name]);

    return (
        <>
            <div>
                <label htmlFor='name'>Enter Name</label>
                <input type="text" value={name} onChange={changeHandler} name="name" />
            </div>
            <div>
                <label htmlFor='gender'>Gender</label>
                <input type="text" value={gender} readOnly />
            </div>
        </>
    )
}

export default App