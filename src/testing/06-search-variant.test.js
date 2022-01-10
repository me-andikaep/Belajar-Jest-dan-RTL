import { render, screen } from '@testing-library/react';
import App from '../App';
import { data } from './CompVariant';

describe('Testing semua aplikasi di dalam App', () => {
	it('melakukan testing untuk queryBy dan findBy', async () => {
		render(<App />);
		// expect(screen.getByText(/Selamat datang/)).toBeNull(); // getbytext return null dan tdk dapat asyncronus
		expect(screen.queryByText(/Selamat datang/)).toBeNull(); // querybytext tidak return null
		// screen.debug();
		expect(await screen.findByText(/Selamat datang/)).toBeInTheDocument(); // findbytext bisa asyncronus
		// screen.debug();
	});

	it('melakukan render sebanyak total hari', () => {
		render(<App />);
		// expect(screen.getByTestId('hari')).toHaveLength(data.length); // gunakan all untuk nampilin lebih dari 1
		expect(screen.getAllByTestId('hari')).toHaveLength(data.length); // getAllBy untuk menghandle multiple element
	});
});
