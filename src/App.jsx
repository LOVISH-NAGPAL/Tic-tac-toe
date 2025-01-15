import { useEffect, useState } from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setData1, setData2, clearData } from "./redux-store/slice/dataSlice";

function App() {
  const [turn, setTurn] = useState(true);
  const dispatch = useDispatch();
  const [win, setWin] = useState(false);
  const [draw, setDraw] = useState(false);
  const [winner, setWinner] = useState("");
  let btnClicked1 = useSelector((state) => state.data.value1);

  let btnClicked2 = useSelector((state) => state.data.value2);

  let btnClicked = [...btnClicked1, ...btnClicked2];
  let winSituations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  useEffect(() => {
    if (
      winSituations.some((situation) =>
        situation.every((item) => btnClicked1.includes(item))
      )
    ) {
      setWin(true);
      setWinner("'X'");
    }

    if (
      winSituations.some((situation) =>
        situation.every((item) => btnClicked2.includes(item))
      )
    ) {
      setWin(true);
      setWinner("'O'");
    }
  }, [btnClicked1, btnClicked2]);
  useEffect(() => {
    if (!win && btnClicked.length === 9) {
      setDraw(true);
    }
  }, [btnClicked, win]);

  return (
    <>
      <div className="mx-auto">
        <h1 className="text-center">Tic Tac Toe</h1>
      </div>

      <div className="bg-slate-400 max-w-[350px] p-10 m-auto mt-10 w-2/3 rounded-3xl">
        {win || draw ? (
          ""
        ) : (
          <p className={`text-center font-bold text-3xl text-black mb-5`}>
            Turn is of{" "}
            <span className={`${turn ? "text-green-600" : "text-blue-500"}`}>
              '{turn ? "X" : "O"}'
            </span>
          </p>
        )}

        <div className="mx-auto">
          <div className="flex gap-5 justify-center p-3">
            <button
              className={`p-3 hover:scale-125 transition-all duration-500 ${
                btnClicked1.some((item) => item === 1)
                  ? "disabled:bg-green-600 disabled:scale-100"
                  : "disabled:bg-blue-500 disabled:scale-100"
              }`}
              disabled={btnClicked.find((item) => item === 1) !== undefined}
              onClick={() => {
                turn ? dispatch(setData1(1)) : dispatch(setData2(1));
                setTurn(!turn);
              }}><div className="w-10 h-10  flex justify-center items-center text-3xl">{
                btnClicked1.some((item) => item === 1) ? "X" : ""
              }
              {
                btnClicked2.some((item) => item === 1) ? "O" : ""
              }</div></button>
            <button
              className={`p-3 hover:scale-125 transition-all duration-500 ${
                btnClicked1.some((item) => item === 2)
                  ? "disabled:bg-green-600 disabled:scale-100"
                  : "disabled:bg-blue-500 disabled:scale-100"
              }`}
              disabled={btnClicked.find((item) => item === 2) !== undefined}
              onClick={() => {
                turn ? dispatch(setData1(2)) : dispatch(setData2(2));
                setTurn(!turn);
              }}>
                <div className="w-10 h-10  flex justify-center items-center text-3xl">{
                btnClicked1.some((item) => item === 2) ? "X" : ""
              }
              {
                btnClicked2.some((item) => item === 2) ? "O" : ""
              }</div>
              </button>
            <button
              className={`p-3 hover:scale-125 transition-all duration-500 ${
                btnClicked1.some((item) => item === 3)
                  ? "disabled:bg-green-600 disabled:scale-100"
                  : "disabled:bg-blue-500 disabled:scale-100"
              }`}
              disabled={btnClicked.find((item) => item === 3) !== undefined}
              onClick={() => {
                turn ? dispatch(setData1(3)) : dispatch(setData2(3));
                setTurn(!turn);
              }}><div className="w-10 h-10  flex justify-center items-center text-3xl">{
                btnClicked1.some((item) => item === 3) ? "X" : ""
              }
              {
                btnClicked2.some((item) => item === 3) ? "O" : ""
              }</div></button>
          </div>
          <div className="flex gap-5 justify-center p-3">
            <button
              className={`p-3 hover:scale-125 transition-all duration-500 ${
                btnClicked1.some((item) => item === 4)
                  ? "disabled:bg-green-600 disabled:scale-100"
                  : "disabled:bg-blue-500 disabled:scale-100"
              }`}
              disabled={btnClicked.find((item) => item === 4) !== undefined}
              onClick={() => {
                turn ? dispatch(setData1(4)) : dispatch(setData2(4));
                setTurn(!turn);
              }}><div className="w-10 h-10  flex justify-center items-center text-3xl">{
                btnClicked1.some((item) => item === 4) ? "X" : ""
              }
              {
                btnClicked2.some((item) => item === 4) ? "O" : ""
              }</div></button>
            <button
              className={`p-3 hover:scale-125 transition-all duration-500 ${
                btnClicked1.some((item) => item === 5)
                  ? "disabled:bg-green-600 disabled:scale-100"
                  : "disabled:bg-blue-500 disabled:scale-100"
              }`}
              disabled={btnClicked.find((item) => item === 5) !== undefined}
              onClick={() => {
                turn ? dispatch(setData1(5)) : dispatch(setData2(5));
                setTurn(!turn);
              }}><div className="w-10 h-10  flex justify-center items-center text-3xl">{
                btnClicked1.some((item) => item === 5) ? "X" : ""
              }
              {
                btnClicked2.some((item) => item === 5) ? "O" : ""
              }</div></button>
            <button
              className={`p-3 hover:scale-125 transition-all duration-500 ${
                btnClicked1.some((item) => item === 6)
                  ? "disabled:bg-green-600 disabled:scale-100"
                  : "disabled:bg-blue-500 disabled:scale-100"
              }`}
              disabled={btnClicked.find((item) => item === 6) !== undefined}
              onClick={() => {
                turn ? dispatch(setData1(6)) : dispatch(setData2(6));
                setTurn(!turn);
              }}><div className="w-10 h-10  flex justify-center items-center text-3xl">{
                btnClicked1.some((item) => item === 6) ? "X" : ""
              }
              {
                btnClicked2.some((item) => item === 6) ? "O" : ""
              }</div></button>
          </div>
          <div className="flex gap-5 justify-center p-3">
            <button
              className={`p-3 hover:scale-125 transition-all duration-500 ${
                btnClicked1.some((item) => item === 7)
                  ? "disabled:bg-green-600 disabled:scale-100"
                  : "disabled:bg-blue-500 disabled:scale-100"
              }`}
              disabled={btnClicked.find((item) => item === 7) !== undefined}
              onClick={() => {
                turn ? dispatch(setData1(7)) : dispatch(setData2(7));
                setTurn(!turn);
              }}><div className="w-10 h-10  flex justify-center items-center text-3xl">{
                btnClicked1.some((item) => item === 7) ? "X" : ""
              }
              {
                btnClicked2.some((item) => item === 7) ? "O" : ""
              }</div></button>
            <button
              className={`p-3 hover:scale-125 transition-all duration-500 ${
                btnClicked1.some((item) => item === 8)
                  ? "disabled:bg-green-600 disabled:scale-100"
                  : "disabled:bg-blue-500 disabled:scale-100"
              }`}
              disabled={btnClicked.find((item) => item === 8) !== undefined}
              onClick={() => {
                turn ? dispatch(setData1(8)) : dispatch(setData2(8));
                setTurn(!turn);
              }}><div className="w-10 h-10  flex justify-center items-center text-3xl">{
                btnClicked1.some((item) => item === 8) ? "X" : ""
              }
              {
                btnClicked2.some((item) => item === 8) ? "O" : ""
              }</div></button>
            <button
              className={`p-3 hover:scale-125 transition-all duration-500 ${
                btnClicked1.some((item) => item === 9)
                  ? "disabled:bg-green-600 disabled:scale-100"
                  : "disabled:bg-blue-500 disabled:scale-100"
              }`}
              disabled={btnClicked.find((item) => item === 9) !== undefined}
              onClick={() => {
                turn ? dispatch(setData1(9)) : dispatch(setData2(9));
                setTurn(!turn);
              }}>
                <div className="w-10 h-10  flex justify-center items-center text-3xl">{
                btnClicked1.some((item) => item === 9) ? "X" : ""
              }
              {
                btnClicked2.some((item) => item === 9) ? "O" : ""
              }</div>
              </button>
          </div>
          {winner || draw ? (
            <p className={`text-2xl font-bold  text-center ${winner==="'X'"?'text-green-600 ':'text-blue-500'}`}>
              {winner ? `Winner is ${winner}` : <span className="text-black">Draw !!</span>}
            </p>
          ) : (
            ""
          )}
          {winner || draw ? (
            <div className="w-2/3 text-center m-auto mt-5">
              <button
                className="w-full hover:scale-110 transition-all duration-500"
                onClick={() => {
                  dispatch(clearData());
                  setTurn(true);

                  setWinner("");
                  setWin(false);
                  setDraw(false);
                }}>
                Reset
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      {win || draw ? (
        ""
      ) : (
        <div className="w-1/2 text-center m-auto mt-5 max-w-[350px]">
          <button
            className="w-full hover:scale-110 transition-all duration-500 bg-slate-400 text-black"
            onClick={() => {
              dispatch(clearData());
              setTurn(true);

              setWinner("");
              setWin(false);
            }}>
            Rematch
          </button>
        </div>
      )}
    </>
  );
}

export default App;
