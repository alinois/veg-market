import { render, screen } from '@testing-library/react'
import { Body } from './Body'
import type { BodyProps, CartItem } from '../../../types'
import { describe, it, expect, vi } from 'vitest'
import '@testing-library/jest-dom'

describe('Body', () => {
  const mockCartItems: CartItem[] = [
    { id: '1', name: 'Tomato-1kg', price: 2, image: 'img1.jpg', quantity: 1 },
  ]

  const props: BodyProps = {
    isPopupOpen: false,
    cartItems: mockCartItems,
    onAddToCart: vi.fn(),
    onUpdateQuantity: vi.fn(),
  }

  it('renders catalog title', () => {
    render(<Body {...props} />)
    expect(screen.getByText(/Catalog/i)).toBeInTheDocument()
  })
})
