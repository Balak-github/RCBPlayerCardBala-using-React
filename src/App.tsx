import React, { useState, useMemo, useCallback } from 'react';
import { players } from './data/players';
import { PlayerCard } from './components/PlayerCard';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';

function App() {
  // State management with hooks
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('All');
  const [favorites, setFavorites] = useState<number[]>([]);

  // Memoized filtered players
  const filteredPlayers = useMemo(() => {
    return players.filter(player => {
      const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = selectedRole === 'All' || player.role.includes(selectedRole);
      return matchesSearch && matchesRole;
    });
  }, [searchTerm, selectedRole]);

  // Callback for toggling favorites
  const handleToggleFavorite = useCallback((id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-800">
      <div className="container mx-auto px-4 py-8">
        <Header 
          title="RCB Players" 
          subtitle="Meet the stars of Royal Challengers Bangalore" 
        />
        
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onRoleFilter={setSelectedRole}
          selectedRole={selectedRole}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlayers.map(player => (
            <PlayerCard 
              key={player.id} 
              player={player}
              isFavorite={favorites.includes(player.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </div>

        {filteredPlayers.length === 0 && (
          <div className="text-center text-white mt-8">
            No players found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}

export default App;