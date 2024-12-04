import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import { LanguageProvider } from '@/contexts/LanguageContext';

describe('Hero', () => {
  it('renders hero section with search bar', () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    );
    
    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});