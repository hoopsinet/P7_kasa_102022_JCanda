import "./Footer.css";
import k from "../../../../src/img/k.png";
import home from "../../../../src/img/home.png";
import s from "../../../../src/img/s.png";
import a from "../../../../src/img/a.png";

export default function Footer() {
  return (
    <div className="main_footer">
      <div className="logo_footer">
        <img src={k} alt="lettre k logo" />
        <img src={home} alt="lettre home logo" />
        <img src={s} alt="lettre s logo" />
        <img src={a} alt="lettre a logo" />
      </div>
      <p className="footer_text">© 2020 Kasa. All rights reserverd</p>
    </div>
  );
}
