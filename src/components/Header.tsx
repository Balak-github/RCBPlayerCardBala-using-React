import React from 'react';
import { Trophy } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-white flex items-center justify-center gap-3 mb-4">
        <Trophy size={40} />
        {title}
      </h1>
      <p className="text-red-100 text-lg">
        {subtitle}
      </p>
    </header>
  );
}