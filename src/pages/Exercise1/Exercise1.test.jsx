import { render, screen, waitFor, cleanup } from '@testing-library/react'
import Exercise1 from './Exercise1'
import { exercisesServices } from '@/services'

jest.mock('@/services', () => ({
  exercisesServices: { getMinMax: jest.fn() }
}))

describe('Exercise1 tests', () => {
  beforeEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  it('Should be display CircleLoader component', async () => {
    exercisesServices.getMinMax.mockReturnValue({
      data: {},
      isLoading: true,
      error: null
    })
    const { container } = render(<Exercise1 />)
    expect(container.querySelector('.svg_circle')).toBeInTheDocument()
  })

  it('Should be display PriceRange component', async () => {
    exercisesServices.getMinMax.mockReturnValue({
      data: { min: 0, max: 100 },
      isLoading: false,
      error: null
    })
    render(<Exercise1 />)
    const value = await waitFor(() => screen.getByText(/100,00/))
    expect(value).toBeInTheDocument()
  })
})
