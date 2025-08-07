import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Popup } from './Popup'
import type { PopupProps, CartItem } from '../../../../types'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'

describe('Popup', () => {
  const cartItems: CartItem[] = [
    {
      id: '1',
      name: 'Tomato-1kg',
      price: 2,
      image: 'img1.jpg',
      quantity: 3,
    },
  ]

  const onUpdateQuantity = vi.fn()

  const props: PopupProps = {
    articles: cartItems,
    isOpen: true,
    onUpdateQuantity,
  }

  it('shows cart items and total price', () => {
    render(<Popup {...props} />)
    expect(screen.getByText(/Tomato/i)).toBeInTheDocument()
    expect(screen.getByText(/\$6/)).toBeInTheDocument() // 2 * 3 = 6
  })

  it('calls onUpdateQuantity when buttons clicked', async () => {
    render(<Popup {...props} />)
    const user = userEvent.setup()

    const plusBtn = screen.getByText('+')
    await user.click(plusBtn)
    expect(onUpdateQuantity).toHaveBeenCalledWith('1', 4)

    const minusBtn = screen.getByText('−')
    await user.click(minusBtn)
    expect(onUpdateQuantity).toHaveBeenCalledWith('1', 2)
  })
})
