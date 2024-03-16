import useExchange from './hook/useExchange';
import { useCallback, useState } from 'react';

function App() {
  const [FROMTK, setFROMTK] = useState(0);
  const [FROMcar, setFROMcar] = useState("USD");
  const [TOcar, setTOcar] = useState('BDT');
  const main = useExchange(FROMcar);
  const [TOTK, setTOTK] = useState(0);

  const Convert = useCallback((fromCurrency, toCurrency, amount) => {
    const rate = main[toCurrency];
    if (rate) {
      const convertedAmount = amount * rate;
      setTOTK(convertedAmount);
    }
  }, [main]);

  const handleConvert = useCallback(() => {
    Convert(FROMcar, TOcar, FROMTK);
  }, [FROMcar, TOcar, FROMTK, Convert]);
  
  return (
    <>
      <div>
        <p>Money Exchanger</p>

        <form className='flex flex-col gap-y-2' onSubmit={(e) => e.preventDefault()}>
          <div>
            <input type="text" value={FROMTK} onChange={(e) => setFROMTK(e.target.value)} />
            <select value={FROMcar} onChange={(e) => setFROMcar(e.target.value)}>
              {Object.keys(main).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <div>
            <input disabled type="text" value={TOTK} />
            <select value={TOcar} onChange={(e) => setTOcar(e.target.value)}>
              {Object.keys(main).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <input onClick={handleConvert} className="p-2 border rounded" type="submit" value="Convert" />
        </form>
      </div>
    </>
  );
}

export default App;
