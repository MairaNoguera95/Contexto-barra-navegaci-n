import { React, useState } from "react";
import { Contex } from "../Context/Context";

const Wrapper = ({ children }) => {
    const [userName, setUserName] = useState("Maira Noguera");
    return (
        <Contex.Provider value={{ userName, setUserName }}>
            {children}
        </Contex.Provider>
    );
};

export default Wrapper;
