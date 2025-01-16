import Image from 'next/image'
import React from 'react'

export default function RealProjects() {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Task Management App</h2>
          <Image
            src="/images/task management.png"
            alt="Task Management"
            width={300}
            height={200}
            className="rounded-md mb-4"
          />
          <a
            href="https://task-management-app-lime-five.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mb-4 inline-block"
          >
            Link to the site
          </a>
          <p>
            <span className="font-semibold">Description:</span> A task management
            app that Creates, Reads, Updates and Deletes Tasks. Tech Stack:
            React, Next.js for frontend, Express, and MongoDB for the backend.
            Tailwind CSS for styling. Deployed on Vercel.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">My Business Records Keeping App</h2>
          <Image
            src="/images/open sauce biz.png"
            alt="Business Records"
            width={300}
            height={200}
            className="rounded-md mb-4"
          />
          <a
            href="https://open-sauce-yogat.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mb-4 inline-block"
          >
            Link to the site
          </a>
          <p>
            <span className="font-semibold">Description:</span> A Business Record
            Keeping app that Creates, Reads, Updates and Deletes Records in my
            Business. Tech Stack: React, Next.js, Tailwind CSS. Deployed on
            Vercel.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Nike Website Clone</h2>
          <Image
            src="/images/nike website.png"
            alt="Nike Clone"
            width={300}
            height={200}
            className="rounded-md mb-4"
          />
          <a
            href="https://nike-landingpage-stiv.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mb-4 inline-block"
          >
            Link to the site
          </a>
          <p>
            <span className="font-semibold">Description:</span> A Nike website
            clone that shows new products. Tech Stack: React, Tailwind CSS.
            Deployed on Netlify.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">NASA: Astronomy Picture of the Day</h2>
          <Image
            src="/images/apod website.png"
            alt="APOD"
            width={300}
            height={200}
            className="rounded-md mb-4"
          />
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mb-4 inline-block"
          >
            Link to the site
          </a>
          <p>
            <span className="font-semibold">Description:</span> This site makes
            an API request from the APOD API to display the astronomy picture of
            the day with a description. Deployed on Netlify.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Old Portfolio</h2>
          <Image
            src="/images/old portfolio.png"
            alt="Old Portfolio"
            width={300}
            height={200}
            className="rounded-md mb-4"
          />
          <a
            href="https://portfolio-stiv.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline mb-4 inline-block"
          >
            Link to the site
          </a>
          <p>
            <span className="font-semibold">Description:</span> My old Portfolio
            created using React. Designed for mobile screens only; it is not
            responsive. Deployed on Netlify.
          </p>
        </div>
      </div>
    </div>
  );
}
