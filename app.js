var DATA = {
 title: 'Menu',
 items: [
   { id: 1, name: 'tacos', type: 'mexican' },
   { id: 2, name: 'burrito', type: 'mexican' },
   { id: 3, name: 'tostada', type: 'mexican' },
   { id: 4, name: 'hush puppies', type: 'southern' }
 ]
};

function mexicanFilter(food)
{
	return food.type === 'mexican';
}

function mexicanMapper(food) {
	return <li key={food.id}> {food.name} </li>;
}

var mexicanFood = DATA.items.filter(mexicanFilter).map(mexicanMapper);

var App = React.createClass({
	render: function() {
		var user = this.props.user;
		return (
			<div>
				<h1>Menu</h1>
				<h2>{user}</h2>
				<ul>
					{mexicanFood}
				</ul>	
			</div>
			)
	}
});

React.render(<App user="doug@intralogix.biz"/>, document.body);
