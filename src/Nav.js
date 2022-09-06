import { NavLink, useParams } from "react-router-dom";

function Nav({ dog, removeDog }) {
  return (
    <nav className="Nav">
      <NavLink onClick={removeDog} to="/dogs">All Dogs</NavLink>
      {dog.name && <NavLink to={`/dogs/${dog.name}`}>&gt; {dog.name}</NavLink>}
      {/* {dogNames.map(name => 
      <NavLink key={name} to={`/dogs/${name}`}>
        {name}
      </NavLink>
  
        )} */}
    </nav>
  );
}

export default Nav;
