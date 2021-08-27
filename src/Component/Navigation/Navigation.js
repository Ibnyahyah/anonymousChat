import React from 'react';
import { NavigationItems } from './NavigationItems';
import Header from './Header';
import { Link } from 'react-router-dom';

class Navs extends React.Component{
    render(){
        return(
            <div className="sideBar">
               <nav>
                    <div className="profile">
                        <div className="image-box">
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <Header/>
                    
                        {/* <label className="menu-icon" for="menu-btn">
                        <span  className="nav-icon"></span>
                        </label> */}
                            <ul  className="nav-item">
                        {NavigationItems.map((item)=>{
                            return(
                                <li className={item.Cname} key={item.title}>
                                    <Link to={item.url} className="anchor">{item.title}</Link>
                                </li>
                            )
                        })}
                            </ul>
                    </nav>
            </div>
        )
    }
}
export default Navs;