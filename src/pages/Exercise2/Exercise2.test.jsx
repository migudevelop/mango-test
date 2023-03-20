import { render, screen, waitFor, cleanup } from '@testing-library/react'
import Exercise2 from './Exercise2'
import { exercisesServices } from '@/services'

jest.mock('@/services', () => ({
  exercisesServices: { getRanges: jest.fn() }
}))

describe('Exercise2 tests', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  it('Should be display CircleLoader component', async () => {
    exercisesServices.getRanges.mockReturnValue({
      data: [],
      isLoading: true,
      error: null
    })
    const { container } = render(<Exercise2 />)
    expect(container.querySelector('.svg_circle')).toBeInTheDocument()
  })

  it('Should be display PriceRange component', async () => {
    exercisesServices.getRanges.mockReturnValue({
      data: [1.99, 5.99, 10.99, 30.99, 50.99, 70.99],
      isLoading: false,
      error: null
    })
    render(<Exercise2 />)
    const value = await waitFor(() => screen.getByText(/100,00/))
    expect(value).toBeInTheDocument()
  })
})
