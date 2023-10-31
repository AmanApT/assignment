import closedIcon from "../../assets/closed-icon.png";
import openedIcon from "../../assets/opened-icon.png";
import OpenedBox from "../OpenedBox/OpenedBox";
import reportFlag from "../../assets/report-flag.png";
import shareFeedback from "../../assets/share-feedback.png";
import giveSuggestion from "../../assets/give-suggestion.png";
import contactUs from "../../assets/contact-us.png";
import "./fab.css";
import { useState } from "react";

interface FABProps{
  user: any;
}

const FAB:React.FC<FABProps> = ({user}) => {
  const [isOpened, setOpened] = useState(false);
  const [openedBoxClick, setOpenedBoxClick] = useState(false);
  const [actionItems, setActionItems] = useState(0);

  const toggleClick = () => {
    setOpened(!isOpened);
    setOpenedBoxClick(false);
    setActionItems(0);
  };

  return (
    <div className="floating-action-button-wrapper">
      <div className={`fab-opened-state ${isOpened ? "visible" : ""}`}>
        {isOpened ? (
          <OpenedBox
            user={user}
            setOpenedBoxClick={setOpenedBoxClick}
            actionItems={actionItems}
            setActionItems={setActionItems}
          />
        ) : (
          <></>
        )}
      </div>
      <div className="toggleImageWrapper">
        {openedBoxClick && isOpened ? (
          <div className="toggle-left-images">
            {" "}
            <img onClick={()=>setActionItems(4)} src={contactUs} alt="reportFlag" />
            <img  onClick={()=>setActionItems(3)} src={giveSuggestion} alt="reportFlag" />
            <img  onClick={()=>setActionItems(2)}  src={shareFeedback} alt="reportFlag" />
            <img  onClick={()=>setActionItems(1)} src={reportFlag} alt="reportFlag" />
          </div>
        ) : (
          <></>
        )}
        <div>
          <img
            onClick={toggleClick}
            className="toggleIcon"
            src={isOpened ? openedIcon : closedIcon}
            alt="toggle-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default FAB;
