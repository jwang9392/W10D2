import Clock from './clock';
import Tabs from './tabs';
import React from 'react';

const App = () => {
  return (
    <>
      <Clock />
      <Tabs tabs={[{ title: 1, content: "I'm numba wahn" }, { title: 2, content: "I'm numba two" }, { title: 3, content: "I'm numba three" }]} />
    </>
  )
}

export default App;