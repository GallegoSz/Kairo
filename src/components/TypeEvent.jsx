import React from 'react'

const TypeEvent = () => {
  return (
    <div className='flex justify-center gap-32 mb-7'>
        <div className='flex items-center gap-2'>
            <div className='bg-amber-600 p-4 rounded-full shadow-md'></div>
            <h5>Evento do Setor</h5>
        </div>
        <div className='flex items-center gap-2'>
            <div className='bg-blue-700 p-4 rounded-full shadow-md'></div>
            <h5>Evento Pessoal</h5>
        </div>
    </div>
  )
}

export default TypeEvent