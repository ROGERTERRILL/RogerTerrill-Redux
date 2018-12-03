import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { setTechnology } from "./actions";
import { store } from "./store";

function dispatchBtnAction(e) {
  const tech = e.target.dataset.tech;
  store.dispatch(setTechnology(tech));
}

const ButtonGroup = ({ technologies }) => (
  <div>
    {technologies.map((tech1, i) => (
      <button
        data-tech={tech1}
        key={`btn-${i}`}
        className="hello-btn"
        onClick={dispatchBtnAction}
      >
        {tech1}
      </button>
    ))}
  </div>
);

// const mapStateToProps = state => {
//   return {
//     tech: state.breducer.tech
//   };
// };

export default connect(
  null,
  { setTechnology }
)(ButtonGroup);
