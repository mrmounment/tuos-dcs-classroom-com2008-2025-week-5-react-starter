import { useState } from 'react';

function NewButton() {
    const [count, setCount] = useState(0); // Initialize count to 0
    return (
      <div>
          <button onClick={() => setCount(count + 1)}>  // Increases count by 1 per click
               Click me {count}
           </button>
      </div>
    );
}
export default NewButton;