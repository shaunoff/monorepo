import React from 'react'
import { Bread } from '@monorepo/types'

export const Header: React.FC = () => {
  return (
    <div
      style={{
        height: '36px',
        background: '#CD5C5C',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        padding: '16px',
      }}
    >
      <h1>Slatterys Sourdough</h1>
    </div>
  )
}

interface BreadCardProps {
  bread: Bread
}

export const BreadCard: React.FC<BreadCardProps> = (props: BreadCardProps) => {
  return (
    <div
      style={{
        border: '1px solid #eee',
        minWidth: '450px',
        borderRadius: '16px',
        background: 'white',
        height: '280px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        margin: '16px',
      }}
    >
      <div style={{ display: 'flex' }}>
        <img
          style={{ height: '220px', width: '220px', borderRadius: '20px' }}
          src={props.bread.src}
        />
        <div style={{ width: '240px', padding: '10px' }}>
          <h2>{props.bread.name}</h2>
          <p style={{ color: '#888' }}>{props.bread.description}</p>
        </div>
      </div>
      <div
        style={{
          padding: '0px 32px',
          height: '44px',
          background: '#CD5C5C',
          borderRadius: '16px',
          margin: '16px 0px',
          display: 'flex',
          color: 'white',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <h3>${props.bread.price}</h3>
        <h3>Add to Cart</h3>
      </div>
    </div>
  )
}
