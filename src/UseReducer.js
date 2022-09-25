// Estado compuesto inicial
const initialState = {
  value: "",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

// action.type
// action.payload
// const reducer = (state, action) => {};

// Usando los condicionales if
const reducerIF = (state, action) => {
  if (action.type === "ERROR") {
    return {
      ...state,
      error: true,
      loading: false,
    };
  } else if (action.type === "CHECK") {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === "CONFIRM") {
    return {
      ...state,
      loading: false,
      error: false,
      confirmed: true,
    };
  } else if (action.type === "WRITE") {
    return {
      ...state,
      value: action.payload,
    };
  } else if (action.type === "DELETE") {
    return {
      ...state,
      deleted: true,
    };
  } else if (action.type === "RESET") {
    return {
      ...state,
      confirmed: false,
      deleted: false,
      value: "",
    };
  } else {
    return { ...state };
  }
};

// La forma mas popular
// Usando la condicional switch
const reducerSwitch = (state, action) => {
  switch (action.type) {
    case "ERROR":
      return {
        ...state,
        error: true,
        loading: false,
      };
    case "CHECK":
      return {
        ...state,
        loading: true,
      };
    default:
      return { ...state };
  }
};

const reducerObject = (state) => ({
  ERROR: {
    ...state,
    error: true,
    loading: false,
  },
  CHECK: {
    ...state,
    loading: true,
  },
});

const reducer = (state, action) => {
  if (!!reducerObject(state)[action.type]) {
    return reducerObject(state)[action.type];
  } else {
    return state;
  }
};
