import '@testing-library/jest-dom'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from './Header'
import userEvent from '@testing-library/user-event'
import type { HeaderProps } from '../../../types'

describe('Header component', () => {
  it('renders cart button with correct total items', () => {
    render(<Header onCartClick={() => {}} totalItems={3} />)
    expect(screen.getByText(/cart/i)).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('calls onCartClick on click', () => {
    const onCartClick = vi.fn()
    render(<Header onCartClick={onCartClick} totalItems={0} />)
    fireEvent.click(screen.getByText(/cart/i))
    expect(onCartClick).toHaveBeenCalledOnce()
  })
})

describe('Header', () => {
  const mockProps: HeaderProps = {
    onCartClick: vi.fn(),
    totalItems: 3,
  }

  it('renders logo and cart with totalItems', () => {
    render(<Header {...mockProps} />)
    expect(screen.getByText(/Vegetable/i)).toBeInTheDocument()
    expect(screen.getByText(/Cart/i)).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('calls onCartClick when cart button clicked', async () => {
    render(<Header {...mockProps} />)
    const user = userEvent.setup()
    const button = screen.getByText(/Cart/i)
    await user.click(button)
    expect(mockProps.onCartClick).toHaveBeenCalled()
  })
})

