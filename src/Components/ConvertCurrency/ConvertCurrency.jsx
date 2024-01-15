import React, { useState } from 'react';

const ConvertCurrency = () => {
    const [inputValue, setInputValue] = useState('1');
    // const [inputValueBDT, setInputValueBDT] = useState('125');

    const handleInputChange = (e) => {
        const value = e.target.value;
        console.log(value);
        if (value < 0) {
            alert('Please enter a non-negative value.');
        } else if (value == null) {
            setInputValue(1);
        } else {
            setInputValue(value);
        }
    };

    const calculateResult = () => {
        const numericValue = parseInt(inputValue, 10);
        const result = isNaN(numericValue) ? '0' : numericValue * 125;
        return result.toLocaleString();
    };

    /* BDT */
    const handleInputChangeBDT = (e) => {
        const value = e.target.value;
        console.log(value);
        if (value < 0) {
            alert('Please enter a non-negative value.');
        } else if (value == null) {
            setInputValue(1);
        } else {
            setInputValue(value);
        }
    };

    const calculateResultBDT = () => {
        const numericValue = parseInt(inputValue, 10);
        const result = isNaN(numericValue) ? '0' : numericValue / 125;
        return result.toLocaleString();
    };

    const [showUI, setShowUI] = useState(true);

    const handleButtonClick = () => {
        setShowUI(!showUI);
    };
    return (
        <>.
            <div className={`flex justify-center items-center mt-[35px] md:mt-[25px] ${showUI ? 'block' : 'hidden'}`}>
                <div className="text-center items-center flex flex-col md:flex-row gap-y-5 gap-x-[55px]">
                    <div className='flex items-center gap-x-3'>
                        <input
                            type="number"
                            value={inputValue}
                            onChange={handleInputChange}
                            // min="0"
                            className="border-[2px] text-white px-3 md:px-0 md:text-center border-[#02b0db] rounded-full bg-transparent py-2 w-[283px] md:w-[350px]"
                        />
                        <p className='bg-[#02b0db] md:text-[18px] py-[7px] px-[20px] md:px-[44px] rounded-full text-white'>USDT</p>
                    </div>
                    <div onClick={handleButtonClick} className={`bg-[#ff9700] p-2 rounded-full hidden md:block cursor-pointer duration-300 hover:rotate-180`}><HumbleiconsExchangeHorizontal></HumbleiconsExchangeHorizontal></div>
                    <div onClick={handleButtonClick} className='bg-[#ff9700] p-2 rounded-full block md:hidden'><HumbleiconsExchangeVertical></HumbleiconsExchangeVertical></div>
                    <div className='flex items-center gap-x-3'>
                        {/* <label className="block mb-2 text-lg font-bold">Result:</label> */}
                        <div className="border-[2px] text-white w-[280px] text-left md:text-center px-3 md:px-0 md:w-[350px] border-[#02b0db] rounded-full p-2">{calculateResult()}</div>
                        <p className='bg-[#02b0db] md:text-[18px] py-[7px] px-[27px] md:px-[47px] rounded-full text-white'>BDT</p>
                    </div>
                </div>
            </div>

            <div className={`flex justify-center items-center mt-[35px] md:mt-[25px] ${showUI ? 'hidden' : 'block'}`}>
                <div className="text-center items-center flex flex-col md:flex-row gap-y-5 gap-x-[55px]">
                    <div className='flex items-center gap-x-3'>
                        <input
                            type="number"
                            value={inputValue}
                            onChange={handleInputChangeBDT}
                            // min="0"
                            className="border-[2px] text-white px-3 md:px-0 md:text-center border-[#02b0db] rounded-full bg-transparent py-2 w-[283px] md:w-[350px]"
                        />
                        <p className='bg-[#02b0db] md:text-[18px] py-[7px] px-[30px] md:px-[44px] rounded-full text-white'>BDT</p>
                    </div>
                    <div onClick={handleButtonClick} className={`bg-[#ff9700] p-2 rounded-full hidden md:block cursor-pointer  hover:-rotate-180 duration-300`}><HumbleiconsExchangeHorizontal></HumbleiconsExchangeHorizontal></div>
                    <div onClick={handleButtonClick} className='bg-[#ff9700] p-2 rounded-full block md:hidden'><HumbleiconsExchangeVertical></HumbleiconsExchangeVertical></div>
                    <div className='flex items-center gap-x-3'>
                        {/* <label className="block mb-2 text-lg font-bold">Result:</label> */}
                        <div className="border-[2px] text-white w-[280px] text-left md:text-center px-3 md:px-0 md:w-[350px] border-[#02b0db] rounded-full p-2">{calculateResultBDT()}</div>
                        <p className='bg-[#02b0db] md:text-[18px] py-[7px] px-[27px] md:px-[47px] rounded-full text-white'>USDT</p>
                    </div>
                </div>
            </div>
        </>
    );
};


export function HumbleiconsExchangeHorizontal(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 17h12M4 17l3.5-3.5M4 17l3.5 3.5M7 7h13m0 0l-3.5-3.5M20 7l-3.5 3.5"></path></svg>
    )
}


export function HumbleiconsExchangeVertical(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20V8m0 12l-3.5-3.5M17 20l3.5-3.5M7 17V4m0 0L3.5 7.5M7 4l3.5 3.5"></path></svg>
    )
}
export default ConvertCurrency;
