import React from 'react';
import FilterSearch from './components/FilterSearch';
import SampleJSON from './resources/sample.json';
import './styles/index.css';

const App = () => {
  return (
      <div className='App'>
        <p className='github-header'><span className='bold-text'>Github</span> Jobs</p>
        <FilterSearch jobsData={SampleJSON}/>
      </div>
  )
}

export default App;