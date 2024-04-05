import moon from "../assets/Group 3.png"
const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>Where in the world?</h1>
          </div>
          
          <div className="dark-mode">
              <img src={moon} alt="moon"  className='moon' style={{width: 20}}/>
              <p>Dark Mode</p>
          </div>
    </header>
  );
}

export default Header