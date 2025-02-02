import { useState } from "react";

export const useLogin = () => {
    const [login, setLogin] = useState({name: "", password: ""});

    const handleChange = (event) => {
        const {name, value} = event.target;

        setLogin((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    return {login, handleChange, setLogin};
}