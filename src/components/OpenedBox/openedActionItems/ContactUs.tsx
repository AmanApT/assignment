// import React from 'react'
import "./shareFeedback.css";
import { useState, useRef, useEffect } from "react";

interface CreateProps {
  user: any;
}

const ContactUs: React.FC<CreateProps> = ({ user }) => {
  const [, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);

      // You can perform actions with the selected file here, for example:
      // console.log('Selected file:', file);
    }
  };

  // const handleAttachFileClick = () => {
  //   // Trigger a click on the hidden file input element when the icon is clicked.
  //   if (fileInputRef.current) {
  //     fileInputRef.current.click();
  //   }
  // };
  const [text, setText] = useState("");
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newText = event.target.value;
    setText(newText);
    setSubmitDisabled(newText.trim() === "");
    localStorage.setItem("text-contact", newText);
  };

  useEffect(() => {
    const savedText = localStorage.getItem("text-contact");
    if (savedText) {
      setText(savedText);
    }
  }, [setText]);

  const handleSubmit = () => {
    console.log("clicked");
  };

  const activeStyle = {
    backgroundColor: "black", // Change to the desired color
    cursor: "pointer", // Change to pointer cursor when active
  };

  const disabledStyle = {
    backgroundColor: "gray", // Change to the desired color
    cursor: "not-allowed", // Change to not-allowed cursor when disabled
  };
  return (
    <div className="action-items-wrapper">
      <form action="">
        <p className="action-items-header">
          Let us know what <span>your Queries </span>are!
        </p>
        <hr />
        <p>
          Your Name <span style={{ color: "red" }}>*</span>
        </p>
        <div className="textfield-attach">
          <textarea
            className="textarea"
            placeholder="Enter your Name"
            name=""
            id=""
            cols={31}
            rows={1}
          />
        </div>
        {user ? (
          <></>
        ) : (
          <div>
            <p>
              Your Email <span style={{ color: "red" }}>*</span>
            </p>
            <div className="textfield-attach ">
              <textarea
                className="textarea"
                placeholder="Enter your Email"
                name=""
                id=""
                cols={31}
                rows={1}
              />
            </div>
            <p>Your Mobile Number</p>
            <div className="textfield-attach ">
              <textarea
                className="textarea"
                placeholder="Enter your Mobile Number"
                name=""
                id=""
                cols={31}
                rows={1}
              />
            </div>
          </div>
        )}

        <p>
          What would you like to ask? <span style={{ color: "red" }}>*</span>
        </p>
        <div className="textfield-attach">
          <textarea
            value={text}
            onChange={handleTextAreaChange}
            className="textarea"
            placeholder="Write Here..."
            name=""
            id=""
            cols={31}
            rows={4}
          ></textarea>
          <input
            type="file"
            name="fileInput"
            id="fileInput"
            style={{ display: "none" }}
            ref={(input) => (fileInputRef.current = input)}
            onChange={handleFileChange}
          />
        </div>
      </form>
      <button
        style={isSubmitDisabled ? disabledStyle : activeStyle}
        onClick={handleSubmit}
        disabled={isSubmitDisabled}
        className="submit-button"
      >
        Submit
      </button>
    </div>
  );
};

export default ContactUs;
