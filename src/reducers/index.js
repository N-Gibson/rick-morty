import { combineReducers } from 'redux';
import { episodes } from './episodes';
import { characters } from './characters';
import { locations } from './locations';

const rootReducer = combineReducers({
  episodes,
  characters,
  locations
});

export default rootReducer