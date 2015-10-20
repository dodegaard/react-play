

var App = React.createClass({
    render: function() {
    	function saySomething(msg){
    		if(msg === null)
    		{
    			msg === "no message Hello!";
    		}
    		alert(msg);
    	};
        return (
          <div>
            <h1> Super  Cool Gravatars!! </h1>
              <ul>
                <button onClick={saySomething}>Test (basic no binding) </button>
                <button onClick={saySomething.bind(this, "Hello")}>I want to say hello! </button>
                <button onClick={saySomething.bind(this, "Goodbye")}>I want to say hello! </button>
              </ul>
          </div>
          );
    }
});

React.render(<App/>, document.body);