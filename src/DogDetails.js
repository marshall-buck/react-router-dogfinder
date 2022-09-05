import { Link, useParams } from "react-router-dom";


function DogDetails({ dog }) {

  const { name } = useParams();
  // axios cal to get dog

  return (<h1>DogDetails</h1>);


}

export default DogDetails;