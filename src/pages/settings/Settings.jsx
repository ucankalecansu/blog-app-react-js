import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Hesabını Güncelle</span>
          <span className="settingsTitleDelete">Hesabını Sil</span>
        </div>
        <form className="settingsForm">
          <label>Profil Resmi</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"/>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Kullanıcı Adı</label>
          <input type="text" placeholder="Cansu Uçankale" name="name" />
          <label>Email Adresi</label>
          <input type="email" placeholder="ucankalecansu@gmail.com" name="email" />
          <label>Şifre</label>
          <input type="password" placeholder="Yeni şifrenizi giriniz." name="password" />
          <button className="settingsSubmitButton" type="submit">
            Güncelle
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
