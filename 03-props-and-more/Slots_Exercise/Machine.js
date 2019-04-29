class Machine extends React.Component {
  render() {
    let gameStatus =
      this.props.s1 === this.props.s2 && this.props.s2 === this.props.s3;

    return (
      <div>
        <p>
          {this.props.s1}-{this.props.s2}-{this.props.s3}
        </p>
        <p>You {gameStatus ? "win" : "lose"}!</p>
      </div>
    );
  }
}
