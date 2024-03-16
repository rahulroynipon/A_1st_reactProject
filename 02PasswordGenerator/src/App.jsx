import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'


function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [symbolAllow, setSymbolAllow] = useState(false);
  const [password, setPass] = useState('');

  const passRef = useRef(null)

  const copyPass = useCallback(()=>{
    window.navigator.clipboard.writeText(password)
    passRef.current?.select()
  },[password])

  

  const passGenerator = useCallback(() => {
    let pass = '';
    let str = 'abcghijklmnopqrzABCDEJKTWXYZ';
    const num = '1234567890';
    const symbol = ',<.>/?;:{[}]|()-_@#$%^&*+';

    if (numAllow) str += num;
    if (symbolAllow) str += symbol;

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPass(pass);
  }, [length,numAllow,symbolAllow]);

  useEffect(()=>{
    passGenerator()
  },[passGenerator,length,numAllow,symbolAllow])


  return (
    <>
      <main className='bg-white mt-24 rounded py-6 px-6 flex flex-col items-center justify-center'>
        <h1 className='text-xl font-semibold mb-2'>Password Generator</h1>
        <section className='flex gap-2 justify-center mt-3'>
          <input
           ref={passRef}
            type='text'
            value={password}
            readOnly
            className='px-2 bg-gray-300 w-[300px] border outline-none rounded'
          />
          <button onClick={copyPass}
            className='border font-semibold px-3 py-2
             bg-blue-600 hover:bg-blue-500 text-white transition-all
             rounded'
          >
            Copy
          </button>
        </section>

        <section>
          <ul className='flex justify-between items-center gap-5 mt-3'>
            <li className='flex items-center justify-center gap-1'>
              <input
                type='range'
                value={length}
                onChange={(e) => setLength(e.target.value)}
                id='range'
                min={4}
                max={20}
                className='cursor-pointer '
              ></input>
              <label htmlFor='range'>{length} Length</label>
            </li>

            <li className='flex items-center justify-center gap-1'>
              <input
                type='checkbox'
                checked={numAllow}
                onChange={() => setNumAllow(!numAllow)}
                id='number'
                className='cursor-pointer '
              />
              <label htmlFor='number' className='cursor-pointer '>Number</label>
            </li>

            <li className='flex items-center justify-center gap-1'>
              <input
                type='checkbox'
                checked={symbolAllow}
                onChange={() => setSymbolAllow(!symbolAllow)}
                id='symbol'
                className='cursor-pointer '
              />
              <label htmlFor='symbol' className='cursor-pointer '>Symbol</label>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
