import React, { useState } from 'react'

const App = () => {

  const [gender, setGender] = useState("");

  let timer = null;

  const changeHandler = (e) => {
    if (e.target.value.trim() === "") {
      setGender("");
      return;
    }
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      checkGender(e.target.value);
    }, 1500);
  }

  const checkGender = async (data) => {
    const apiCall = await fetch(`https://api.genderize.io?name=${data}`);
    const apiData = await apiCall.json();
    setGender(apiData.gender);
  }



  return (
    <>
      <div>
        <label htmlFor='name'>
          Enter Name
        </label>
        <input type="text" id='name' onChange={changeHandler} />
      </div>
      <div>
        <input type="text" readOnly value={gender} />
      </div>
    </>
  );
}

export default App