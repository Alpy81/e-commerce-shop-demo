"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface WishlistContextType {
  productIds: string[];
  toggleItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  totalItems: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined,
);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [productIds, setProductIds] = useState<string[]>([]);

  function toggleItem(productId: string) {
    setProductIds((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  }

  function isInWishlist(productId: string) {
    return productIds.includes(productId);
  }

  return (
    <WishlistContext.Provider
      value={{
        productIds,
        toggleItem,
        isInWishlist,
        totalItems: productIds.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error(
      "useWishlist muss innerhalb von WishlistProvider verwendet werden",
    );
  }
  return context;
}
