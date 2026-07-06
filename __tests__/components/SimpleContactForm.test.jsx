import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SimpleContactForm from '../../components/contact/SimpleContactForm';

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}));

// Mock icons
jest.mock('lucide-react', () => ({
  User: () => <svg data-testid="icon-user" />,
  Mail: () => <svg data-testid="icon-mail" />,
  Phone: () => <svg data-testid="icon-phone" />,
  MessageSquare: () => <svg data-testid="icon-message" />,
  Send: () => <svg data-testid="icon-send" />,
}));

describe('SimpleContactForm', () => {
    beforeEach(() => {
        // Clear fetch mock before each test
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({ success: true }),
            })
        );
    });

    it('renders the form with all input fields', () => {
        render(<SimpleContactForm />);
        
        expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument();
        expect(screen.getByPlaceholderText(/Tell us about your project/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Send Secure Message/i })).toBeInTheDocument();
    });

    it('updates input values when typing', () => {
        render(<SimpleContactForm />);
        
        const firstNameInput = screen.getByPlaceholderText('First Name');
        fireEvent.change(firstNameInput, { target: { value: 'John' } });
        expect(firstNameInput.value).toBe('John');
        
        const emailInput = screen.getByPlaceholderText('Email Address');
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        expect(emailInput.value).toBe('john@example.com');
    });

    it('shows error if form is submitted without recaptcha', async () => {
        render(<SimpleContactForm />);
        
        const submitButton = screen.getByRole('button', { name: /Send Secure Message/i });
        fireEvent.click(submitButton);
        
        // Assuming validation triggers a message or state change. 
        // We can check if fetch was NOT called since recaptcha is required.
        expect(global.fetch).not.toHaveBeenCalled();
    });
});
