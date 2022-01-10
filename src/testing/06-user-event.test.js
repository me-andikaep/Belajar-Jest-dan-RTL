import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('testing seluruh app', () => {
	it('testing onChange event', () => {
		render(<App />);
		const input = screen.getByPlaceholderText('input value');
		userEvent.type(input, 'Prawito Hudoro');
		expect(
			screen.getByText(/Anda mengetik Prawito Hudoro/)
		).toBeInTheDocument();
	});
});
