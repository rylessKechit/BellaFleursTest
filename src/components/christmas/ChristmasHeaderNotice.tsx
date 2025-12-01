'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

function ChristmasHeaderNotice() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="
      relative overflow-hidden
      bg-gradient-to-r from-emerald-700 via-red-600 to-emerald-700
      text-white
      px-3 py-3 sm:py-4 text-center
      shadow-lg
    ">
      {/* Guirlandes décoratives */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Guirlande du haut */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-green-500 opacity-60"></div>
        
        {/* Petites lumières scintillantes */}
        <div className="absolute top-1 left-4">
          <div className="w-2 h-2 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
        </div>
        <div className="absolute top-1 left-12">
          <div className="w-2 h-2 bg-red-300 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="absolute top-1 left-20">
          <div className="w-2 h-2 bg-green-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute top-1 right-20">
          <div className="w-2 h-2 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        </div>
        <div className="absolute top-1 right-12">
          <div className="w-2 h-2 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute top-1 right-4">
          <div className="w-2 h-2 bg-red-300 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
        </div>

        {/* Flocons de neige */}
        <div className="absolute top-2 left-1/4 text-white opacity-40 text-xs animate-pulse">❄</div>
        <div className="absolute top-2 right-1/4 text-white opacity-40 text-xs animate-pulse" style={{ animationDelay: '1s' }}>❄</div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Version desktop/tablette */}
        <div className="hidden sm:flex items-center justify-center space-x-4">
          <span className="text-yellow-300 text-lg animate-bounce">🎄</span>
          
          <div className="text-center">
            <span className="font-bold text-lg">
              <span className="text-yellow-200">Période de Noël</span> • 
              <span className="text-green-200 ml-2">Livraison gratuite dès 50€</span>
            </span>
            <div className="text-sm text-green-100 opacity-90">
              jusqu'au 31 décembre • Offre limitée
            </div>
          </div>
          
          <a 
            href="/produits"
            className="
              px-4 py-2 
              bg-white bg-opacity-20 hover:bg-opacity-30 
              text-white font-semibold rounded-full
              border border-white border-opacity-30
              hover:scale-105 transition-all duration-200
              backdrop-blur-sm shadow-lg
              text-sm
            "
          >
            🎁 Découvrir
          </a>
          
          <span className="text-yellow-300 text-lg animate-bounce" style={{ animationDelay: '0.5s' }}>🔔</span>
        </div>

        {/* Version mobile */}
        <div className="sm:hidden flex items-center justify-between space-x-2">
          <span className="text-yellow-300 text-base animate-bounce">🎄</span>
          
          <div className="flex-1 text-center">
            <div className="font-bold text-sm">
              <span className="text-yellow-200">Noël</span> • 
              <span className="text-green-200 ml-1">-50€</span>
            </div>
            <div className="text-xs text-green-100 opacity-90">
              Livraison gratuite
            </div>
          </div>
          
          <a 
            href="/produits"
            className="
              px-3 py-1.5 
              bg-white bg-opacity-20 
              text-white font-semibold rounded-full
              text-xs
            "
          >
            🎁
          </a>
        </div>

        {/* Bouton fermeture - responsive */}
        <button
          onClick={() => setIsVisible(false)}
          className="
            absolute top-1 right-1 sm:top-2 sm:right-2
            w-6 h-6 sm:w-7 sm:h-7
            rounded-full 
            bg-white bg-opacity-20 hover:bg-opacity-30 
            text-white hover:text-gray-100
            transition-colors duration-200
            flex items-center justify-center
          "
          aria-label="Fermer"
        >
          <X className="w-3 h-3 sm:w-4 sm:h-4" />
        </button>
      </div>

      {/* Guirlande du bas */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-red-500 to-yellow-400 opacity-60"></div>
    </div>
  );
}

// Export par défaut
export default ChristmasHeaderNotice;