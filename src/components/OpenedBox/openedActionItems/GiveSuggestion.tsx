import "./reportIssue.css";
import { useState, useRef,useEffect } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
interface CreateProps{
  user:any;
}

const GiveSuggestion: React.FC<CreateProps>  = ({user}) => {
  // const [age, setAge] = React.useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setSelectedFile(file);

      // You can perform actions with the selected file here, for example:
      // console.log('Selected file:', file);
    }
  };

  const handleAttachFileClick = () => {
    // Trigger a click on the hidden file input element when the icon is clicked.
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [text, setText] = useState("");
  const [isSubmitDisabled, setSubmitDisabled] = useState(true);

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newText = event.target.value;
    setText(newText);
    setSubmitDisabled(newText.trim() === "");
    localStorage.setItem('text-suggestion', newText);
  };

 useEffect(() => {
    const savedText = localStorage.getItem('text-suggestion');
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
      <p className="action-items-header">
       Share your <span>Suggestions </span>with us for a chance to earn rewards!
      </p>
      <hr />
      <p>Choose a section</p>
      <div className="select">
        <span>
    Select
        </span>
        <KeyboardArrowDownIcon />
      </div>
      <p>
        Describe the issue in detail <span style={{ color: "red" }}>*</span>
      </p>
      <div className="textfield-attach">
        <form action="">
          <textarea
           value={text}
           onChange={handleTextAreaChange}
            className="textarea"
            placeholder="Write Here..."
            name=""
            id=""
            cols={31}
            rows={5}
          ></textarea>
          <input
            type="file"
            name="fileInput"
            id="fileInput"
            style={{ display: "none" }}
            ref={(input) => (fileInputRef.current = input)}
            onChange={handleFileChange}
          />
           <div className="attach-box-wrapper">
          
          <div
            className="attach-box"
            onClick={handleAttachFileClick}
          >
            <AttachFileIcon />
            <span>Attach</span>
          </div>
          <div>{selectedFile && <span>File Selected</span>}</div>
        </div>
       
        </form>
        

      </div>
      {user ? (
        <></>
      ) : (
        <div>
          <p>Enter your email to receive an update</p>
          <div className="textfield-attach textfield-attach2">
            <textarea
              className="textarea"
              placeholder="Enter your Name"
              name=""
              id=""
              cols={31}
              rows={1}
            />
          </div>
        </div>
      )}
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

export default GiveSuggestion;
