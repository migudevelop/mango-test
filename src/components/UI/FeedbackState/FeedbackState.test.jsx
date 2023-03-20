import { render, screen, waitFor, cleanup } from '@testing-library/react'
import FeedbackState from './FeedbackState'

describe('FeedbackState tests', () => {
  beforeEach(() => {
    cleanup()
  })

  it('Not should be display Test text', async () => {
    render(<FeedbackState isLoading={true}>Test</FeedbackState>)
    const text = await waitFor(() => screen.queryByText('Test'))
    expect(text).not.toBeInTheDocument()
  })

  it('Should be display Test text', async () => {
    render(
      <FeedbackState isLoading={false} error={null}>
        Test
      </FeedbackState>
    )
    const text = await waitFor(() => screen.queryByText('Test'))
    expect(text).toBeInTheDocument()
  })
})
