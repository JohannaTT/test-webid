import Cake from "../../../assets/birthday-cake.svg";

import "./AgeDisplay.css";

const AgeDisplay = ({ averageAge }) => {
  return (
    <div>
      <img src={Cake} alt="Cake image" />
      <h2>Âge moyen des personnes sélectionnées</h2>
      <h3>{averageAge ? averageAge : "-"} ans</h3>
    </div>
  )
}

export default AgeDisplay;