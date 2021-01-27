import React from 'react'
import bread1 from './bread1.jpg'
import bread2 from './bread2.jpg'
import bread3 from './bread3.gif'
import bread4 from './bread4.jpg'
import bread5 from './bread5.jpg'
import bread6 from './bread6.jpeg'
import './App.css'
import { Bread } from '@monorepo/types'
import { BreadCard, Header } from '@monorepo/components'

function App() {
  const breads: Bread[] = [
    {
      name: 'Sourdough',
      src: bread1,
      price: '23.23',
      description:
        'A bread product made by a long fermentation of dough using naturally occurring lactobacilli and yeasts.',
    },
    {
      name: 'Brioche',
      src: bread2,
      price: '16.99',
      description:
        'A highly enriched bread, noted for its high butter and egg content, commonly served as a component of French desserts.',
    },
    {
      name: 'Boule',
      src: bread3,
      price: '230.11',
      description:
        'A dark brown sourdough rye bread, traditionally sweetened with molasses and flavored with coriander and caraway seeds.',
    },
    {
      name: 'Marraqueta',
      src: bread4,
      price: '14.30',
      description:
        "Unleavened, sometimes called a 'Chinese pancake', very much like Indian chapati, can be size of a large pizza",
    },
    {
      name: 'Melonpan',
      src: bread5,
      price: '2.99',
      description:
        'Made of enriched dough covered in thin layer of crispy cookie dough.',
    },
    {
      name: 'Soda Bread',
      src: bread6,
      price: '8.66',
      description:
        'A variety of quick bread traditionally made in a variety of cuisines in which sodium bicarbonate (otherwise known as baking soda) is used as a raising agent',
    },
  ]
  return (
    <div className="App" style={{ background: '#eee', height: '100vh' }}>
      <Header />
      <div style={{ display: 'flex', flexWrap: 'wrap', background: '#eee' }}>
        {breads.map(bread => (
          <BreadCard key={bread.name} bread={bread} />
        ))}
      </div>
    </div>
  )
}

export default App
