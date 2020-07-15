import React, { Component } from 'react';
import Header from '../Component/Header';
import Tab from '../Component/Tab';
import Footer from '../Component/Footer';
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header></Header>
                <Tab></Tab>
                <Footer></Footer>
            </div>
         );
    }
}
 
export default Home;