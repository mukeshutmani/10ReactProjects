import { useCallback, useEffect, useRef, useState } from "react";

function App() {


  const [length, setLength] = useState(8);
  const [numAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)
  
  


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_{}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numAllowed,charAllowed, setPassword]);


 useEffect(()=> {
      passwordGenerator()
 }, [passwordGenerator])
 

 const copyPasswordToclipboard = useCallback(() =>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
 }, [password])
 

 
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-500 ">
        <h1 className="text-center text-white my-4">Password Generator </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            value={password}
            className=" outline-none w-full py-2 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
            type="text"
          />

          <button 
          onClick={copyPasswordToclipboard}
          className=" outline-none 
          bg-blue-700 text-white px-3 py-1 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              min={6}
              max={100}
              value={length}
              className=" cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
              type="range"
            />
            <label> Length: {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={()=> {setNumberAllowed((prev)=> !prev)}}
            />
          <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
             onChange={()=> {setCharAllowed((prev)=>!prev)}}
            />
          <label htmlFor="charInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
