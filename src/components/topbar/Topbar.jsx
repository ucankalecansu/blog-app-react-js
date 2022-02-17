import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"/>
        <i className="topIcon fab fa-instagram-square"/>
          <i className="topIcon fab fa-github-square"/>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">Anasayfa</Link>
          </li>
          <li className="topListItem">
              <Link className="link" to="/">Hakkımda</Link>
          </li>
          <li className="topListItem">
              <Link className="link" to="/">İletişim</Link>
          </li>
          <li className="topListItem">
              <Link className="link" to="/write">Yazı Yaz</Link>
          </li>
          {user && <li className="topListItem">
              <Link className="link" to="/">Çıkış Yap</Link>
          </li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Giriş Yap
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Kayıt Ol
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"/>
      </div>
    </div>
  );
}
