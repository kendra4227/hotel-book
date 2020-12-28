import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa';

class Services extends Component {
    state= {
        services:[
            {
               icon:<FaCocktail/>,
            title: "Free Cocktails",
            info:'Commodo nulla sit consectetur ad nisi nostrud.'
            },
            {
                icon:<FaHiking/>,
             title: "Endless Hiking",
             info:'Adipisicing exercitation sint culpa incididunt fugiat consequat excepteur deserunt.'
            },
            {
                icon:<FaShuttleVan/>,
             title: "Free shuttle",
             info:'In exercitation ipsum excepteur Lorem esse laborum nisi fugiat adipisicing excepteur quis duis.'
            },
            {
                icon:<FaBeer/>,
             title: "Strongest Beer",
             info:'Duis dolore tempor in ipsum eiusmod duis mollit reprehenderit mollit irure incididunt officia.'
            }


        ]
    }
    render() {
        return (
            <section className="services">
               <Title title="services"/>
               <div className="services-center">
                {this.state.services.map((item,index) => {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                })}
               </div>
            </section>
        );
    }
}

export default Services;