import React from 'react';
import classes from './Footer.module.css'
import PhoneIcon from '@material-ui/icons/PhoneRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import RoomRoundedIcon from '@material-ui/icons/RoomRounded';
import Tooltip from '@material-ui/core/Tooltip';

const Footer = () => {

    const contatti =
        <div className={classes.FooterItem}>
            <h3>contact us</h3>
            <div className={classes.ContactContainer}>
                <PhoneIcon />
                <Tooltip title="Call us" placement="top-start">
                    <a href="tel:">000-000000</a>
                </Tooltip>
            </div>
            <div className={classes.ContactContainer}>
                <MailOutlineRoundedIcon />
                <Tooltip title="Inviaci una mail" placement="bottom-start">
                <a href="/">
                        mail@gmail.com</a>
                </Tooltip>
            </div>
        </div>

    const location =
        <div className={classes.FooterItem}>
            <h3>where to find us</h3>
            <Tooltip title="Apri le mappe" placement="bottom-start">
                <a
                    href="/"
                    rel="noopener noreferrer" target="_blank" className={classes.MapContainer}>
                    <RoomRoundedIcon />
                    <div>
                        <div>1st Road </div>
                        <div>09124, Cagliari</div>
                    </div>
                </a>
            </Tooltip>
        </div>

    const info =
        <div className={classes.FooterItem}>
            {/* <h3>altre info</h3>
            <div className={classes.ContactContainer}>
                <ScheduleRoundedIcon />
                <NavLink to="/orari">Orari</NavLink>
            </div>
            <div className={classes.ContactContainer}>
                <EuroSymbolIcon />
                <NavLink to="/tariffe">Tariffe</NavLink>
            </div>
            <div className={classes.ContactContainer}>
                <AssignmentRoundedIcon />
                <NavLink to="/preparazioni">Preparazioni</NavLink>
            </div>
            <div className={classes.ContactContainer}>
                <ImportContactsIcon />
                <NavLink to="/articoli">Articoli</NavLink>
            </div>
            <div className={classes.ContactContainer}>
                <PolicyRoundedIcon />
                <a href="/">Privacy policy</a>
            </div>
             */}
        </div>

    return (
        <div className={classes.Footer}>
            <div className={classes.FooterContainer}>
                {contatti}
                {location}
                {info}
            </div>
            <div className={classes.Terms}>
                <div className={classes.TermsItems}>
                    <label>© 2021 Matteo Lecca. All rights reserved.</label>
                </div>
            </div>
        </div>
    );
};

export default Footer;