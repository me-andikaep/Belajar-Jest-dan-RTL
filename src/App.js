import './App.css';
import CompAxiosCall from './testing/CompAxiosCall';
import CompRole from './testing/CompRole';
import CompUserEvent from './testing/CompUserEvent';
import CompVariant from './testing/CompVariant';
import SampleCompRTL from './testing/SampleCompRTL';
import SimpleShowHide from './testing/SimpleShowHide';

function App() {
	return (
		<div className='App'>
			<SampleCompRTL />
			<SimpleShowHide />
			<CompRole />
			<CompVariant />
			<CompUserEvent />
			<CompAxiosCall />
		</div>
	);
}

export default App;
