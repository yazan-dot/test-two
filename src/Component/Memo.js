import { useEffect, useRef, useState } from "react";

export default function Memo() {
  const [isFetched, setIsFetched] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [name, setName] = useState("");
  const yazanRef = useRef([]); // ارري فاضية
  // const yazanRef =[] نفس

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        yazanRef.current = data.data.memes; // Store the array in ref
        setIsFetched(true); // Trigger a re-render to reflect the fetched data
      });
  }, []); // Empty dependency array ensures the effect runs only once
  let image;
  function clicked() {
    let x = yazanRef.current;
    let randome = Math.floor(Math.random() * x.length);
    image = x[randome].url;
    // console.log(x[randome].name);
    setName(x[randome].name);

    if (isFetched) {
      setImageURL(image);
    }
  }
  // The array is available in yazanRef.current

  function sad(e) {
    e.preventDefault();
  }

  return (
    <div className="memo">
      <div className="content container">
        <form onSubmit={sad}>
          <div
            className="first-input"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label>Top text</label>
            <input type="text" id="first" value={name} />
          </div>
          <div
            className="second-input"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label htmlFor="second">Bottom text</label>
            <input type="text" id="second" value={name} />
          </div>
          <button type="submit" onClick={clicked}>
            Get a new meme image 🖼
          </button>
        </form>
        <img src={imageURL} alt="logo" />
      </div>
    </div>
  );
}
