import "./DarkConnect.scss";
import "./LightConnect.scss";
import { useState, useEffect } from "react";

const Connect = ({ backgroundMode }) => {
  const [connectClassName, setConnectClassName] = useState("dark-connect");

  useEffect(() => {
    setConnectClassName(backgroundMode ? "dark-connect" : "light-connect");
  }, [backgroundMode]);

  const sendEmail = (subject) => {
    const email =
      "mailto:Anthony.s.quispe@gmail.com?subject=" +
      encodeURIComponent(subject);
    window.location.href = email;
  };

  return (
    <div id="connect" className={`${connectClassName}`}>
      <h1 className={`${connectClassName}__heading`}>
        LET'S <br />
        CONNECT
      </h1>
      <div className={`${connectClassName}__buttons`}>
        <button
          className={`${connectClassName}__button`}
          onClick={() => sendEmail("👨🏻‍💻 Frontend Development Opportunity")}
        >
          FRONTEND DEVELOPMENT
        </button>
        <button
          className={`${connectClassName}__button`}
          onClick={() => sendEmail("👨🏻‍💻 Backend Development Opportunity")}
        >
          BACKEND DEVELOPMENT
        </button>
        <div className={`${connectClassName}__buttons--small`}>
          <button
            className={`${connectClassName}__button button--alt`}
            onClick={() => sendEmail("🚀 Could you help me with my startup?")}
          >
            STARTUPS
          </button>
          <button
            className={`${connectClassName}__button button--alt`}
            onClick={() => sendEmail("Let's schedule a time to talk over ☕️")}
          >
            COFFEE
          </button>
        </div>
        <button
          className={`${connectClassName}__button`}
          onClick={() => sendEmail("💼 Could you help me with my business?")}
        >
          DIGITAL CONSULTANT
        </button>
        <button
          className={`${connectClassName}__button--contact`}
          onClick={() => sendEmail("🤝 Project info. Let's talk")}
        >
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default Connect;
