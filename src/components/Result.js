import React from "react";

const Result = ({ result }) => {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(result);
    };

    return (
        <div className="w-[320px] h-fit min-h-[60px] flex justify-between items-center bg-neutral-800 p-4 rounded-md">
            <div className="text-xl w-[250px] break-words">{result}</div>
            <div onClick={() => copyToClipboard()}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 cursor-pointer text-sky-400 hover:text-sky-600"
                >
                    <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
                    <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
                </svg>
            </div>
        </div>
    );
};

export default Result;
