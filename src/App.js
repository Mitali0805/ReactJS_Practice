import React from 'react';
import './App.css';
import ComponentC from './Context/ComponentC';
import CounterOne from './CounterOne'
import DataFetching from './Datafetching'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <CounterOne/>
      <hr/>
      <DataFetching/>

      {/* Context */}
      <hr/>
      Context
      <hr/>
      <UserContext.Provider value={'mitali'}>
        <ChannelContext.Provider value={'phenoix'}>
        <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
