import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Cards } from './Cards'
import type { CardsProps, Article } from '../../../../types'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'

describe('Cards', () => {
  const articles: Article[] = [
    { id: '1', name: 'Carrot-1kg', price: 3, image: 'carrot.jpg' },
  ]

  const onAddToCart = vi.fn()

  const props: CardsProps = {
    articles,
    onAddToCart,
    isLoading: false,
  }

  it('renders article name and price', () => {
    render(<Cards {...props} />)
    expect(screen.getByText(/Carrot/i)).toBeInTheDocument()
    expect(screen.getByText('$ 3')).toBeInTheDocument()
  })

  it('increments and decrements count', async () => {
    render(<Cards {...props} />)
    const user = userEvent.setup()

    const plusBtn = screen.getByText('+')
    const minusBtn = screen.getByText('−')

    await user.click(plusBtn)
    expect(screen.getByText('1')).toBeInTheDocument()

    await user.click(minusBtn)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('calls onAddToCart with correct quantity', async () => {
    render(<Cards {...props} />)
    const user = userEvent.setup()

    const plusBtn = screen.getByText('+')
    await user.click(plusBtn)
    const addBtn = screen.getByText(/Add to cart/i)
    await user.click(addBtn)

    expect(onAddToCart).toHaveBeenCalledWith(articles[0], 1)
  })
})
