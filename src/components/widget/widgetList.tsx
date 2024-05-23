import React from 'react'
import { WidgetItem } from './WidgetItem'

const DUMMY_WIDGETS = [
    {id:1, title: '20X', subTitle:'Faster Technology'},
    {id:2, title: '3.2M', subTitle:'Total Active User'},
    {id:3, title: '1.6%', subTitle:'Daily Basis Growth'},
    {id:4, title: '2.5B', subTitle:'Funding Overall'},
]


export const WidgetList = () => {
  return (
    <div className='flex items-center justify-between w-full'>
        {
            DUMMY_WIDGETS.map(widget => (
                <WidgetItem key={widget.id} {...widget}/>
            ))
        }
    </div>
  )
}
