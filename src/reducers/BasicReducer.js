const INITIAL_STATE = {
  tech: "Redux"
};
export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_TECHNOLOGY":
      return {
        ...state,
        tech: action.payload
      };

    default:
      return state;
  }
};
