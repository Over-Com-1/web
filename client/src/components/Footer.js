import React from 'react';
import {Link} from 'react-router-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import styled from 'styled-components';
import * as NBAIcons from 'react-nba-logos';
import { SocialIcon } from 'react-social-icons';



function Footer(){

  const style1 = {
    marginTop: '150px',
    marginLeft: '150px'
  }
  const nba = {
    display:'flex',
  }
  const nbaname = {
    marginLeft:'150px'
  }
 

    return(
        <MDBFooter fluid="true" color="black" className="font-small pt-4 mt-4 ">
        <MDBContainer fluid="true" className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="4">
              <div style={style1}>
              개인정보 처리방침 | 웹사이트 이용약관 | 법적 고지<br/><br/>
                (주)오버컴 | 충청북도 청주시 서원구 성화.개신.죽림동 충대로 1<br/>
                사업자번호 987-65-43210 | 대표 박지우 문환룡<br/>
           
            </div>
            </MDBCol>
            <MDBCol md="4">
            <h5 className="title" style={nbaname}>Teams</h5>
            <div style={nba}>
            <ul >
                <li className="list-unstyled">
                <NBAIcons.TOR size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.ATL size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.BKN size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.BOS size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.CHA size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.CHI size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.CLE size={30}/>
                </li>
            </ul>
            <ul >
                <li className="list-unstyled">
                <NBAIcons.DAL size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.DEN size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.DET size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.GSW size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.HOU size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.IND size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.LAC size={30}/>
                </li>
            </ul>
            <ul >
                <li className="list-unstyled">
                <NBAIcons.LAL size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.MEM size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.MIA size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.MIL size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.MIN size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.NOP size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.NYK size={30}/>
                </li>
              </ul>
                <ul >
                <li className="list-unstyled">
                <NBAIcons.OKC size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.ORL size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.PHI size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.PHX size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.POR size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.NOP size={30}/>
                </li>
                <li className="list-unstyled">
                <NBAIcons.WAS size={30}/>
                </li>
            </ul>
            </div>
            </MDBCol>
            <MDBCol md="2">
              
              <Link to="/Reservation">
              <h5 className="title">Services</h5>
              </Link>
              <div style={nba}>
              <ul>
                <li className="list-unstyled">
                  <a href="#!">서울</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">경기</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">인천</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">청주</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">대전</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">부산</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">울산</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">광주</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">대구</a>
                </li>
              </ul>
              </div>
            </MDBCol>
            <MDBCol md="2">
              
              <Link to="/Reservation">
              <h5 className="title">Social</h5>
              </Link>
              <div style={nba}>
              <ul>
                <li className="list-unstyled">
                  <SocialIcon url="https://www.instagram.com/" style={{ height: 25, width: 25, marginTop:10}} />
                </li>
                <li className="list-unstyled">
                <SocialIcon url="https://www.youtube.com" style={{ height: 25, width: 25, marginTop:10}}/>
                </li>
                <li className="list-unstyled">
                <SocialIcon url="https://www.facebook.com/" style={{ height: 25, width: 25, marginTop:10 }}/>
                                </li>
                <li className="list-unstyled">
                <SocialIcon url="https://www.twitch.com/" style={{ height: 25, width: 25, marginTop:10 }}/>
                </li>
                <li className="list-unstyled">
                <SocialIcon url="https://www.twitter.com/" style={{ height: 25, width: 25, marginTop:10 }}/>
                </li>
              </ul>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid="true">
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> OverCom.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    )
}
export default Footer;