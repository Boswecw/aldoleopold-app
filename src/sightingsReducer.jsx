// sightingsReducer.js
const initialState = {
  sightings: [],
};

function sightingsReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_SIGHTING':
      return {
        ...state,
        sightings: [...state.sightings, action.payload],
      };
    default:
      return state;
  }
}

export default sightingsReducer;
