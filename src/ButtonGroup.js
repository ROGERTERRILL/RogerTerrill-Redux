import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import { setTechnology } from "./actions";

const ButtonGroup = ({ technologies, setTechnology }) => (
  <div>
    {technologies.map((tech, i) => (
      <button
        data-techy={tech}
        key={`btn-${i}`}
        className="hello-btn"
        onClick={setTechnology}
      >
        {tech}
      </button>
    ))}
  </div>
);

const mapStateToProps = state => {
  return {
    tech: state.breducer.tech
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setTechnology: e => {
      const tech = e.target.dataset.techy;
      dispatch(setTechnology(tech));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonGroup);
