import React from 'react';

function Header() {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </nav>
  );
}

function Main() {
  return (
    <main>
      <h2>Main Content</h2>
      <p>This is the main content area of the page.</p>
    </main>
  );
}

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Navigation />
        <Main />
      </div>
    </div>
  );
}

export default App;