// import React from 'react'
import reportFlag from "../../assets/report-flag.png";
import shareFeedback from "../../assets/share-feedback.png";
import giveSuggestion from "../../assets/give-suggestion.png";
import contactUs from "../../assets/contact-us.png";
import "./openedbox.css";
import ReportIssue from "./openedActionItems/ReportIssue";
import ShareFeedback from "./openedActionItems/ShareFeedback";
import GiveSuggestion from "./openedActionItems/GiveSuggestion";
import ContactUs from "./openedActionItems/ContactUs";

interface CreateProps {
  setOpenedBoxClick: React.Dispatch<React.SetStateAction<boolean>>;
  actionItems: number;
  user: any;
  setActionItems: React.Dispatch<React.SetStateAction<number>>;
}

const OpenedBox: React.FC<CreateProps> = ({
  user,
  setOpenedBoxClick,
  actionItems,
  setActionItems,
}) => {
  return (
    <div>
      {actionItems == 1 ? (
        <ReportIssue user={user}/>
      ) : actionItems == 2 ? (
        <ShareFeedback user={user} />
      ) : actionItems == 3 ? (
        <GiveSuggestion user={user} />
      ) : actionItems == 4 ? (
        <ContactUs user={user}/>
      ) : (
        <div className="openedBox-subDivs-wrapper">
          <div className="openedBox-subDivs">
            <div onClick={() => {
                setOpenedBoxClick(true);
                setActionItems(1);
              }}>Report an Issue</div>
            <img
              onClick={() => {
                setOpenedBoxClick(true);
                setActionItems(1);
              }}
              src={reportFlag}
              alt="reportFlag"
            />
          </div>
          <div className="openedBox-subDivs">
            <div onClick={() => {
                setOpenedBoxClick(true);
                setActionItems(2);
              }}>Share Feedback</div>
            <img
              onClick={() => {
                setOpenedBoxClick(true);
                setActionItems(2);
              }}
              src={shareFeedback}
              alt="reportFlag"
            />
          </div>
          <div className="openedBox-subDivs">
            <div   onClick={() => {
                setOpenedBoxClick(true);
                setActionItems(3);
              }}>Give Suggestions</div>
            <img
              onClick={() => {
                setOpenedBoxClick(true);
                setActionItems(3);
              }}
              src={giveSuggestion}
              alt="reportFlag"
            />
          </div>
          <div className="openedBox-subDivs">
            <div  onClick={() => {
                setOpenedBoxClick(true);
                setActionItems(4);
              }}>Contact Us</div>
            <img  onClick={() => {
                setOpenedBoxClick(true);
                setActionItems(4);
              }} src={contactUs} alt="reportFlag" />
          </div>
        </div>
      )}
    </div>
  );
};
export default OpenedBox;
