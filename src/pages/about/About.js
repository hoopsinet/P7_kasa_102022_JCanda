import React from "react";
import Banniere from "../../components/banner/Banner";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
import banniere_about from "../../img/aboutImg.png";
import "../about/About.css";
import "../../Common.css";
import Collapsible from "../../components/collaps/Collaps";

export default function About() {
  return (
    <div>
      <div className="main_container">
        <Header />
        <Banniere picture={banniere_about} />
        <div className="aboutContent">
          <Collapsible
            title={"Fiabilité"}
            content={
              "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les infomations sont régulièrement vérifiées par nos équipes."
            }
          />
          <Collapsible
            title={"Respect"}
            content={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
          />
          <Collapsible
            title={"Service"}
            content={
              "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
            }
          />
          <Collapsible
            title={"Securité"}
            content={`"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",`}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
