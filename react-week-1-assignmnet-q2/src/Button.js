import React, { useState } from "react";

export default function ({ text, onClick }) {
  let [btnClick, setBtnClick] = useState(false);

  const handeler = () => {
    setBtnClick(true);
  };

  return (
    <>
      <p onClick={handeler}>{text}</p>
      <br />
      {btnClick && <button>This is a onClick Text</button>}
    </>
  );
}
