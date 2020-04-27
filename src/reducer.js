const initialState = {
  data: [
    { label: "Drink Coffee", id: 1 },
    { label: "Go to a meeting", id: 2 },
    { label: "Cash withdraw", id: 3 },
    { label: "Cash withdraw", id: 9 },
  ],
  value: "",
};

const reducer = (state = initialState, action) => {
  console.log(action.label);
  switch (action.type) {
    case "ADD_TASK":
      return { data: [...state.data, action.payload], value: "" };
    case "VALUE":
      return { data: [...state.data], value: action.label };
    default:
      return state;
  }
};

export default reducer;
