import { render, screen, waitFor, cleanup } from '@testing-library/react'
import Home from './Home'

describe('Home tests', () => {
  beforeEach(() => {
    cleanup()
  })

  it('Should be display Exescise instructions text', async () => {
    render(<Home />)
    const text = await waitFor(() => screen.getByText(/Exescise instructions/i))
    expect(text).toBeInTheDocument()
  })
})
