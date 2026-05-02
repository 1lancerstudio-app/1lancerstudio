import React from 'react';

interface SectionLabelProps {
  text: string;
}

const SectionLabel: React.FC<SectionLabelProps> = ({ text }) => {
  const words = text.split(' ');
  const firstWord = words[0];
  const restOfText = words.slice(1).join(' ');

  return (
    <div className="inline-flex items-center px-4 py-1 rounded-full border border-border bg-glass backdrop-blur-sm section-label">
      <span className="text-chrome mr-1.5">{firstWord}</span>
      <span className="text-muted">{restOfText}</span>
    </div>
  );
};

export default SectionLabel;
