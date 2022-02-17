import "./register.css"

export default function Register() {
    return (
        <div className="register">
      <span className="registerTitle">Kayıt Ol</span>
      <form className="registerForm">
        <label>Kullanıcı Adınız</label>
        <input className="registerInput" type="text" placeholder="Kullanıcı adınızı giriniz." />
        <label>Email Adresiniz</label>
        <input className="registerInput" type="text" placeholder="Email adresinizi giriniz." />
        <label>Şifreniz</label>
        <input className="registerInput" type="password" placeholder="Şifrenizi giriniz." />
        <button className="registerButton">Kayıt Ol</button>
      </form>
        <button  className="registerLoginButton">Giriş Yap</button>
    </div>
    )
}
