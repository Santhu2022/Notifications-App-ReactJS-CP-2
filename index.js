const Notification = (props) => {
  //  Write your code here.
  const { text, icon, className } = props;
  return (
    <div className={`${className} notification-box`}>
      <img src={icon} className="icon" />
      <p className="notifiaction-text">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="Notifications-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      className="primary"
      text="Information Message"
      icon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      className="success"
      text="Success Message"
      icon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      className="warning"
      text="Warning Message"
      icon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      className="danger"
      text="Error Message"
      icon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
