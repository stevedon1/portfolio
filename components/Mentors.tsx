import Image from 'next/image';
import React from 'react';

export default function Mentors() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>Mentors</h1>
      {/* Introduction */}
      <div className="text-center mb-8">
        <p className="text-xl text-gray-700">
          I have many Mentors, both locally and internationally, in different fields. But I consider the following my top 3.
        </p>
      </div>

      {/* Mentor 1 */}
      <div className="flex items-center justify-start gap-6 mb-8">
        <div className="flex-shrink-0">
          <Image
            src="/images/new joshua selman.jpeg"
            alt="Apostle Joshua Selman"
            width={100}
            height={100}
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="text-left">
          <p className="text-lg font-semibold text-gray-800">Apostle Joshua Selman</p>
        </div>
      </div>

      {/* Mentor 2 */}
      <div className="flex items-center justify-start gap-6 mb-8">
        <div className="flex-shrink-0">
          <Image
            src="/images/steve jobs.jpeg"
            alt="Steve Jobs"
            width={100}
            height={100}
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="text-left">
          <p className="text-lg font-semibold text-gray-800">Steve Jobs</p>
        </div>
      </div>

      {/* Mentor 3 */}
      <div className="flex items-center justify-start gap-6 mb-8">
        <div className="flex-shrink-0">
          <Image
            src="/images/mrbeast.jpg"
            alt="MrBeast (Jimmy Donaldson)"
            width={100}
            height={100}
            className="rounded-full shadow-lg"
          />
        </div>
        <div className="text-left">
          <p className="text-lg font-semibold text-gray-800">MrBeast (Jimmy Donaldson)</p>
        </div>
      </div>
    </div>
  );
}
