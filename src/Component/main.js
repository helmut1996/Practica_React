import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landing page';
import SobreMi from './sobremi';
import Contacto from './contacto';
import Proyectos from './proyectos';
import Resume from './currículum';

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/sobremi" component={SobreMi} />
    <Route path="/contacto" component={Contacto} />
    <Route path="/proyectos" component={Proyectos} />
    <Route path="/resume" component={Resume} />
  </Switch>
)

export default Main;