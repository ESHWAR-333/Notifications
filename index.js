const Notification = (props) => {
  //  Write your code here.
  const { children, className, logo } = props;
  return (
    <div className={`container ${className}`}>
      <img className="image" src={logo} />
      <p>{children}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1 className="heading ">Notifications</h1>
    <div className="sub-container">
      <Notification
        children="Information Message"
        className="infoClass"
        logo="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        children="Success Message"
        className="successClass"
        logo="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        children="Warning Message"
        className="warningClass"
        logo="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        children="Error Message"
        className="errorClass"
        logo="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
