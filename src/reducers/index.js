import { combineReducers } from 'redux'
import processesReducer from './processes'
import activeProcess from './activeProcess'
import businessAreas from './businessAreas'

const allReducers = combineReducers({
  processes: processesReducer,
  activeProcess: activeProcess,
  businessAreas: businessAreas
})

export default allReducers