import Image from 'next/image'
import React from 'react'

export default function AboutMeTopSection() {
  return (
      <>
        <div>
            <div>
                <Image src="/images/dongich profile.jpg" alt='profile pic' width={100} height={50} />
            </div>
            <div>
                <p>I am Stephen Odongo</p>
                <p>A Javascript pro. I use Javascript to build anything. I leverage JavaScript's rich and popular frameworks to make me more productive and deliver optimized solutions</p>
                <p>Next js, React Js, Express js with Node</p>

            </div>
        </div>
        <div>
                <p>I have a deep passion in programming and tech in general. I started my journey in july 2022.
                <span>
                    This is after dropping a course i had done for 2 years -- Petroleum Chemistry and decided to
                    pursue computer science degree in Kisii University.
                </span>
                </p>
                <p>My goal is to apply my tech Skills in providing solutions to the problems we face in Africa.</p>
            </div>
          </>
  )
}
