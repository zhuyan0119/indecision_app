console.log("app.js is runing");

//JSX -JavaScript XML

const app ={
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of computer',
    options: [],
};
const onFormSubmit = (e)=> {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTempApp();
    }
}

const appRoot = document.getElementById('app');

const removeAll = () => {
    app.options = [];
    renderTempApp();
}

const onMakeDecision = () =>{
    const randomNum = Math.floor(Math.random() * (app.options.length));
    const option = app.options[randomNum];
    alert(option);
};

const renderTempApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{(app.option && app.option.length > 0) ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick = {removeAll}>remove All</button>
            <button disabled = {app.options.length === 0} onClick = {onMakeDecision}>what should I Do?</button>
            <ol>
            {
                app.options.map((option) => <li key = {option}>{option}</li>)
            }
            </ol>
            <form onSubmit = {onFormSubmit}>
                <input type = "text" name = "option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderTempApp();