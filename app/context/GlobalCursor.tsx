// /context/HideCursorContext.tsx

'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface HideCursorContextType {
  hideCursor: boolean;
  setHideCursor: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context
const HideCursorContext = createContext<HideCursorContextType | undefined>(undefined);

// Provider component
export const HideCursorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [hideCursor, setHideCursor] = useState(false);

  return (
    <HideCursorContext.Provider value={{ hideCursor, setHideCursor }}>
      {children}
    </HideCursorContext.Provider>
  );
};

// Custom hook for consuming the context
export const useHideCursor = () => {
  const context = useContext(HideCursorContext);
  if (!context) {
    throw new Error('useHideCursor must be used within a HideCursorProvider');
  }
  return context;
};
