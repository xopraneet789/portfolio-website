import React from 'react';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>My Portfolio</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Hello! I'm a software developer with a passion for building web applications.</p>
          <p>Name: Praneet Reddy</p>
          <p>B.Tech student, 4th year</p>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <p>Email: praneetreddy.2004@gmail.com</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
};

export default App;
