import React from 'react';
import { type Player } from '../data/players';
import { Ticket as Cricket, Flag, User, Heart } from 'lucide-react';

interface PlayerCardProps {
  player: Player;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export function PlayerCard({ player, isFavorite, onToggleFavorite }: PlayerCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={player.imageUrl} 
          alt={player.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => onToggleFavorite(player.id)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart
            size={24}
            className={isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-500'}
          />
        </button>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{player.name}</h3>
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <User size={18} />
          <span>{player.role}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <Flag size={18} />
          <span>{player.nationality}</span>
        </div>
        <div className="border-t pt-4">
          <h4 className="flex items-center gap-2 font-semibold text-gray-700 mb-2">
            <Cricket size={18} />
            Statistics
          </h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-500">Matches:</span>
              <span className="ml-2 font-medium">{player.stats.matches}</span>
            </div>
            {player.stats.runs && (
              <div>
                <span className="text-gray-500">Runs:</span>
                <span className="ml-2 font-medium">{player.stats.runs}</span>
              </div>
            )}
            {player.stats.wickets && (
              <div>
                <span className="text-gray-500">Wickets:</span>
                <span className="ml-2 font-medium">{player.stats.wickets}</span>
              </div>
            )}
            {player.stats.average && (
              <div>
                <span className="text-gray-500">Average:</span>
                <span className="ml-2 font-medium">{player.stats.average}</span>
              </div>
            )}
            {player.stats.strikeRate && (
              <div>
                <span className="text-gray-500">Strike Rate:</span>
                <span className="ml-2 font-medium">{player.stats.strikeRate}</span>
              </div>
            )}
            {player.stats.economyRate && (
              <div>
                <span className="text-gray-500">Economy:</span>
                <span className="ml-2 font-medium">{player.stats.economyRate}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}