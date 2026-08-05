"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface PersonalizationData {
  companyName: string;
  aboutText: string;
  locationText: string;
  contactText: string;
  inquiriesText: string;
  isPersonalized: boolean;
}

interface PersonalizationContextProps extends PersonalizationData {
  updatePersonalization: (data: Partial<Omit<PersonalizationData, "isPersonalized">>) => void;
  resetPersonalization: () => void;
}

const DEFAULT_VALUES: PersonalizationData = {
  companyName: "Flooring Studio",
  aboutText: "Interactive lead generation and dynamic quote estimation templates for premium architectural flooring contractors. Deliver custom sand shades, chip mixes, and flat gloss metrics seamlessly.",
  locationText: "Your Business Address, Dubai, UAE",
  contactText: "+971 58 916 3867",
  inquiriesText: "sales@yourdomain.com",
  isPersonalized: false
};

const PersonalizationContext = createContext<PersonalizationContextProps | undefined>(undefined);

export function PersonalizationProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<PersonalizationData>(DEFAULT_VALUES);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("flooring_studio_personalization");
      if (saved) {
        setState(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to load personalization state", e);
    }
    setIsLoaded(true);
  }, []);

  const updatePersonalization = (data: Partial<Omit<PersonalizationData, "isPersonalized">>) => {
    setState((prev) => {
      const newState = {
        ...prev,
        ...data,
        isPersonalized: true
      };
      try {
        localStorage.setItem("flooring_studio_personalization", JSON.stringify(newState));
      } catch (e) {
        console.error("Failed to save personalization state", e);
      }
      return newState;
    });
  };

  const resetPersonalization = () => {
    setState(DEFAULT_VALUES);
    try {
      localStorage.removeItem("flooring_studio_personalization");
    } catch (e) {
      console.error("Failed to reset personalization state", e);
    }
  };

  return (
    <PersonalizationContext.Provider
      value={{
        ...state,
        updatePersonalization,
        resetPersonalization
      }}
    >
      {children}
    </PersonalizationContext.Provider>
  );
}

export function usePersonalization() {
  const context = useContext(PersonalizationContext);
  if (context === undefined) {
    throw new Error("usePersonalization must be used within a PersonalizationProvider");
  }
  return context;
}
