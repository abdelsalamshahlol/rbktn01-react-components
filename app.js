// TODO
var Item = (props)=> (<ul><li>{props.arr[0]}</li><li>{props.arr[1]}</li></ul>)

var GroceryList = ()=>(
		<Item arr={['Bread', 'Milk']}  />
		
	
);

var App = () => (
	<div>
		<GroceryList/>
	</div>
);

ReactDOM.render(<App />, document.getElementById('app'));