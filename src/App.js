import React, { useState } from "react";
import Result from "./components/Result";
import Settings from "./components/Settings";
import Title from "./components/Title";

const App = () => {
    const [pass, setPass] = useState("");

    return (
        <div className="h-screen w-screen bg-neutral-900 flex flex-col justify-center items-center text-neutral-300 space-y-4 font-mono">
            <Title />
            <Result result={pass} />
            <Settings setPass={setPass} />
        </div>
    );
};

export default App;
