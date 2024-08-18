// import Nav from "./Component/NavBar";
// import { data } from "./data";
// import Card from "./Component/Card";
// import Section from "./Component/Section";
// export default function App() {
//   let dataShow = data.map((e) => (
//     <Card
//       image={e.image}
//       rate={e.rate}
//       pepole={e.pepole}
//       country={e.country}
//       desc={e.desc}
//       price={e.price}
//     />
//   ));
//   return (
//     <div>
//       <Nav />
//       <Section />
//       <div className="parent container">{dataShow}</div>
//     </div>
//   );
// }
//new project
// import Test from "./Test";
import NavBar from "./Component/NavBar";
// import Box from "./Component/Box";
import { useEffect, useState } from "react";
import BoxGame from "./Component/BoxGame";
import Memo from "./Component/Memo";
export default function App() {
  // const [msg, setMsg] = useState(["as"]);
  // let length = msg.length;
  const [dataForm, setDataForm] = useState({
    counter: "",
    level: "",
    mistake: "",
  });

  // console.log(dataForm.counter);
  // console.log(dataForm.level);
  // console.log(dataForm.mistake);
  function handel(e) {
    //e:العنصر الانبوت
    const { name, value } = e.target; //رح يجيب لك قيم كل من في اوبجيكت
    setDataForm((prev) => {
      return {
        ...prev,
        [name]: value,
        //تم استعمال النييم لكي احدث قيمة الستيت مهم جدا جد
      };
    });
  }
  /*box game set */
  let gameLevel = 0;
  if (dataForm.level === "2x2") {
    gameLevel = 4;
  } else if (dataForm.level === "3x3") {
    gameLevel = 9;
  } else if (dataForm.level === "4x4") {
    gameLevel = 16;
  } else if (dataForm.level === "5x5") {
    gameLevel = 25;
  } else if (dataForm.level === "6x6") {
    gameLevel = 36;
  }
  console.log(gameLevel);
  /*counter game set */
  let counterGame = 0;
  if (dataForm.counter === "60") {
    counterGame = 60;
  } else if (dataForm.counter === "120") {
    counterGame = 120;
  } else if (dataForm.counter === "180") {
    counterGame = 180;
  }
  console.log(counterGame);

  return (
    <div>
      <NavBar />
      {/* <Test /> */}
      <Memo />
      <select
        id="counter"
        onChange={handel}
        value={dataForm.counter}
        name="counter"
      >
        <option value="">--Choose--</option>
        <option value="60">60</option>
        <option value="120">120</option>
        <option value="180">180</option>
      </select>
      <select id="level" onChange={handel} value={dataForm.level} name="level">
        <option value="">--Choose--</option>
        <option value="2x2">2x2</option>
        <option value="3x3">3x3</option>
        <option value="4x4">4x4</option>
        <option value="5x5">5x5</option>
        <option value="6x6">6x6</option>
      </select>
      <select
        id="mistake"
        onChange={handel}
        value={dataForm.mistake}
        name="mistake"
      >
        <option value="">--Choose--</option>
        <option value="30">30</option>
        <option value="45">45</option>
        <option value="60">60</option>
      </select>
      <div className="box-game">
        <BoxGame gameLevel={gameLevel} counterGame={counterGame} />
      </div>
    </div>
  );
}
