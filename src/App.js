import React from 'react'
import ReactDOM from 'react-dom'
import Start from './components/Start'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Start />
      </DndProvider>
    </div>
  )
}

export default App;

