import React from "react";
import ExitIcon from "../subcomponents/exit";

function Resume() {
  return (
    <div>
      <div className="section-top">
        <h2 className="section-header">Resume</h2>
        <ExitIcon />
      </div>

      <div style={{ display: "flex", flexDirection: "column", width: "95%" }}>
        <button
          className="down-btn"
          style={{ width: "6em", marginLeft: "auto" }}
        >
          <a
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: ".8rem",
            }}
            href={require("../media/resume.docx")}
            download="Joel_Pantoja_Resume.pdf"
          >
            Download
          </a>
        </button>
        <img
          src={require("../media/resume-pic.PNG")}
          alt="my resume"
          style={{ objectFit: "contain", maxWidth: "100%" }}
        />
      </div>
    </div>
  );
}

export default Resume;
