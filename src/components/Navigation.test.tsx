import { describe, it, expect } from 'vitest'
import { render, screen } from '../test/test-utils'
import { Navigation } from './Navigation'

describe('Navigation', () => {
  it('renders navigation menu', () => {
    render(<Navigation />)
    
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByAltText('Garoua III Logo')).toBeInTheDocument()
    expect(screen.getByText(/Garoua III/i)).toBeInTheDocument()
  })

  it('toggles language', async () => {
    render(<Navigation />)
    
    const languageButton = screen.getByRole('button', { name: /FR/i })
    expect(languageButton).toBeInTheDocument()
  })

  it('shows search bar when search button is clicked', async () => {
    render(<Navigation />)
    
    const searchButton = screen.getByRole('button', { name: /Toggle search/i })
    expect(searchButton).toBeInTheDocument()
  })
})