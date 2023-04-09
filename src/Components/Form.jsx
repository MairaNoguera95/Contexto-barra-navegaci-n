import React, { useContext } from "react";
import { Contex } from "../Context/Context";
import styled from "styled-components";
const Input = styled.input`
    padding: 10px 20px;
    background-color: #e4e4e4;
    border-radius: 8px;
    outline: none;
    border: none;
    margin: 20px 0px;
`;
const Label = styled.label`
    font-size: 20px;
    font-weight: 600;
    margin: 20px 10px;
`;

const Form = () => {
    const { userName, setUserName } = useContext(Contex);
    const handleChange = ({ target }) => {
        setUserName(target.value);
    };
    return (
        <div>
            <Label htmlFor="userName">Your Name</Label>
            <Input
                type="text"
                name="userName"
                id=""
                onChange={handleChange}
                autoComplete="off"
                value={userName}
            />
        </div>
    );
};
export default Form;