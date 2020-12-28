import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from "../../images/404.jpg";
import "./style.css"
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <img src={PageNotFound}  />
            <h3 style={{textAlign:"center",color:"white"}}>
              <Link to="/"><h3 classname="home">Go to Home</h3> </Link>
            </h3>
          </div>;
    }
}
export default NotFoundPage;