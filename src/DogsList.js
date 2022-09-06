/** DogDetails component
 * 
 * props:none
 * state:none
 * 
 * App -> RoutesList -> DogDetails
 */

import { Link } from "react-router-dom";


function DogList({ dogs, updateDog }) {


console.log(dogs)
  return (
    <div>
      <h1>Dog List</h1>
      {dogs.map(function (dog)  {
        console.log("dogMap",dog.age)
        return (
        <div key={dog.name}>
          <Link onClick={() => {updateDog(dog.name)}} to={`/dogs/${dog.name}`}>
            <p>{dog.name} age</p>
          </Link>
          <img width="200" src={`/${dog.name}.jpg`} alt={dog.name} />
        </div>
      )})}
    </div>
  );
}

export default DogList;


//QUESTION: what's wrong with this? , age {dog.age}