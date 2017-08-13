function PureComponent(props, context) {

    const name = props.name;

    return (
        <div>
            <h1 id="Title">Hola {name}
                {context.count}</h1>
            <button type="button" onClick={props.onClick}>Click Me!</button>
        </div>
    );
}

PureComponent.contextTypes = {
    count: React.PropTypes.number
};

class ContainerComponent extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            count: 0

        };

        this.handleClick = this
            .handleClick
            .bind(this);
    }

    getChildContext() {
        return {count: this.state.count}
    }

    componentWillMount() {
        console.log('El componente se va a montar');
    }

    componentDidMount() {
        console.log('El componente ya está montado');
    }

    componentWillReceiveProps(nextProps) {
        console.log('Si las propiedades cambian reseteo');
        this.setState({count: 0});
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.count !== this.state.count;
    }

    componentWillUpdate() {
        console.log('El componente se va a actualizar');
    }

    componentDidUpdate() {
        console.log('El componente se actualizó');
    }

    componentWillUnmount() {
        console.log('El componente se desmontará');
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (<PureComponent
            name={this.props.name}
            count={this.state.count}
            onClick={this.handleClick}/>);
    }

}

ContainerComponent.childContextTypes = {
    count: React.PropTypes.number
};

ReactDOM.render(
    <ContainerComponent name="Componente"/>, document.getElementById('app'));
