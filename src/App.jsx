import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  return (
    <>

      <main>
        <section className='container'>
          <h3>
            5 Birthdays Today
          </h3>
          <List data={data} />
          <button>
            clear all
          </button>
        </section>

      </main>

    </>

  )
}

export default App;
