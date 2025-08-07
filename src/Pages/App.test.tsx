import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'
import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'


describe('App component', () => {
  it('adds item to cart and updates totalItems', async () => {
    render(<App />)
    const user = userEvent.setup()

    const broccoliCard = await screen.findByText(/broccoli/i)
    const cardContainer = broccoliCard.closest('.card-container')
    expect(cardContainer).not.toBeNull()
    const containerElement = cardContainer as HTMLElement

    const addButton = within(containerElement).getByText(/add to cart/i)
    await user.click(addButton)

    const cartButton = screen.getByText((content, element) =>
    element?.classList.contains('cartButton-title') && /cart/i.test(content) || false
    )
  expect(cartButton).toBeInTheDocument()
    })
})


