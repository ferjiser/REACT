class MyComponent extends React.Component {

    constructor(props){

        super(props);

        this.state = {
            count: 0

        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
       this.setState({
           count: this.state.count + 1
       });
    }

    render () {
        const name = this.props.name;
        return (
            <div>
                <h1 id="Title">Hola {name} {this.state.count}</h1>
                <button type="button" onClick = {this.handleClick}>Click Me!</button>
            </div>
        );
    }

}

const OtherComponent = React.createClass({

    getInitialState(){
        return {
            count : 0
        }
    },

    handleClick(){
        this.setState({
            count: this.state.count + 1
        });
    },

    render () {
        const name = this.props.name;
        return (
            <div>
                <h1 id="Title">Hola {name} {this.state.count}</h1>
                <button type="button" onClick = {this.handleClick}>Click Me!</button>
            </div>
        );
    }
});

ReactDOM.render(
    <MyComponent name="Componente"/>,
    //<OtherComponent name="Componente"/>,
    document.getElementById('app')
);
