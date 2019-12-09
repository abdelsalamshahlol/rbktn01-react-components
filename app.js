// TODO

// var MyTag = () => (<h1>Test</h1>);
var GroceryList = ()=>(
	<ul>
		<li>Bread</li>
		<li>Milk</li>
	</ul>
);

var App = () => (
	<div>
		<GroceryList/>
	</div>
);

ReactDOM.render(<App />, document.getElementById('app'));