import UserList from "./UserList/UserList.jsx";
import AgeDisplay from "./AgeDisplay/AgeDisplay.jsx";

import "./CalculatorAge.css";
import axios from "axios";
import { useState } from "react";

const CalculatorAge = () => {
  const [ averageAge, setAverageAge ] = useState(0);

  const getAverageAge = (ids) => {
    axios.get(`${import.meta.env.VITE_BACK_URL_AVERAGE}/?ids=${JSON.stringify(ids)}`)
      .then(response => {
        setAverageAge(new Date().getFullYear() - response.data.average)
      });
  }

  return (
    <div className="General">
      <h1>Average age calculator</h1>
      <div className="Content">
        <div className="UserList"><UserList getAverageAge={getAverageAge} /></div>
        <AgeDisplay averageAge={averageAge} />
      </div>
    </div>
  )
}

export default CalculatorAge;