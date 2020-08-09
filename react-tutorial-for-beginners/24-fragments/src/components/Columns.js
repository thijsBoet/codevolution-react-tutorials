import React from 'react'

function Columns() {
  const items = [
    {
      id: 1,
      title: 'Gone with the wind'
    },
    {
      id: 2,
      title: 'Jungle Book'
    }
  ]
  return (
    <>
      {
        items.map(item => (
          <React.Fragment key={item.id}>
            <h1>Title</h1>
            <p>{item.title}</p>
          </React.Fragment>
        ))
      }
      <td>Name</td>
      <td>Matthijs</td>
    </>
  )
}

export default Columns
