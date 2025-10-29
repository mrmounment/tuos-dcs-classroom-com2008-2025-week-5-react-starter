import Greeting from './Greeting.jsx';
import { useState } from 'react';
import NewButton from './NewButton.jsx';

function App() {
    const [show, setShow] = useState(false);
    return (
        <div>
            <h1>Hello there</h1>
            <p>This is a paragraph</p>
            <Greeting />
            <button onClick={ () => setShow(!show)}>
                {show ? 'Hide' : 'Show'} Info
            </button>
            {show && <p>This is some extra information</p>}
            <NewButton />
        </div>

    );
}
export default App;
