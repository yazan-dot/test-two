import { useState, useEffect } from "react";

export default function BoxGame(props) {
  const [number, setNumber] = useState(props.counterGame);

  const boxes = Array.from({ length: props.gameLevel }, (_, i) => (
    <div key={i} className="box"></div>
  ));

  useEffect(() => {
    setNumber(props.counterGame); // Update number when props.counterGame changes
    const interval = setInterval(() => {
      setNumber((prevNumber) => (prevNumber > 0 ? prevNumber - 1 : 0));
    }, 1000); // decrease the number every second

    return () => clearInterval(interval); 
  }, [props.counterGame]);

  return (
    <div>
    <p>{}</p>
      <p className="counter">{number}</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{boxes}</div>
    </div>
  );
}
