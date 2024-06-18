import axios from 'axios';

//const baseUrl = 'http://localhost:3001/api/persons';
const baseUrl = 'https://f2-4owt.onrender.com/api/persons';
const getAll = () => {
  console.log("perosns getAll");
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = newPerson => {
  const request = axios.post(baseUrl, newPerson);
  return request.then(response => response.data);
};

const update = (id, updatedPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedPerson);
  return request.then(response => response.data);
};

const remove = id => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(response => response.data);
};

//export default { getAll, create, update, remove };
// Määritellään objekti muuttujaan
const personService = { getAll, create, update, remove };

// Viedään muuttuja oletuksena
export default personService;