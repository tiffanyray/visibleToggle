class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    };
    
    handleToggleVisibility() {
        this.setState((prevState) => {
            return{
                visibility: !prevState.visibility,
            };
        });
    };
    
    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {this.state.visibility && <p>Here are some details.</p>}
        </div>
        );
    };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));




// let visibility = false;

// let message = 'This is my message';

// const displayMessage = () => {
//     visibility = !visibility;
//     render();
// };

// const show = 'Hello';

// const render = () => {
//     const template = (
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={displayMessage}>
//           {visibility ? 'Hide Details' : 'Show Details'}
//         </button>
//         {visibility && <p>Here are some details.</p>}
//     </div>
//     );

//     const rootDiv = document.getElementById('app');
//     ReactDOM.render(template, rootDiv);
// };
// render();

