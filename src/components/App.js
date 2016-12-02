import React from 'react'
import ProcessCatalogAppBarLeftIconMenu from '../containers/ProcessCatalogAppBarLeftIconMenu'
import ProcessCatalogProcessList from '../containers/ProcessCatalogProcessList'

import injectTapEventPlugin from 'react-tap-event-plugin'
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
  <div>
    <hr />
    <h2> My Business Areas </h2>
    <ProcessCatalogAppBarLeftIconMenu />
    <hr />
    <h2> My Processes </h2>
    <ProcessCatalogProcessList />
  </div>
)

export default App
