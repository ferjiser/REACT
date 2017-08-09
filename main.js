function HelloWorld(props){
    const name = props.name;

    return (
        <h1 id="Title">Hola {name}</h1>
    );
}

ReactDOM.render(
    <HelloWorld name="Fernando JSX"/>,
    document.getElementById('app')
);

setTimeout(
    () => {
    ReactDOM.render(
        <HelloWorld name="Fernando Jiménez JSX"/>,
        document.getElementById('app')
    )
}, 3000);