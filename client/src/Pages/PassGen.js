import { useState, useCallback, useEffect, useRef } from "react";

function passwordGen() {
  const [length, setLength] = useState(8);
  const [numberAllowes, setNumberAllowed] = useState(false);
  const [charAllowes, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDRFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowes) str += "0123456789";
    if (charAllowes) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowes, charAllowes, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3) this allow user to select only 3 leter
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowes, charAllowes, passwordGenerator]);

  return (
    <>
      <div >
        <h1>Password Generator</h1>
        <div >
          <input
            type="text"
            value={password}
            
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            
          >
            Copy
          </button>
        </div>

        <div >
          <div >
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={numberAllowes}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" >
              Numbers
            </label>
          </div>
          <div >
            <input
              type="checkbox"
              defaultChecked={charAllowes}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" >
              Character
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default passwordGen;
