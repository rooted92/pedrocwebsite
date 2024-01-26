import React, {useState, useEffect} from "react";
import Markdown from "react-markdown";
import './Resume.css';
import resumeMd from "../../assets/resume.md";

const ResumeComponent: React.FC = () => {

    const [resume, setResume] = useState('');

    useEffect(() => {
      fetch(resumeMd)
        .then((response) => response.text())
        .then((text) => {
          setResume(text);
        });
    }, []);


  return (
    <div className="resume-modal">
      <Markdown children={resume} />
    </div>
  );
};

export default ResumeComponent;