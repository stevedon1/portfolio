import Image from 'next/image'
import React from 'react'

export default function Mentors() {
  return (
    <div>
      <p>I have many Mentors both locally and international in different fields but i consider the following my top 3.</p>
      <div>
        <Image src="/images/new joshua selman.jpeg" alt='mentor' width={100} height={100}/>
        <p>Apostle Joshua Selman</p>
      </div>
      <div>
        <Image src="/images/steve jobs.jpeg" alt='mentor' width={100} height={100}/>
        <p>Steve Jobs</p>
      </div>
      <div>
        <Image src="/images/mrbeast.jpg" alt='mentor' width={100} height={100}/>
        <p>MrBeast (Jimmy Donaldson)</p>
      </div>
    </div>
  )
}
