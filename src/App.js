import React, {useState} from 'react'
import data from './data'
import List from './list'

function App() {
  const [people , setPeople] = useState(data);
  return (
    <>
      <main>
        <section className='container'>
          <h3>{people.length} Birthdays Today</h3>
          <List people = {people}/>
          <button onClick={() => setPeople([])}>
            Clear Items
            </button>
        </section>
      </main>
    </>
  )
}

export default App
