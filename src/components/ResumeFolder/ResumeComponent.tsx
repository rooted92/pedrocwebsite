import React from "react";
import Markdown from "react-markdown";
import './Resume.css';

interface ResumeComponentProps {
  resume: string;
}

const ResumeComponent: React.FC<ResumeComponentProps> = ({resume}) => {

  return (
    <div className="resume-modal">
      <Markdown children={resume} />
    </div>
  );
};

export default ResumeComponent;