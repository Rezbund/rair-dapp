import React, { useEffect } from 'react';
import './AboutPageNew.css';

// import images
import RairLogo from '../assets/rairLogo_blue.png';
import Metamask from '../assets/metamask_logo.png';

//import utils
import setDocumentTitle from './../../../utils/setTitle';

// import component
import MainBlock from './MainBlock/MainBlock';
import LeftTokenAbout from './LeftTokenAbout/LeftTokenAbout';
import PlatformAbout from './PlatformAbout/PlatformAbout';
import RairOffer from './RairOffer/RairOffer';
import ExclusiveNfts from './ExclusiveNfts/ExclusiveNfts';
import StreamsAbout from './StreamsAbout/StreamsAbout';
import Tokenomics from './Tokenomics/Tokenomics';
import RoadMap from './RoadMapAbout/RoadMapAbout';
import CompareAbout from './CompareAbout/CompareAbout';
import TeamMeet from '../../SplashPage/TeamMeet/TeamMeetList';
import { useLocation, useHistory } from 'react-router-dom';

const AboutPageNew = ({ primaryColor, headerLogoBlack, headerLogoWhite }) => {
    const { pathname } = useLocation();
    const history = useHistory();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        setDocumentTitle(`About Page`)
    }, []);

    return (
        <>
            <div className="wrapper-about-page">
                <div className="about-page-logo">
                    <img onClick={() => history.push('/')}
                        alt='Header Logo'
                        src={primaryColor === "rhyno" ? headerLogoBlack : headerLogoWhite}
                        className='header_logo-about' />
                </div>
                <div className="home-about--page">
                    <MainBlock
                        RairLogo={RairLogo}
                        primaryColor={primaryColor}
                        Metamask={Metamask}
                    />
                    <LeftTokenAbout primaryColor={primaryColor} />
                    <PlatformAbout />
                    <RairOffer primaryColor={primaryColor} />
                    <ExclusiveNfts />
                    <StreamsAbout Metamask={Metamask} primaryColor={primaryColor} />
                    {/* <Tokenomics Metamask={Metamask} /> */}
                    <RoadMap primaryColor={primaryColor} RairLogo={RairLogo} />
                    <CompareAbout />
                    <div className="about-page--team">
                        <TeamMeet primaryColor={primaryColor} arraySplash={"rair"} />
                    </div>
                    <div className="about-page--team">
                        <TeamMeet primaryColor={primaryColor} arraySplash={"rair-advisors"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutPageNew
