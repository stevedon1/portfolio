import React from 'react'
import AccordionComp from '@/components/AccordionComp'
import RealProjects from '@/components/RealProjects'
import Repositories from '@/components/Repositories'

export default function page() {
  return (
    <div className='min-h-screen'>
      <AccordionComp/>
      <RealProjects/>
      <Repositories/>
    </div>
  )
}
