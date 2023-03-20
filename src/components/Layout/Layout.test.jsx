import { render, screen, waitFor, cleanup } from '@testing-library/react'
import Layout from './Layout.jsx'

jest.mock('react-router-dom')

describe('Layout tests', () => {
  beforeEach(() => {
    cleanup()
  })

  it('should contains the header role', async () => {
    render(<Layout />)
    const header = await waitFor(() => screen.getByRole('header'))
    expect(header).toBeInTheDocument()
  })
})
