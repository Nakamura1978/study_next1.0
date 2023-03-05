import { useCallback, useState } from "react"

export const useInputToShow = () => {
    const [text, setText] = useState("");
    const [array, setArray] = useState([]);

    const handleInput = useCallback((e) => {
        setText(e.target.value.trim());
    }, []);

    const handleShow = useCallback(() => {
        setArray(prevArray => {
            if(text === ""){
                alert("入力されていません。");
                return;
            }
            if(prevArray.includes(text)){
                alert("同じ内容が記載されています");
                return prevArray;
            }
            return [...prevArray, text];
        });
        console.log("handleShow")
    }, [text]);
    
    return {text, array, handleInput, handleShow};
}