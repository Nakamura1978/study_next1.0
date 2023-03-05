export const useToDoShow = props => {
    if(props.array.length == 0){
        return;
    }else{
        {props.array.map(item => {
            return(<li key={item}>{item}</li>);
        })}
    }
}