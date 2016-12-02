//import agent from 'superagent'

export const filterBusinessArea = businessArea => {
  return {
    type: 'BUSINESS_AREA_FILTERED',
    payload: businessArea
  }
}

export const addToObject = obj => ({
  type: 'ADD_TO_OBJECT',
  obj
})

export const selectProcess = process => {
  console.log ('selected process' ,process.name)
  return {
    type: 'PROCESS_SELECTED',
    payload: process
  }
}

export const updateProcess = process => {
  console.log  ('update process', process.name)
  return {
    type: 'PROCESS_UPDATED',
    payload: process
  }
}

export const requestProcesses = processes => ({
  type: 'REQUEST_PROCESSES',
  processes
})


export const receiveProcesses = (processes, json) => ({
  type: 'RECEIVE_PROCESSES',
  processes,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
})
/*
const fetchProcesses = processes => dispatch => {
  dispatch(requestProcesses(processes))
  return agent.get('http://localhost:3000/api/Processes')
    .then(response => response.json())
    .then(json => dispatch(receiveProcesses(processes, json)))
}
*/