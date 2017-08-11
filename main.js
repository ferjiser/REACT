function PureComponent(props){

    const name = props.name;

    return (
        <div>
            <h1 id="Title">Hola {name} {props.count}</h1>
            <button type="button" onClick = {props.onClick}>Click Me!</button>
        </div>
    );
}


class ContainerComponent extends React.Component {

    constructor(props){

        super(props);

        this.state = {
            count: 0

        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount(){
        console.log('El componente se va a montar');
    }

    componentDidMount(){
        console.log('El componente ya está montado');
    }

    componentWillReceiveProps(nextProps){
        console.log('Si las propiedades cambian reseteo');
        this.setState({
            count: 0
        });
    }

    componentWillUpdate(){
        console.log('El componente se va a actualizar');
    }

    componentDidUpdate(){
        console.log('El componente se actualizó');
    }

    componentWillUnmount(){
        console.log('El componente se desmontará');
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextState.count !== this.state.count;
    }

    handleClick(){
       this.setState({
           count: this.state.count + 1
       });
    }

    render () {
        return (
            <PureComponent
                name = {this.props.name}
                count = {this.state.count}
                onClick = {this.handleClick}/>
        );
    }

}


ReactDOM.render(
    <ContainerComponent name="Componente"/>,
    document.getElementById('app')
);
