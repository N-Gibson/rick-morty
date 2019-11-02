import { combineReducers } from 'redux';
import { episodes } from './episodes';
import { characters } from './characters';
import { locations } from './locations';
import { current } from './current';

const rootReducer = combineReducers({
  episodes,
  characters,
  locations,
  current
});

export default rootReducer