import React from 'react';
import SideBarItems from './SideBarItems';
import items from './SideBar.json'
const SideBar = () =>{
    return (
        <div className="sidebar"> 
            {items.map((item, index) => <SideBarItems key={index} item={item}/>)}   
        </div>  
    );
}

export default SideBar;
