import { createContext, useContext, useState } from "react";
import { Parliamentarian } from "../types/Parlamentarian";

interface FavoritesProviderProps {
  children: React.ReactNode;
}

type FavoritesContextData = {
  favorites: Parliamentarian[];
  handleFavoriteParlamentarian: (parlamentarian: Parliamentarian) => void;
};

export const FavoritesContext = createContext({} as FavoritesContextData);

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Parliamentarian[]>([]);

  function handleFavoriteParlamentarian(parlamentarian: Parliamentarian) {
    const indexFavorited = favorites.findIndex((item) => {
      return item.id === parlamentarian.id;
    });

    if (indexFavorited !== -1) {
      setFavorites((prev) => {
        const newFavorites = [...prev];
        newFavorites.splice(indexFavorited, 1);
        return newFavorites;
      });
      return;
    }

    setFavorites((prev) => [...prev, parlamentarian]);
  }

  const value = {
    favorites,
    handleFavoriteParlamentarian,
  };
  console.log(favorites);
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorite = () => useContext(FavoritesContext);
