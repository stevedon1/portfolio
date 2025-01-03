import Image from 'next/image'
import React from 'react'

export default function Hobbies() {
  return (
    <div>
      <p>Hobbies</p>
      <div>
        <p>Travelling and And appreciating nature</p>
        <Image src="/images/national park.jpg" alt='national park' width={100} height={100}/>
      </div>
      <div>
        <Image src="/images/football tcrc.jpg" alt='national park' width={100} height={100}/>
        <p>Playing Outdoor games and team sport eg.Football</p>
      </div>
      <div>
        <p>Playing Chess</p>
        <p>Video Editing and directing</p>
        <p>Reading self-help, motivational and financial books.</p>
        <p>Listening to Podcasts: Self-help, motivational and financial books.</p>
      </div>
    </div>
  )
}
