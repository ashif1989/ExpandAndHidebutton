import "./styles.css";
import { useState } from "react";

export default function App() {
  const [mobiles, setMobiles] = useState(["Samsung", "Iphone", "OnePlus"]);
  const [watches, setWatches] = useState(["iWatch", "Diesel", "Casio"]);
  const [laptops, setLaptops] = useState(null);
  const [mobClicked, setMobClicked] = useState(false);
  const [watchClicked, setWatchClicked] = useState(false);
  const [buttonValue, setButtonValue] = useState("Expand");
  const [watchButtonValue, setWatchButtonValue] = useState("Expand");

  let handleOnClickMobile = () => {
    setMobClicked(!mobClicked);
    console.log(mobClicked);
    if (mobClicked) {
      setButtonValue("Expand");
    } else {
      setButtonValue("Hide");
      setWatchClicked(false);
      setWatchButtonValue("Expand");
    }
  };

  let handleOnClickWatch = () => {
    setWatchClicked(!watchClicked);

    if (watchClicked) {
      setWatchButtonValue("Expand");
    } else {
      setWatchButtonValue("Hide");
      setMobClicked(false);
      setButtonValue("Expand");
    }
  };

  return (
    <div className="App">
      <h1>Electronic Gadgets</h1>
      <h3>Mobiles</h3>
      {mobiles && <button onClick={handleOnClickMobile}>{buttonValue}</button>}
      {mobClicked &&
        mobiles.map((mob) => (
          <>
            <ul>
              <li>{mob}</li>
            </ul>
          </>
        ))}
      <h3>Watches</h3>
      {watches && (
        <button onClick={handleOnClickWatch}>{watchButtonValue}</button>
      )}
      {watchClicked &&
        watches.map((watch) => (
          <>
            <ul>
              <li>{watch}</li>
            </ul>
          </>
        ))}
      <h3>Laptops</h3>
      {laptops && <button>Expand</button>}
    </div>
  );
}
