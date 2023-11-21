import React, { useEffect } from 'react';
import Logo from './Spline';
import Footer from './Footer';
import './App.css'






function App() {

return (
    <>
     
        
        <div className='header'>
          <h2>This is a PWA (Progressive Web App) demo</h2>
          <Logo />
        </div>
        <div className="card">
          <p>You can download this web page as a chrome desktop application.</p>
          <p>Install through the address bar:</p>
         <img src="assets/Screenshot from 2023-11-21 15-35-56.png" alt="install from the adress bar" />
         <p>Or through your settings:</p>
         <img src="assets/Screenshot from 2023-11-21 15-36-59.png" alt="install from the settings" />
        </div>
        <div className="card">
          <p>"manifest.json" file, maskable icons and some additional Lighthouse suggestions enable us using this feature.</p>
          <img src="assets/Screenshot from 2023-11-21 15-43-52.png" alt="code screenshot" />
        
        </div>
        <Footer />
     
     
    </>
)
}

export default App
