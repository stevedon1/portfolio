import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md">
      <Accordion type="single" collapsible>
        {/* Parent Accordion */}
        <AccordionItem value="parent">
          <AccordionTrigger className="text-lg bg-indigo-200 p-1 rounded-md font-bold text-indigo-700 hover:text-indigo-800 transition">
            What exactly can I do? <small className="text-gray-400">(click me)</small>
          </AccordionTrigger>
          <AccordionContent className="mt-2 bg-gray-100 p-4 rounded-lg shadow-inner">
            {/* Nested (Child) Accordions */}
            <Accordion type="single" collapsible className="mt-4 space-y-2">
              {/* E-Commerce Platforms */}
              <AccordionItem value="ecommerce">
                <AccordionTrigger className="text-base font-medium text-gray-800 hover:text-gray-900 transition">
                  1. E-Commerce Platforms:
                </AccordionTrigger>
                <AccordionContent className="mt-1 text-sm text-gray-600">
                  <p>
                    Online stores with features like product listings, shopping
                    carts, and payment integrations.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Social Media Applications */}
              <AccordionItem value="social-media">
                <AccordionTrigger className="text-base font-medium text-gray-800 hover:text-gray-900 transition">
                  2. Social Media Applications:
                </AccordionTrigger>
                <AccordionContent className="mt-1 text-sm text-gray-600">
                  <p>
                    Apps with user profiles, posts, comments, likes, and
                    messaging.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Task Management Tools */}
              <AccordionItem value="task-management">
                <AccordionTrigger className="text-base font-medium text-gray-800 hover:text-gray-900 transition">
                  3. Task Management Tools:
                </AccordionTrigger>
                <AccordionContent className="mt-1 text-sm text-gray-600">
                  <p>
                    Apps for tracking tasks, managing deadlines, and
                    collaborating with teams.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Content Management Systems */}
              <AccordionItem value="cms">
                <AccordionTrigger className="text-base font-medium text-gray-800 hover:text-gray-900 transition">
                  4. Content Management Systems (CMS):
                </AccordionTrigger>
                <AccordionContent className="mt-1 text-sm text-gray-600">
                  <p>
                    Systems for creating, managing, and publishing digital
                    content.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Portfolio Websites */}
              <AccordionItem value="portfolio">
                <AccordionTrigger className="text-base font-medium text-gray-800 hover:text-gray-900 transition">
                  5. Portfolio Websites:
                </AccordionTrigger>
                <AccordionContent className="mt-1 text-sm text-gray-600">
                  <p>
                    Personal or business portfolio websites with interactive
                    features.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Business Management Systems */}
              <AccordionItem value="business-management">
                <AccordionTrigger className="text-base font-medium text-gray-800 hover:text-gray-900 transition">
                  6. Business Management Systems:
                </AccordionTrigger>
                <AccordionContent className="mt-1 text-sm text-gray-600">
                  <p>
                    Applications to manage stock, expenses, and sales for small
                    businesses.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Learning Platforms */}
              <AccordionItem value="learning-platforms">
                <AccordionTrigger className="text-base font-medium text-gray-800 hover:text-gray-900 transition">
                  7. Learning Platforms:
                </AccordionTrigger>
                <AccordionContent className="mt-1 text-sm text-gray-600">
                  <p>
                    Online education platforms with features like quizzes, video
                    lessons, and progress tracking.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
