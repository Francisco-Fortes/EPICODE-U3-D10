const initialState = {
  weatherCard: {
    content: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        weatherCard: {
          ...state.weatherCard,
          content: [...state.weatherCard.content, action.payload],
        },
      };
    default:
      return state;
  }
};
export default mainReducer;
