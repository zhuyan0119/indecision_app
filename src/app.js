class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    componentDidMount(){
        try{
            const options = JSON.parse(localStorage.getItem('options_local'));
            if(options){
                this.setState(() => ({options}));
            }
        }catch(e){

        }
    }
    componentDidUpdate(preProps, preState){
        if(preState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options_local', json);
        }
    }

    coomponentWillUnmount(){
        console.log("will Unmount");
    }

    handleDeleteOptions(){
        this.setState(()=> {
            return {
                options : []
            };
        });
    }

    handleDeleteOption(optionToRemove){
        this.setState((preState) => {
            return {
                options: preState.options.filter((option) => option !== optionToRemove)
            };

        });
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        console.log(randomNum);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option){
        if(!option){
            return "please enter valid option.";
        }
        if(this.state.options.indexOf(option) > -1){
            return "The option already exists."
        }
        // this.setState((preState) => (
        //     {options : preState.options.concat(option)})
        // );

        this.setState((prevState)=>{
            return {
                options: prevState.options.concat(option)
            };
        });
    }

    render() {
        const title =  "Indecision";
        const subtitle = "Put your life in the hads of a computer";
        //const options = ["plan1", "plan2", "plan3"];
        return(
            <div>
                <Header title = {title} subtitle = {subtitle}/>
                <Action 
                    hasOption = {this.state.options.length > 0}
                    handlePick = {this.handlePick}/>
                <Options 
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                    options = {this.state.options}
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}
class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick = {this.props.handlePick}
                    disabled = {!this.props.hasOption}
                >what should I do?</button>
            </div>
        );
    }
}



class Options extends React.Component {

    render() {
        return (
            <div>
                <button 
                    onClick = {this.props.handleDeleteOptions}
                >Remove All</button>
                {this.props.options.length === 0 && <p>please all an option to started!</p>}
                {
                    this.props.options.map((option) => (
                        <Option 
                            key = {option} 
                            optionText = {option}
                            handleDeleteOption = {this.props.handleDeleteOption}
                        />
                        
                    ))
                }
            </div>
        );
    }
}

// const Option = (props) => {
//     return (
//         <div>
//             {props.optionText}
//             <button conClick = {props.handleDeleteOption}>remove</button>
//         </div>
//     );
// }

class Option extends React.Component {
    render(){
        return (
            <div>
                {this.props.optionText}
                <button 
                    onClick = {
                        (e) => {this.props.handleDeleteOption(this.props.optionText);}
                    }
                >
                remove
                </button>
             </div>
        );
    }
}



class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            error : undefined
        }
    }
    onFormSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({error}));
        // this.setState(() => {
        //     return {
        //         error
        //     }
        // });
        if(!error) {
            e.target.elements.option.value = '';
        }

    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.onFormSubmit}>
                    <input type = "text" name = "option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));