"use client";

import React, { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
}

export default function GitHubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/stevedon1/repos");
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        My GitHub Repositories
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-600 hover:text-blue-800"
            >
              {repo.name}
            </a>
            <p className="text-gray-700 mt-2 text-sm">
              {repo.description || "No description available."}
            </p>
            <span className="inline-block mt-3 text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-md">
              {repo.language || "N/A"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
