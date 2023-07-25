import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Join.css";

const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0t8ba9e",
        "template_pn78hd3",
        form.current,
        "nA21axjRaCnj-qBdO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Join" id="join">
      <div className="join-l">
        <hr />
        <div>
          <sapn className="stroke-text">READY TO</sapn>
          <sapn>LEVEL UP</sapn>
        </div>
        <div>
          <sapn>YOUR BODY</sapn>
          <sapn className="stroke-text">WITH US?</sapn>
        </div>
      </div>
      <div className="join-r">
        <form ref={form} className="join-now" onSubmit={sendEmail}>
          <input
            type="email"
            name="from_name"
            id="email"
            placeholder="Enter your email addres here"
          />
          <button>Jion now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
