import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landingpage extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/crudreact-b203b.appspot.com/o/mifoto.jpg?alt=media&token=d83487df-2a29-4650-9cbb-45eae0e89ad5"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Helmut Josue Colindres Brenes</h1>

            <hr/>
            <h3>Lenguajes que Domino</h3>
          <p>HTML/CSS | Bootstrap | JavaScript | SQL | PHP | NodeJS | Java</p>

        <div className="social-links">

          {/* Facebook */}
         <a href="/">
         <i class="fab fa-facebook-square"/>
         </a>

          {/* Github */}
          <a href="/">
         
         <i class="fab fa-github"/>
         </a>
          {/* Instagram */}
          <a href="/">
         
          <i class="fab fa-instagram"/>
         </a>
          {/* twitter */}
          <a href="/">
         
          <i class="fab fa-twitter-square"/>
         </a>
        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landingpage;