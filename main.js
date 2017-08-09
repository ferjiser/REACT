function HelloWorld(props){
    const name = props.name;
    return React.DOM.h1({
        id: 'Title'
    },`Hello ${name}`);
}

const hello = React.createElement(HelloWorld, {
    name: 'Fernando'
});

ReactDOM.render(
    hello,
    document.getElementById('app')
);

setTimeout(
    () => {
    ReactDOM.render(
        React.createElement(HelloWorld, {
            name: 'Fernando Jiménez'
        }),
        document.getElementById('app')
    )
}, 3000);