import React from 'react'
import './home.css';
// import Navbar from './Navbar';
import Navbar from './Navbar';
 function Home() {
  return (
    <div>
      {/* <Navbar/> */}
  <header class="header">
    <a href="logo" class="logo">LIBRARY</a>
    <nav class="nav-items">
      <a href="home">Home</a>
      <a href="books">Books</a>
      
      <a href="membership">Membership</a>
      <a href="about">About</a>
      <a href="Contact">Contact</a> 
      <a href="login">Login</a>
      <a href="login">Register</a>
    </nav>
  </header>
  <main>
    <div class="intro">
      <h1>Welcome</h1>
      <p></p>
      <button>library</button>
    </div>
    <div class="about-me">
    </div>
    </main>
  
  </div>
)
}

export default Home





// import React from 'react'
// import Navbar from './Navbar'
// import './home.css'
// function Home() {
//   return (
//     <div>
//       <Navbar/>
//       <main>
//         <h1>Hello</h1>
//       </main>
//     </div>
//   )
// }

// export default Home


// import React from 'react';

// const Home = () => {
//   return (
//     <div>
//       <h1>Welcome to the Library Management System</h1>
//       <p>Explore our collection of books and manage library operations efficiently.</p>
//       <button>View Catalog</button>
//       <button>Login</button>
//     </div>
//   );
// };

// export default Home;
