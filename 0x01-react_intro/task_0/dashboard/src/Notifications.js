import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "./utils";
import closeIcon from "./close-icon.png";

const buttonClick = () => {
  console.log("Close button has been clicked");
};

function Notifications() {
  return (
    <div className="Notifications">
      <button
        style={{
          float: "right",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
        aria-label="Close"
        onClick={buttonClick}
      >
        <img
          src={closeIcon}
          alt="close icon"
          style={{ width: "10px", height: "10px" }}
        />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li
          data-priority="urgent"
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
        ></li>
      </ul>
    </div>
  );
}
export default Notifications;
