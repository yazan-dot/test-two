// import Logo from "../Assests/Airbnb_Logo_Bélo.svg.png";
// export default function Nav() {
//   return (
//     <div className="navegation">
//       <nav className="container">
//         <img src={Logo} alt="Logo" className="logo--image" />
//       </nav>
//     </div>
//   );
// }
import Logo from "../Assests/logo.png";
export default function NavBar() {
  return (
    <div className="main--nav">
      <nav className="container d-flex-between">
        <div className="logo d-flex ">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <h1>Meme Generator</h1>
        </div>
        <h3>React Course - Project 3</h3>
      </nav>
    </div>
  );
}
