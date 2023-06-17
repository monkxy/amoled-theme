// ==UserScript==
// @name         Blacket Amoled
// @version      1.0.0
// @description  Amoled theme for Blacket!
// @icon         https://blacket.org/content/logo.png

// @author       monkxy#0001
// @namespace    http://monkxy.com

// @match        https://*.blacket.org/*

// @require      https://blacket.org/lib/js/jquery.js
// ==/UserScript==

(async () => {
    setTimeout(() => {
        console.log("%c[monkxy's black scripts] theme loaded successfully!", "color: #fff; padding: 10px; border-radius: 5px; font-size: 20px; font-weight: bold; text-shadow: 0px 0px 10px #fff;");
    }, 1000);

    let $ = jQuery;

    let css = `
        .styles__background___2J-JA-camelCase {
            background-color: #000 !important;
        }
        
        .styles__bazaarItem___Meg69-camelCase {
            background-color: #111111 !important;
            transition: 0.2s ease-in-out;
        }
        
        .styles__bazaarItem___Meg69-camelCase:hover {
            background-color: #222222 !important;
            transform: scale(1.05);
        }
        
        .styles__bazaarItems___KmNa2-camelCase {
            background-color: #000 !important;
        }

        .styles__blooketText___1pMBG-camelCase {
            filter: drop-shadow(0px 0px 10px #fff);
        }
        
        .styles__button___2hNZo-camelCase,
        .styles__buttonFilled___23Dcn-camelCase {
            background-color: #000 !important;
        }
        
        .styles__cardContainer___NGmjp-camelCase {
            background-color: #000 !important;
        }
        
        .styles__chatCurrentRoom___MCaV4-camelCase {
            background-color: #000 !important;
        }
        
        .styles__chatEmojiButton___8RFa2-camelCase {
            background-color: #000 !important;
            transition: 0.2s ease-in-out;
        }
        
        .styles__chatEmojiButton___8RFa2-camelCase:hover {
            background-color: #111111 !important;
        }
        
        .styles__chatInputContainer___gkR4A-camelCase {
            background-color: #000 !important;
        }
        
        .styles__chatRoomsListContainer___Gk4Av-camelCase {
            background-color: #000 !important;
        }
        
        .styles__chatRoomsTitle___fR4Av-camelCase {
            background-color: #000 !important;
        }
        
        .styles__chatRooms___o5ASb-camelCase {
            background-color: #000 !important;
        }
        
        .styles__chatUploadButton___g39Ac-camelCase {
            background-color: #000 !important;
            transition: 0.2s ease-in-out;
        }
        
        .styles__chatUploadButton___g39Ac-camelCase:hover {
            background-color: #111111 !important;
        }
        
        .styles__container___1BPm9-camelCase {
            background-color: #000 !important;
            filter: drop-shadow(0px 0px 10px #fff);
        }
        
        .styles__container___2VzTy-camelCase {
            background-color: #000 !important;
            filter: drop-shadow(0px 0px 10px #fff);
        }
        
        .styles__container___3St5B-camelCase {
            background-color: #000 !important;
        }
        
        .styles__containerHeader___3xghM-camelCase {
            background-color: #000 !important;
        }
        
        .styles__containerHeaderInside___2omQm-camelCase {
            background-color: #000 !important;
        }
        
        .styles__containerHeaderRight___3xghM-camelCase,
        .styles__containerHeaderRightFriends___3xghM-camelCase {
            background-color: #000 !important;
        }
        
        .styles__editHeaderContainer___2G1ji-camelCase {
            background-color: #000 !important;
        }
        
        .styles__edge___3eWfq-camelCase {
            background-color: #fff !important;
        }

        .styles__formsForm___MvA35-camelCase {
            background-color: #000 !important;
        }
        
        .styles__front___vcvuy-camelCase,
        .styles__buttonInside___39vdp-camelCase {
            background-color: #fff !important;
            color: #000 !important;
        }
        
        .styles__header___22Ne2-camelCase {
            background-color: #000 !important;
            filter: drop-shadow(0px 0px 10px #fff);
        }
        
        .styles__header___2O21B-camelCase {
            background-color: #000 !important;
        }
        
        .styles__headerBadgeBg___12ogR-camelCase {
            background-color: #000 !important;
        }
        
        .styles__headerImage___3p3rE-camelCase {
            filter: drop-shadow(0px 0px 10px #fff);
        }
        
        .styles__headerSide___1r1-b-camelCase {
            background-color: #000 !important;
            filter: drop-shadow(0px 0px 10px #fff);
        }
        
        .styles__infoContainer___2uI-S-camelCase {
            background-color: #000 !important;
        }
        
        .styles__input___2XTSp-camelCase {
            background-color: #000 !important;
        }
        
        .styles__left___9beun-camelCase {
            background-color: #000 !important;
        }
        
        .styles__loginButton___1e3jI-camelCase {
            background-color: #fff !important;
            color: #000 !important;
            filter: drop-shadow(0px 0px 10px #000);
        }

        .styles__plusButton___2dH73-camelCase {
            filter: drop-shadow(0px 0px 10px #2d41fd);
        }
        
        .styles__postsContainer___39_IQ-camelCase {
            background-color: #111111 !important;
        }
        
        .styles__profileContainer___CSuIE-camelCase {
            background-color: #000 !important;
        }
        
        .styles__profileDropdownMenu___2jUAA-camelCase {
            background-color: #000 !important;
        }
        
        .styles__profileDropdownOption___ljZXD-camelCase {
            background-color: #000 !important;
        }
        
        .styles__profileDropdownOption___ljZXD-camelCase:hover {
            background-color: #111111 !important;
        }
        
        .styles__rightButtonInside___14imT-camelCase {
            color: #000 !important;
        }
        
        .styles__sidebar___1XqWi-camelCase {
            background-color: #000 !important;
            filter: drop-shadow(0px 0px 10px #fff);
        }
        
        .styles__signUpButton___3_ch3-camelCase {
            background-color: #000 !important;
            color: #fff !important;
            filter: drop-shadow(0px 0px 10px #fff);
        }

        .styles__smallButton___sQuq8-camelCase {
            filter: drop-shadow(0px 0px 10px #fff);
        }
        
        .styles__statContainer___QKuOF-camelCase {
            background-color: #111111 !important;
        }
        
        .styles__statsContainer___QnrRB-camelCase {
            background-color: #000 !important;
        }
        
        #searchInput {
            background-color: #111111 !important;
        }
        
        textarea {
            background-color: #000 !important;
        }

        input {
            background-color: #000 !important;
        }
        
        hr {
            background-color: #fff !important;
        }    
    `;

    $('head').append(`<style>${css}</style>`);
})();
