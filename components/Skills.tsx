import Image from 'next/image'
import React from 'react'

export default function Skills() {
  return (
    <div>
      <p>Skills: (Technical)</p>
      <div>
      <div>
        <Image src="/images/nextjs.jpeg" alt='icon pic' width={50} height={50}/>
        <p>Next Js</p>
      </div>
      <div>
        <Image src="/images/react js.png" alt='icon pic' width={50} height={50}/>
        <p>React Js</p>
      </div>
      <div>
        <Image src="/images/tailwind css.png" alt='icon pic' width={50} height={50}/>
        <p>Tailwind CSS</p>
      </div>
      <div>
        <Image src="/images/express node.jpg" alt='icon pic' width={50} height={50}/>
        <p>Express JS</p>
      </div>
      <div>
        <Image src="/images/mongodb.png" alt='icon pic' width={50} height={50}/>
        <p>MongoDB</p>
      </div>
      </div>
      <div>
        <div>
            <Image src="/images/JavaScript.png" alt='icon pic' width={50} height={50}/>
            <p>JavaScript</p>
        </div>
        <div>
            <Image src="/images/css.jpg" alt='icon pic' width={50} height={50}/>
            <p>CSS</p>
        </div>
        <div>
            <Image src="/images/html.png" alt='icon pic' width={50} height={50}/>
            <p>HTML</p>
        </div>
      </div>
    </div>
  )
}
