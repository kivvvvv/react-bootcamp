/*
  We will make two "properties":
    'to':
      Who we are greeting
    'from':
      Who our greeting is from
*/
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Hello />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
