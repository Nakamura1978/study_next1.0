import styles from "@/coponents/MakeToDo/MakeToDo.module.css"
import { useToDoShow } from "@/hooks/useToDoShow";

export const MakeToDo = props => {
    return(
        <div>
            <input type="text" value={props.text} onChange={props.handleInput} />
            <button onClick={props.handleShow} >追加</button>
            <ul>
                {useToDoShow(props)}
            </ul>
        </div>
    );
}