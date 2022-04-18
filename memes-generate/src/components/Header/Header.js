import "./Header.css";
import TrollFace from "../../images/Troll-Face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={TrollFace} alt="logo" className="header--logo" />
      <h2 className="header--title">Meme Generator</h2>
    </header>
  );
}
