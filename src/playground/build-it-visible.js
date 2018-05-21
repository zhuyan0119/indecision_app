
class VisibilityToggle extends React.Component{
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible : false
        };

    }
    handleToggleVisibility(){
        this.setState((prevState)=> {
            console.log(prevState.visible);
            return{
                visible : !prevState.visible
            }
        });

    }

    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick = {this.handleToggleVisibility}>
                {
                    this.state.visible ? "hide detail" : "show detail"
                }
                </button>
                <p hidden= {this.state.visible === false} >Hey, These are some details you can now see!</p>

            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



// console.log("visible app is running");
// const appRoot = document.getElementById('app');
// let hide = true;
// const visible =()=>{
//     hide = !hide;
//     renderApp();
// }

// const renderApp = ()=>{
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick = {visible}>
//             {
//                 hide? "show detail" : "hide detail"

//             }
//                 </button>
//             <p hidden = {hide === true}>Hey, These are some details you can now see!</p>
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }
// renderApp();
