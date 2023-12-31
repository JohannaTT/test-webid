import { useEffect, useState } from "react";
import axios from "axios";

const UserList = ({ getAverageAge }) => {
  const [ checkedInput, setCheckedInput ] = useState([]);
  const [ usersList, setUsersList ] = useState([]);
  
  const handleChange = (id) => {
    if (checkedInput.includes(id)) {
      setCheckedInput(checkedInput.filter((checkedInputId) => {
        return checkedInputId !== id
      }))
    } else {
      setCheckedInput([...checkedInput, id]);
    }
  };
  
  useEffect(() => {
    getAverageAge(checkedInput);
  }, [checkedInput]);
  
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACK_URL_USERS}/users`)
      .then(response => setUsersList(response.data));
  }, []);

  return (
    <div>
      {usersList.map(user => (
        <div key={user.id}>
          <input type="checkbox" id={user.id} name={user.id} checked={checkedInput.includes(user.id)} onChange={() => handleChange(user.id)} />
          <label htmlFor={user.id}>{user.name}</label>
        </div>
      ))}
    </div>
  )
}

export default UserList;