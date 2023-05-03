import React from 'react';
import './App.css';


function App() {
    const handleClick = () => {
        alert('Sorry, the shop is currently closed. Please have patience 🙂');
    }

    return (
        <div className="app">
            <nav>
                <h1>Teddy Bear Shop</h1>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <main>
                <h2>Welcome to our shop!</h2>
                <p>Best teddy bears in Republic of Moldova.</p>
                <button onClick={handleClick}>Shop Now</button>
            </main>
        </div>
    );
}

export default App;