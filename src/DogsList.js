import { Link } from "react-router-dom";



/**
 * State
 * - dogs list
 *
 */
function DogList({ dogs }) {

  // const [dogs, setDogs] = useState(getInitialList());
  // // when this loads make an ajax call to populate the page
  // async function getInitialList() {
  //   const data = await getDogs();
  //   console.log(data);
  //   setDogs(data);
  //   return data;


  // }
  function setCurrentDog() {

  }


  return (
    <div>
      <h1>Dog List</h1>
      {dogs.map(dog =>
        <div key={dog.name}> <p>{dog.name}</p>
          <Link onClick={setCurrrentDog} to={`/dogs/${dog.name}`} />
          {/* <p>{dog.age}</p> */}
          <img src={`./${dog.name}.jpg`} alt={dog.name} />
          {/* <ul>
            {dog.facts.map((fact, idx) => < li key={idx}>{fact}</li>)}

          </ul> */}

        </div>
      )}

    </div>
  );


}

export default DogList;