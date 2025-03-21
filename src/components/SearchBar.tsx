import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onRoleFilter: (role: string) => void;
  selectedRole: string;
}

export function SearchBar({ searchTerm, onSearchChange, onRoleFilter, selectedRole }: SearchBarProps) {
  const roles = ['All', 'Batsman', 'Bowler','All-Round'];

  return (
    <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="relative w-full md:w-96">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search players..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white/30"
        />
      </div>
      <div className="flex gap-2">
        {roles.map((role) => (
          <button
            key={role}
            onClick={() => onRoleFilter(role)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedRole === role
                ? 'bg-white text-red-600'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {role}
          </button>
        ))}
      </div>
    </div>
  );
}