function HocComponent(WrappedComponent) {

    class Hoc extends React.Component {

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
            return {count: this.state.count};
        }

        handleClick() {
            this.setState({
                count: this.state.count + 1
            });
        }

        render() {
            return (<WrappedComponent onClick={this.handleClick} {...this.props}/>)
        }
    }

    Hoc.childContextTypes = {
        count: React.PropTypes.number
    }

    return Hoc;
}

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

const PureComponentHOC = HocComponent(PureComponent);

const mixin = {
    handleClick() {
        console.log('Clickeado');
    }
}

const MixinComponent = React.createClass({
    mixins: [mixin],
    render() {
        return <div onClick={this.handleClick}>Hola Mixin Component</div>

    }
});

ReactDOM.render(
    <PureComponentHOC name="Componente HOC"/>, document.getElementById('hoc'));
ReactDOM.render(
    <MixinComponent name="Componente Mixin"/>, document.getElementById('mixin'));
