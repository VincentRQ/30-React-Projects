import React from 'react'
import Title from './components/Title'

export default function EsignatureApp() {
  const inputStyle = {
    border: 'none',
    outline: 'none',
    padding: '.35rem 0',
    borderBottom: '2px dotted',
  }
  document.body.style.background = '#eee'

  return (
    <div className='container text-center'>
      <Title classes={'title'} text={'Name'} />
      <Title classes={'main-title mb-4'} text={'Date'} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quae nisi
        expedita esse, nemo repellat. Molestiae error esse eveniet porro
        reprehenderit. Illo vero ullam asperiores fuga inventore pariatur
        repellat eligendi.
      </p>
      <footer
        className='d-flex'
        style={{
          justifyContent: 'space-around',
          position: 'relative',
          top: '40vh',
        }}
      >
        <input type='date' value={''} style={inputStyle} />
        <input type='text' value={''} style={inputStyle} />
      </footer>
    </div>
  )
}
