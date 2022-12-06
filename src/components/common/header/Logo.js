import k_pink from "../../../img/k_pink.png";
import home_pink from "../../../img/home_pink.png";
import s_pink from "../../../img/s_pink.png";
import a_pink from "../../../img/a_pink.png";
import './Logo.css';

export default function Logo_kasa() {
  return (
    <div className="logo">
      <img src={k_pink} alt="lettre k logo" />
      <img src={home_pink} alt="lettre home logo" className="letter"/>
      <img src={s_pink} alt="lettre s logo" className="letter"/>
      <img src={a_pink} alt="lettre a logo" className="letter"/>
    </div>
  );
}