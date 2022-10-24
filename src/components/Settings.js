import React, { useState, useEffect } from "react";
import { customAlphabet } from "nanoid";
import Checkbox from "./Checkbox";

const Settings = ({ setPass }) => {
    const [length, setLength] = useState(8);
    const [uppercase, setUppercase] = useState(true);
    const [lowercase, setLowercase] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [symbols, setSymbols] = useState(true);

    useEffect(() => {
        generatePassword();
    }, []);

    const generatePassword = () => {
        if (length > 0) {
            let nanoid = customAlphabet(generateParams(), parseInt(length));
            setPass(nanoid());
        }
        return;
    };
    const generateParams = () => {
        let characters = "";
        if (uppercase) {
            characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }

        if (lowercase) {
            characters += "abcdefghijklmnopqrstuvwxyz";
        }

        if (numbers) {
            characters += "1234567890";
        }

        if (symbols) {
            characters += "!@#$&-_";
        }

        return characters;
    };

    return (
        <div className="h-fit w-[320px] p-4 bg-neutral-800 rounded-md flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                    <h1 className="text-sm">Character Length</h1>
                    <h1 className="text-lg font-semibold text-sky-400">
                        {length}
                    </h1>
                </div>
                <input
                    type="range"
                    min={0}
                    max={32}
                    value={length}
                    className="w-full bg-green-600"
                    onChange={(e) => setLength(e.target.value)}
                />
            </div>

            <div className="flex flex-col space-y-2">
                <Checkbox
                    label="Uppercase Letters"
                    checked={uppercase}
                    onChange={setUppercase}
                />

                <Checkbox
                    label="Lowercase Letters"
                    checked={lowercase}
                    onChange={setLowercase}
                />

                <Checkbox
                    label="Numbers"
                    checked={numbers}
                    onChange={setNumbers}
                />

                <Checkbox
                    label="Symbols"
                    checked={symbols}
                    onChange={setSymbols}
                />
            </div>

            <button
                className="w-full bg-sky-400 hover:bg-sky-500 text-black h-12 rounded-md shadow-2xl"
                onClick={() => generatePassword()}
            >
                Generate
            </button>
        </div>
    );
};

export default Settings;
