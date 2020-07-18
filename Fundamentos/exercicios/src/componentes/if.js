

export default (props) => {
    if(props.teste){
        return props.children;
    }else{
        console.warn("Usuário não preenchido");
        return false;
    }
}