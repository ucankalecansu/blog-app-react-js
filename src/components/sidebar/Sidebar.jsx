import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Hakkımda</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Assumenda
          officia architecto deserunt deleniti?
          Labore ipsum aspernatur magnam fugiat, reprehenderit
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Kategoriler</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">Yaşam</Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Müzik
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Spor
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Still
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Teknoloji
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Sinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Bizi Takip Et</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"/>
          <i className="sidebarIcon fab fa-instagram-square"/>
          <i className="sidebarIcon fab fa-github-square"/>
        </div>
      </div>
    </div>
  );
}
