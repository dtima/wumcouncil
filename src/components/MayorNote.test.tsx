import { describe, it, expect } from 'vitest'
import { render, screen } from '../test/test-utils'
import { MayorNote } from './MayorNote'

describe('MayorNote', () => {
  it('renders mayor section with image and message', () => {
    render(<MayorNote />)
    
    expect(screen.getByAltText(/Mayor of Garoua III/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Mayor's Message/i })).toBeInTheDocument()
  })

  it('renders learn more button', () => {
    render(<MayorNote />)
    
    expect(screen.getByRole('button', { name: /Learn More/i })).toBeInTheDocument()
  })
})