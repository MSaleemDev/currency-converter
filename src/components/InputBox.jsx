import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  inputDis = false,

  className = ""
}) {

  const inputId = useId();

  return (
    <>
      <div className={`bg-white p-3 text-sm rounded-lg flex ${className}`}>
        <div className="w-1/2">
          <label htmlFor={inputId} className="text-black/40 mb-2 inline-block ">
            {label}
          </label>

          <input id={inputId} type="number" min="0" className="outline-none w-full bg-transparent py-1.5" placeholder="Amount" value={amount === 0 ? "" : amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} disabled={inputDis} />

        </div>

        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select className="cursor-pointer rounded-lg bg-gray-100 p-1 outline-none" value={selectCurrency} onChange={
            (e) => onCurrencyChange && onCurrencyChange(e.target.value)
          }>

            {
              currencyOptions.map((currency) => {
                return (
                  <option key={currency} value={currency} > {currency.toUpperCase()}</option>
                );
              })
            }

          </select>
        </div>
      </div>
    </>
  )
}

export default InputBox;
