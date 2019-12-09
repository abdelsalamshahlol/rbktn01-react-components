// TODO
class Item extends React.Component {

	 constructor(props){
	 	super(props)
	 	this.state = {
	 		isBold: false
	 	}; 
	 }

	 onHover(){
	 	this.setState({
	 		isBold: !this.state.isBold
	 	});
	 }


	 render(){
	 	let boldStyle = {
	 		'fontWeight' : this.state.isBold ? 'bold' : 'unset'
	 	}
	 	return (<li style={boldStyle} onMouseOver={this.onHover.bind(this)} onMouseOut={this.onHover.bind(this)}>{this.props.arr[0]}</li>)
	 }
		

}  

class GroceryList extends React.Component{
	constructor(props){
		super(props)

	}
	render(){
		return <Item arr={['Bread', 'Milk']}  />
	}



}

var App = () => (
	<div>
		<GroceryList/>
	</div>
);

ReactDOM.render(<App />, document.getElementById('app'));