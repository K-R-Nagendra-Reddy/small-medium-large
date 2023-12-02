const Box = (props) => {
  //  Write your code here
  const { content, className } = props;
  return <p className={`box ${className}`}>{content}</p>
};

const element = (
  //  Write your code here.
  <div>
    <div className="bg-container">
      <div className="card-container">
        <h1 className="heading">Boxes</h1>
        <div className="boxes">
          <Box content="small" className="small-card" />
          <Box content="Medium" className="medium-card" />
          <Box content="Large" className="large-card" />
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
