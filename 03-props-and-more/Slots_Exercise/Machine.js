class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    const isWin = s1 === s2 && s2 === s3;

    return (
      <div className="Machine">
        <p style={{ fontSize: "50px", background: "purple" }}>
          {s1}-{s2}-{s3}
        </p>
        <p className={isWin ? "win" : "lose"}>You {isWin ? "win" : "lose"}!</p>
      </div>
    );
  }
}
