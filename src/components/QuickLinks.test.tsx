import { describe, it, expect } from 'vitest'
import { render, screen } from '../test/test-utils'
import { QuickLinks } from './QuickLinks'

describe('QuickLinks', () => {
  it('renders all quick links', () => {
    render(<QuickLinks />)
    
    expect(screen.getByText(/Trash & Recycling/i)).toBeInTheDocument()
    expect(screen.getByText(/Pay Bills/i)).toBeInTheDocument()
    expect(screen.getByText(/Licenses & Permits/i)).toBeInTheDocument()
    expect(screen.getByText(/Parks & Recreation/i)).toBeInTheDocument()
    expect(screen.getByText(/Jobs/i)).toBeInTheDocument()
  })

  it('renders icons for each link', () => {
    render(<QuickLinks />)
    
    const links = screen.getAllByRole('link')
    expect(links.length).toBe(5)
  })
})