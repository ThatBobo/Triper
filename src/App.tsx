import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center">
      <h1 className="text-5xl font-bold mb-4">
        Welcome to <span className="text-blue-600">Triper</span>
      </h1>

      <p className="text-lg text-gray-600 max-w-xl mb-10">
        A simple and fast way to create payments without accounts or setup.
      </p>

      <div className="flex gap-4">
        <Link
          to="/Triper/create"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Create a Payment
        </Link>

        <Link
          to="/Triper/docs"
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          View Docs
        </Link>
      </div>

      <footer className="mt-16 text-gray-400 text-sm">
        Triper — lightweight payments for developers
      </footer>
    </main>
  );
}
