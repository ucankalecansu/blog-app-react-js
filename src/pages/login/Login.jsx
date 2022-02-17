import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Giriş Yap</span>
      <form className="loginForm">
        <label>Email Adresi</label>
        <input className="loginInput" type="text" placeholder="Lütfen email adresinizi giriniz" />
        <label>Şifre</label>
        <input className="loginInput" type="password" placeholder="Lütfen şifrenizi giriniz" />
        <button className="loginButton">Giriş Yap</button>
      </form>
        <button className="loginRegisterButton">Kayıt Ol</button>
    </div>
  );
}
