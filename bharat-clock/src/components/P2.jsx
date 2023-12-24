function P2() {
  let time = new Date();
  return (
    <p className="lead">
      this is current time: {time.toLocaleDateString()}-{" "}
      {time.toLocaleTimeString()}
    </p>
  );
}
export default P2;
