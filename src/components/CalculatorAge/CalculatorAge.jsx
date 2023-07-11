import UserList from "./UserList/UserList.jsx";
import AgeDisplay from "./AgeDisplay/AgeDisplay.jsx";

import "./CalculatorAge.css";
import axios from "axios";
import { useState } from "react";

const CalculatorAge = () => {
  const [ averageAge, setAverageAge ] = useState(0);

  const getAverageAge = (ids) => {
    if (ids.length !== 0) {
      axios.get(`${import.meta.env.VITE_BACK_URL_AVERAGE}/?ids=${JSON.stringify(ids)}`)
        .then(response => setAverageAge(Math.round(new Date().getFullYear() - response.data.average)))
        .catch((response) => console.log(response?.response.data?.error))
    } else {
      setAverageAge(0);
    }
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