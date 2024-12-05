import { describe, it, expect } from 'vitest'
import { render, screen } from '../test/test-utils'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders contact information', () => {
    render(<Footer />)
    
    expect(screen.getByText(/Garoua III City Hall/i)).toBeInTheDocument()
    expect(screen.getByText(/55 Trinity Ave SW/i)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    
    const socialLinks = screen.getAllByRole('link')
    expect(socialLinks.length).toBeGreaterThan(0)
  })

  it('renders quick links section', () => {
    render(<Footer />)
    
    expect(screen.getByText(/Quick Links/i)).toBeInTheDocument()
  })
})