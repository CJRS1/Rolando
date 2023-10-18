import React from 'react';
import '../scss/games.css';
import { Link } from 'react-router-dom';

const Games = () => {
    const btn_1 = require('../images/header_menu.png');
    const icon_menu = require('../images/icon_menu.png');
    const icon_menu2 = require('../images/icon_menu2.png');
    const back = require('../images/back.png');
    const but_options = require('../images/but_options.png');
    const but1 = require('../images/but1.png');
    const icon_options = require('../images/icon_options.png');
    const hony = require('../images/hony.png');
    const user_bee = require('../images/user_bee.png');
    const garden01 = require('../images/garden01.jpg');
    const garden02 = require('../images/garden02.jpg');
    const garden05 = require('../images/garden05.jpg');
    const garden04 = require('../images/garden04.jpg');
    const cardbutton = require('../images/card_button.png');

    return (
        <div className="game_container">
            <header className="header_container">
                <nav className="navbar_container">
                    <div className="principal_buttons_container">
                        <Link>
                            <img className="button_header_p2" src={icon_menu} alt="Back" />
                            <img className="button_header_p1" src={btn_1} alt="Continents" />
                            <h2 className='h2_continents'>CONTINENTS</h2>
                        </Link>
                        <Link>
                            <img className="button_header_p2" src={icon_menu2} alt="Poison" />
                            <img className="button_header_p1" src={btn_1} alt="Inventory" />
                            <h2 className='h2_inventory'>INVENTORY</h2>
                        </Link>
                        <Link>
                            <img className="button_header_p2" src={icon_menu2} alt="Poison" />
                            <img className="button_header_p1" src={btn_1} alt="Market" />
                            <h2 className='h2_market'>MARKET</h2>
                        </Link>
                        <Link>
                            <img className="button_header_p2" src={icon_menu2} alt="Poison" />
                            <img className="button_header_p1" src={btn_1} alt="Exchange" />
                            <h2 className='h2_exchange'>EXCHANGE</h2>
                        </Link>
                    </div>
                    <div className="secondary_buttons_container">
                        <Link>
                            <img className="button_header_p3" src={icon_menu} alt="Back" />
                        </Link>
                        <Link>
                            <img className="button_header_p3" src={icon_menu2} alt="Poison" />
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="main_container">
                <div className="subheader_container">
                    <div className="right_buttons_container">
                        <img className="button_back" src={back} alt="Exchange" />
                        <div className="greenhouse_container">
                            <img className="button_back" src={but1} alt="Exchange" />
                            <h3>GREENHOUSE</h3>
                        </div>
                    </div>
                    <div className="filter_button_container">
                        <img className="button_type" src={but_options} alt="Exchange" />
                        <img className="button_icon" src={icon_options} alt="Exchange" />
                        <h2>TYPE</h2>
                    </div>
                </div>
                <div className="gardens_items_container">
                    <div className="gardens_container">
                        <div className="items_container xd">
                            <div className="gardens_card">
                                <img className="img_garden" src={garden01} alt="" />
                                <h2>GARDEN 01</h2>
                                <div className="enter">
                                    <span className='red'></span>
                                    <img className='img_card_button' src={cardbutton} alt="" />
                                    <h3>ENTER</h3>
                                </div>
                            </div>
                            <div className="gardens_card">
                                <img className="img_garden" src={garden02} alt="" />
                                <h2>GARDEN 02</h2>
                                <div className="enter">
                                    <span className='blue'></span>
                                    <img className='img_card_button' src={cardbutton} alt="" />
                                    <h3>ENTER</h3>
                                </div>
                            </div>
                            <div className="gardens_card">
                                <img className="img_garden" src={garden04} alt="" />
                                <h2>GARDEN 03</h2>
                                <div className="enter">
                                    <span className='green'></span>
                                    <img className='img_card_button' src={cardbutton} alt="" />
                                    <h3>ENTER</h3>
                                </div>
                            </div>
                            <div className="gardens_card">
                                <img className="img_garden" src={garden05} alt="" />
                                <h2>GARDEN 04</h2>
                                <div className="enter">
                                    <span className='red'></span>
                                    <img className='img_card_button' src={cardbutton} alt="" />
                                    <h3>ENTER</h3>
                                </div>
                            </div>
                            <div className="gardens_card">
                                <img className="img_garden" src={garden01} alt="" />
                                <h2>GARDEN 05</h2>
                                <div className="enter">
                                    <span className='yellow'></span>
                                    <img className='img_card_button' src={cardbutton} alt="" />
                                    <h3>ENTER</h3>
                                </div>
                            </div>
                        </div>
                        <div className="items_container">
                            <div className="gardens_card">
                                <img className="img_garden" src={garden02} alt="" />
                                <h2>GARDEN 06</h2>
                                <div className="enter">
                                    <span className='red'></span>
                                    <img className='img_card_button' src={cardbutton} alt="" />
                                    <h3>ENTER</h3>
                                </div>
                            </div>
                            <div className="gardens_card">
                                <img className="img_garden" src={garden04} alt="" />
                                <h2>GARDEN 07</h2>
                                <div className="enter">
                                    <span className='blue'></span>
                                    <img className='img_card_button' src={cardbutton} alt="" />
                                    <h3>ENTER</h3>
                                </div>
                            </div>
                            <div className="gardens_card">
                                <img className="img_garden" src={garden05} alt="" />
                                <h2>GARDEN 08</h2>
                                <div className="enter">
                                    <span className='green'></span>
                                    <img className='img_card_button' src={cardbutton} alt="" />
                                    <h3>ENTER</h3>
                                </div>
                            </div>
                            <div className="gardens_card">
                                <img className="img_garden" src={garden01} alt="" />
                                <h2>GARDEN 09</h2>
                                <div className="enter">
                                    <span className='red'></span>
                                    <img className='img_card_button' src={cardbutton} alt="" />
                                    <h3>ENTER</h3>
                                </div>
                            </div>
                            <div className="gardens_card">
                                <img className="img_garden" src={garden04} alt="" />
                                <h2>GARDEN 10</h2>
                                <div className="enter">
                                    <span className='yellow'></span>
                                    <img className='img_card_button' src={cardbutton} alt="" />
                                    <h3>ENTER</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <div className="bee_container">
                <img className='img_user_bee' src={user_bee} alt="" />
                <div className="user_container">
                    <h3>DrBeepbeep</h3>
                    <div className="honey_container">
                        <img src={hony} alt="" />
                        <h3>999,999</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Games;
