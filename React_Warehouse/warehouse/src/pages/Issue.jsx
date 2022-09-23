import React from "react";

import IssueForm from "../components/Issue/IssueForm";

const Issue = (props) => {
  const issueHeaderStyle = {
    textAlign: "center",
  };

  return (
    <React.Fragment>
      <h2 style={issueHeaderStyle}>Issue Material</h2>
      <IssueForm />
    </React.Fragment>
  );
};

export default Issue;
