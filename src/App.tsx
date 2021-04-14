import { useState } from "react";
import "./App.css";
import d1 from "./img/d1.png";
import d2 from "./img/d2.png";
import d3 from "./img/d3.png";
import d4 from "./img/d4.png";
import d5 from "./img/d5.png";
import d6 from "./img/d6.png";

function App() {
  let nums: string[] = [d1, d2, d3, d4, d5, d6];
  const [hiScore, setHiScore] = useState(25);

  let [sc1, setSc1] = useState(0);
  let [sc2, setSc2] = useState(0);
  let [index, setIndex] = useState(5);
  let [curPlayer, setCurPlayer] = useState(1);

  //let count = 0;

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log(e);
    //count++;
    //count === 0
    //? (e.target.innerHTML = "Roll")
    //: (e.target.innerHTML = "Roll Again");
    if (sc1 >= hiScore) {
      alert("Player 1 has won");
      setCurPlayer(10);
    } else if (sc2 >= hiScore) {
      alert("Player 2 has won");
      setCurPlayer(10);
    }
    setIndex(Math.floor(Math.random() * 6));
    console.log(index);
    if (curPlayer === 1) {
      if (index === 0) {
        setCurPlayer(2);
        setSc1(0);
      } else {
        setSc1(sc1 + index);
        setIndex(0);
      }
    } else {
      if (index === 0) {
        setSc2(0);
        setCurPlayer(1);
      } else {
        setSc2(sc2 + index);
      }
    }
  };

  const handleAdd = () => {
    if (curPlayer === 1) {
      setSc1(sc1 + index);
      setCurPlayer(2);
    } else {
      setSc2(sc2 + index);
      setCurPlayer(1);
    }
  };

  return (
    <div className="App">
      <h1 className="head">Pig Game</h1>
      <div className="bg">
        <h2>PLAYER 1</h2>
        <h1>{sc1}</h1>
        <h2>PLAYER 2</h2>
        <h1>{sc2}</h1>
      </div>
      <button className="btn-roll" onClick={handleAdd}>
        Add
      </button>
      <br />
      <img src={nums[index]} alt="" width="200px" height="200px" />
      <br />
      <button className="btn-roll" onClick={handleClick}>
        Roll
      </button>
    </div>
  );
}

export default App;
