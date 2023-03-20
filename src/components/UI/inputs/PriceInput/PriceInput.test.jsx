import {
  render,
  screen,
  waitFor,
  cleanup,
  fireEvent
} from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import PriceInput from './PriceInput'

const DEFAULT_PROPS = {
  min: 0,
  max: 100,
  value: 0,
  onBlur: jest.fn()
}

describe('PriceInput tests', () => {
  beforeEach(() => {
    cleanup()
  })

  it('Should be display 0,00 text', async () => {
    render(<PriceInput {...DEFAULT_PROPS} />)
    const text = await waitFor(() => screen.getByText(/0,00/i))
    expect(text).toBeInTheDocument()
  })

  it('Should be display input component', async () => {
    render(<PriceInput disabled={false} {...DEFAULT_PROPS} />)
    const text = await waitFor(() => screen.getByText(/0,00/i))
    await act(async () => {
      await fireEvent.click(text)
    })
    const input = await waitFor(() => screen.getByTestId('price-input'))
    expect(input).toBeInTheDocument()
  })

  it('Should be display 5,00 text', async () => {
    render(<PriceInput disabled={false} {...DEFAULT_PROPS} />)
    const text = await waitFor(() => screen.getByText(/0,00/i))
    await act(async () => {
      await fireEvent.click(text)
    })

    const input = await waitFor(() => screen.getByTestId('price-input'))
    expect(input).toBeInTheDocument()
    await act(async () => {
      await fireEvent.focus(input)
      await fireEvent.change(input, {
        target: { value: 5 }
      })
      await fireEvent.keyUp(input, {
        key: 'Enter',
        code: 'Enter',
        charCode: 13
      })
    })
    const value = await waitFor(() => screen.getByText(/5,00/))
    expect(value).toBeInTheDocument()
  })
})
