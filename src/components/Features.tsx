import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="p-5">
      <h2 className="text-2xl font-semibold text-center">Features</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
        <li className="bg-gray-100 p-4 rounded shadow">Feature 1</li>
        <li className="bg-gray-100 p-4 rounded shadow">Feature 2</li>
        <li className="bg-gray-100 p-4 rounded shadow">Feature 3</li>
      </ul>
    </section>
  );
}

export default Features;
