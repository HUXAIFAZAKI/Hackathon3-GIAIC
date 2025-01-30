"use client";

import React, { useState } from 'react';

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left focus:outline-none outline-none"
      >
        <h4 className="font-bold text-lg">{question}</h4>
        <span className="text-xl">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-[rgba(0,0,0,0.8)]">{answer}</p>}
    </div>
  );
};

export default FAQ;