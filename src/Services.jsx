import React from 'react';
import Data from './Data';
import Card from './Card';
import Footer from './Footer';

function Services()
{
    return(
        <>
            <Footer cn='foot1'/>
            <h1 style={{textAlign:"center",marginTop:'25px'}}>Our Services</h1>
            <div className="card_box">
                {Data.map((items)=>{
                    return <Card title={items.title} imgsrc={items.imgsrc}/>
                })}
            </div>
            
        </>

    )
}
export default Services;