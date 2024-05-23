import React from 'react'

interface Props {
 title: String;
 subTitle: String;
}

export const WidgetItem = ({title, subTitle}:Props) => {
  return (
    <div className='flex items-center justify-center flex-col'>
        <h2 className='text-3xl sm:text-5xl'>{title}</h2>
        <h3 className='text-xs text-center sm:text-lg'>{subTitle}</h3>
    </div>
  )
}
