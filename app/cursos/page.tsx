"use client"
import Card from '@/components/card/Card'
import cursos from '@/data'
import React from 'react'

export default function Cursos() {

  return (
    <div className='container grid grid-cols-1 md:grid-cols-3 px-3 mx-auto gap-7 pt-32 h-auto mb-2 '>
      {cursos?.map(el => <Card data={el} key={el.name} />)}
    </div>
  )
}
