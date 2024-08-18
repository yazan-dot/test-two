// import { useState } from "react";
// export default function Test() {
//   const [initial, setInitial] = useState(7);
//   function set() {
//     setInitial((sub) => sub - 1);
//   }
//   function setT() {
//     setInitial((add) => add + 1);
//   }
//   const [yazan, setYazan] = useState(true);
//   function hh() {
//     setYazan(!yazan);
//   }
//   //   const thingsArray = ["things 1 ", "things 2"];
//   //   let [ali, setAli] = useState(thingsArray);

//   //   function addItem() {
//   //     setAli((prev) => {
//   //       return [...prev, `Things ${ali.length + 1}`];
//   //     });
//   //   }
//   //   let sho = ali.map((e) => <p>{e}</p>);
//   const [item, setItem] = useState(["things 1 ", "things 2"]);
//   function addItem() {
//     setItem((preve) => {
//       return [...preve, `things ${preve.length + 1}`];
//     });
//   }
//   let itemPara = item.map((e) => <p>{e}</p>);
//   console.log(itemPara);
//   return (
//     <>
//       <button onClick={set}>-</button>
//       <h1>{initial}</h1>
//       <button onClick={setT}>+</button>
//       <h1 onClick={hh} style={{ marginTop: "100px", fontSize: "75px" }}>
//         {yazan ? "Yes" : "No"}
//       </h1>
//       <div style={{ marginTop: "100px" }}>
//         <button onClick={addItem}>Add Item</button>
//         <>{itemPara}</>
//       </div>
//     </>
//   );
// }
