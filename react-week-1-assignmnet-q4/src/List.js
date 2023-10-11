import { useState } from "react";

export default function List({ items }) {
  const [item, setItem] = useState(["This is a list"]);

  const handelClick = () => {
    setItem([...item, "This is a list"]);
  };

  return (
    <>
      <ul>
        {item.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={handelClick}>Add List</button>
    </>
  );
}
