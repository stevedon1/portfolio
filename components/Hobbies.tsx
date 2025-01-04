import Image from 'next/image';
import React from 'react';

export default function Hobbies() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Title Section */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Hobbies</h2>

      {/* Travelling and Nature */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
        <div className="flex-1 text-center sm:text-left">
          <p className="text-xl text-gray-700 mb-4">
            Travelling and Appreciating Nature
          </p>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/images/national park.jpg"
            alt="National Park"
            width={200}
            height={200}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Playing Outdoor Games */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
         <div className="flex-1 text-center sm:text-left">
          <p className="text-xl text-gray-700 mb-4">
            Playing Outdoor Games and Team Sports (e.g., Football)
          </p>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/images/football tcrc.jpg"
            alt="Football"
            width={200}
            height={200}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Additional Hobbies */}
      <div className="space-y-4 text-lg text-gray-700">
        <p>Playing Chess</p>
        <p>Video Editing and Directing</p>
        <p>Reading Self-help, Motivational, and Financial Books</p>
        <p>Listening to Podcasts: Self-help, Motivational, and Financial Content</p>
      </div>
    </div>
  );
}
