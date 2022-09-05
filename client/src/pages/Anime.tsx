import {
  BrowserRouter as Router,
  Link,
  useParams,
} from "react-router-dom";
import useGetAnimePage from "../hooks/useGetAnimePage";


function AnimePage() {
  const { id } = useParams<{id?:string}>();
  const page = useGetAnimePage(id)
    
  return (<div>
    <ul>
      <li><Link to="/anime">Back</Link></li>
    </ul>
    <h1>{page?.name}</h1>
    <img src={`${page?.image}`} alt="" />
  </div>
  );
}

export default AnimePage;