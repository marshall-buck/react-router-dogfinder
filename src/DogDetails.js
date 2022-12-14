/** DogDetails component
 *
 * props:none
 * state:none
 *
 * App -> RoutesList -> DogDetails
 */

function DogDetails({ dogs, dog }) {
  return (
    <div className="DogDetails">
      <h1>{dog.name}</h1>
      <p>Age: {dog.age}</p>
      <img width="400" src={`/${dog.name}.jpg`} alt={dog.name} />
      <ul>
        {dog.facts?.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
