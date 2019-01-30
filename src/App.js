import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './Component/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Mi Portafolio</Link>} scroll>
            <Navigation>
                <Link to="/resume">Curriculum</Link>
                <Link to="/sobremi">Sobre mi</Link>
                <Link to="/proyectos">Proyectos</Link>
                <Link to="/contacto">Contactos</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Mi Portafolio</Link>}>
            <Navigation>
              <Link to="/resume">Curriculum</Link>
              <Link to="/sobremi">Sobre mi</Link>
              <Link to="/projectos">Proyectos</Link>
              <Link to="/contacto">Contactos</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;