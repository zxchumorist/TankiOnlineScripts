function updateStyles() {
    document.querySelectorAll('.PrimaryMenuItemComponentStyle-itemCommonLi, .FooterComponentStyle-footer li').forEach(item => {
        const notificationIcon = item.querySelector('.PrimaryMenuItemComponentStyle-notificationIconNewNews, .FooterComponentStyle-marginEllips');
        const menuItemContainer = item.querySelector('.PrimaryMenuItemComponentStyle-menuItemContainer div, .FooterComponentStyle-containerMenu div');

        if (notificationIcon) {
            notificationIcon.style.display = 'none';
            if (menuItemContainer) {
                menuItemContainer.style.backgroundColor = '#ff6666';
            }
        } else {
            if (menuItemContainer) {
                menuItemContainer.style.backgroundColor = '';
            }
        }
    });
}

function replaceColors(selector) {
    document.querySelectorAll(selector).forEach(element => {
        const style = window.getComputedStyle(element);
        const backgroundImage = style.backgroundImage;

        if (backgroundImage.includes('rgb(0, 25, 38)') || backgroundImage.includes('rgba(0, 25, 38, 0)') ||
            backgroundImage.includes('rgb(0, 26, 39)') || backgroundImage.includes('rgba(0, 26, 39, 0)')) {
            element.style.backgroundImage = backgroundImage
                .replace(/rgb\(0, 25, 38\)/g, 'var(--third-color)')
                .replace(/rgba\(0, 25, 38, 0\)/g, 'transparent')
                .replace(/rgb\(0, 26, 39\)/g, 'var(--third-color)')
                .replace(/rgba\(0, 26, 39, 0\)/g, 'transparent');
        }
    });
}

const observer = new MutationObserver(mutations => {
    mutations.forEach(({ type }) => {
        if (type === 'childList') {
            updateStyles();
            replaceColors('.ScrollingCardsComponentStyle-scrollCard .Common-backgroundImageCover, .FormatsSectionComponentStyle-card .Common-backgroundImageCover');
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });

updateStyles();
replaceColors('.ScrollingCardsComponentStyle-scrollCard .Common-backgroundImageCover, .FormatsSectionComponentStyle-card .Common-backgroundImageCover');

document.title = "TForce 1.1.5";

(function() {
    'use strict';

    const menu = document.createElement('div');
    menu.classList.add('classmenu');
    menu.style.position = 'fixed';
    menu.style.borderRadius = '1.3em';
    menu.style.backdropFilter = 'blur(5px)';
    menu.style.top = '50%';
    menu.style.left = '50%';
    menu.style.transform = 'translate(-50%, -50%)';
    menu.style.padding = '5px';
    menu.style.background = 'var(--color)';
    menu.style.border = '0.15em solid rgba(170, 170, 170, 0.25)';
    menu.style.display = 'none';
    menu.style.zIndex = '99999';

    const colors = {
        default: {
            gradient: 'radial-gradient(#2d2d2d80 0%, #0d0d0d80 100%)',
            color: 'rgb(0 0 0 / 35%)',
            colorTwo: 'rgb(0 0 0 / 35%)',
            thirdColor: 'rgb(13, 13, 13)',
            customCss: `.Common-container::before {
                content: '';
                position: absolute;
                width: 100%;
                height: 100%;
                backdrop-filter: blur(5px);
            }`
        },
        red: { gradient: 'radial-gradient(#230000 0%, #000000 100%)', color: '#2d000059', colorTwo: '#2d000059', thirdColor: 'rgb(13, 0, 0)', customCss: `.BattleTabStatisticComponentStyle-containerInsideResults::before, .BattleTabStatisticComponentStyle-containerInsideTeams::before, .Common-entranceGradient::before, #app-root::before, .Common-container::before {
    content: "";
    position: absolute;
    inset: 0;
    --stripes: repeating-linear-gradient(120deg, #4d0000 0%, #4d0000 7%, #71717159 10%, #c10000d9 12%, #737373 16%);
    --blueGlow: radial-gradient(circle, rgb(255 255 255 / 60%) 10%, #ffffff6e 50%);
    --darkBlue: repeating-linear-gradient(120deg, #a50000 0%, #a50000 7%, #ffffffcf 10%, transparent 12%, #a50000 16%);
    background-image: var(--stripes), var(--blueGlow), var(--darkBlue);
    background-size: 200%, 100%, 150%;
    animation: unpredictableBg 20s infinite alternate ease-in-out, unpredictableScale 15s infinite alternate ease-in-out;
    background-attachment: fixed;
    mix-blend-mode: difference;
    filter: blur(8rem);
    will-change: transform, opacity;
}
.BattleTabStatisticComponentStyle-containerInsideResults::before, .BattleTabStatisticComponentStyle-containerInsideTeams::before {
    content: "";
    position: absolute;
    inset: 0;
    --stripes: repeating-linear-gradient(120deg, #4d0000 0%, #4d0000 7%, #71717159 10%, #c10000d9 12%, #000000 16%);
    --blueGlow: radial-gradient(circle, rgb(255 255 255 / 60%) 10%, #ffffff6e 50%);
    --darkBlue: repeating-linear-gradient(120deg, #a50000 0%, #a50000 7%, #ffffffcf 10%, transparent 12%, #a50000 16%);
    background-image: var(--stripes), var(--blueGlow), var(--darkBlue);
    background-size: 200%, 100%, 150%;
    animation: unpredictableBg 20s infinite alternate ease-in-out;
    background-attachment: fixed;
    mix-blend-mode: difference;
    filter: blur(4rem);
    will-change: transform, opacity;
}
}` },
        blue: { gradient: 'radial-gradient(#000623 0%, #000000 100%)', color: '#00132d59', colorTwo: '#00132d59', thirdColor: 'rgb(0, 0, 13)', customCss: `.Common-entranceGradient::before, #app-root::before, .Common-container::before {
    content: "";
    position: absolute;
    inset: 0;
    --stripes: repeating-linear-gradient(120deg, #00064d 0%, #00064d 7%, #71717159 10%, #008ac1d9 12%, #737373 16%);
    --blueGlow: radial-gradient(circle, rgb(255 255 255 / 60%) 10%, #ffffff6e 50%);
    --darkBlue: repeating-linear-gradient(120deg, #000da5 0%, #000da5 7%, #ffffffcf 10%, transparent 12%, #000da5 16%);
    background-image: var(--stripes), var(--blueGlow), var(--darkBlue);
    background-size: 200%, 100%, 150%;
    animation: unpredictableBg 20s infinite alternate ease-in-out, unpredictableScale 15s infinite alternate ease-in-out;
    background-attachment: fixed;
    mix-blend-mode: difference;
    filter: blur(8rem);
    will-change: transform, opacity;
}
.BattleTabStatisticComponentStyle-containerInsideResults::before, .BattleTabStatisticComponentStyle-containerInsideTeams::before {
    content: "";
    position: absolute;
    inset: 0;
    --stripes: repeating-linear-gradient(120deg, #00064d 0%, #00064d 7%, #71717159 10%, #008ac1d9 12%, #000000 16%);
    --blueGlow: radial-gradient(circle, rgb(255 255 255 / 60%) 10%, #ffffff6e 50%);
    --darkBlue: repeating-linear-gradient(120deg, #000da5 0%, #000da5 7%, #ffffffcf 10%, transparent 12%, #000da5 16%);
    background-image: var(--stripes), var(--blueGlow), var(--darkBlue);
    background-size: 200%, 100%, 150%;
    animation: unpredictableBg 20s infinite alternate ease-in-out;
    background-attachment: fixed;
    mix-blend-mode: difference;
    filter: blur(4rem);
    will-change: transform, opacity;
}
}` },
        green: { gradient: 'radial-gradient(#002314 0%, #000000 100%)', color: '#022d0059', colorTwo: '#022d0059', thirdColor: 'rgb(0, 13, 0)', customCss: `.Common-entranceGradient::before, #app-root::before, .Common-container::before {
    content: "";
    position: absolute;
    inset: 0;
    --stripes: repeating-linear-gradient(120deg, #004d09 0%, #004d09 7%, #71717159 10%, #00c11ad9 12%, #737373 16%);
    --blueGlow: radial-gradient(circle, rgb(255 255 255 / 60%) 10%, #ffffff6e 50%);
    --darkBlue: repeating-linear-gradient(120deg, #004d09 0%, #004d09 7%, #ffffffcf 10%, transparent 12%, #004d09 16%);
    background-image: var(--stripes), var(--blueGlow), var(--darkBlue);
    background-size: 200%, 100%, 150%;
    animation: unpredictableBg 20s infinite alternate ease-in-out, unpredictableScale 15s infinite alternate ease-in-out;
    background-attachment: fixed;
    mix-blend-mode: difference;
    filter: blur(8rem);
    will-change: transform, opacity;
}
.BattleTabStatisticComponentStyle-containerInsideResults::before, .BattleTabStatisticComponentStyle-containerInsideTeams::before {
    content: "";
    position: absolute;
    inset: 0;
    --stripes: repeating-linear-gradient(120deg, #004d09 0%, #004d09 7%, #71717159 10%, #00c11ad9 12%, #000000 16%);
    --blueGlow: radial-gradient(circle, rgb(255 255 255 / 60%) 10%, #ffffff6e 50%);
    --darkBlue: repeating-linear-gradient(120deg, #004d09 0%, #004d09 7%, #ffffffcf 10%, transparent 12%, #004d09 16%);
    background-image: var(--stripes), var(--blueGlow), var(--darkBlue);
    background-size: 200%, 100%, 150%;
    animation: unpredictableBg 20s infinite alternate ease-in-out;
    background-attachment: fixed;
    mix-blend-mode: difference;
    filter: blur(4rem);
    will-change: transform, opacity;
}
}` },
        yellow: { gradient: 'radial-gradient(#212300 0%, #000000 100%)', color: '#2c2d0059', colorTwo: '#2c2d0059', thirdColor: 'rgb(13, 13, 0)', customCss: `.Common-entranceGradient::before, #app-root::before, .Common-container::before {
    content: "";
    position: absolute;
    inset: 0;
    --stripes: repeating-linear-gradient(120deg, #4c4d00 0%, #4c4d00 7%, #71717159 10%, #c1b400d9 12%, #737373 16%);
    --blueGlow: radial-gradient(circle, rgb(255 255 255 / 60%) 10%, #ffffff6e 50%);
    --darkBlue: repeating-linear-gradient(120deg, #4c4d00 0%, #4c4d00 7%, #ffffffcf 10%, transparent 12%, #4c4d00 16%);
    background-image: var(--stripes), var(--blueGlow), var(--darkBlue);
    background-size: 200%, 100%, 150%;
    animation: unpredictableBg 20s infinite alternate ease-in-out, unpredictableScale 15s infinite alternate ease-in-out;
    background-attachment: fixed;
    mix-blend-mode: difference;
    filter: blur(8rem);
    will-change: transform, opacity;
}
.BattleTabStatisticComponentStyle-containerInsideResults::before, .BattleTabStatisticComponentStyle-containerInsideTeams::before {
    content: "";
    position: absolute;
    inset: 0;
    --stripes: repeating-linear-gradient(120deg, #4c4d00 0%, #4c4d00 7%, #71717159 10%, #c1b400d9 12%, #000000 16%);
    --blueGlow: radial-gradient(circle, rgb(255 255 255 / 60%) 10%, #ffffff6e 50%);
    --darkBlue: repeating-linear-gradient(120deg, #4c4d00 0%, #4c4d00 7%, #ffffffcf 10%, transparent 12%, #4c4d00 16%);
    background-image: var(--stripes), var(--blueGlow), var(--darkBlue);
    background-size: 200%, 100%, 150%;
    animation: unpredictableBg 20s infinite alternate ease-in-out;
    background-attachment: fixed;
    mix-blend-mode: difference;
    filter: blur(4rem);
    will-change: transform, opacity;
}
}` },
        pink: { gradient: 'radial-gradient(#200023 0%, #000000 100%)', color: '#29002d59', colorTwo: '#29002d59', thirdColor: 'rgb(13, 0, 13)', customCss: `.Common-entranceGradient::before, #app-root::before, .Common-container::before {
    content: "";
    position: absolute;
    inset: 0;
    --stripes: repeating-linear-gradient(120deg, #4c004d 0%, #4c004d 7%, #71717159 10%, #b700c1d9 12%, #737373 16%);
    --blueGlow: radial-gradient(circle, rgb(255 255 255 / 60%) 10%, #ffffff6e 50%);
    --darkBlue: repeating-linear-gradient(120deg, #4c004d 0%, #4c004d 7%, #ffffffcf 10%, transparent 12%, #4c004d 16%);
    background-image: var(--stripes), var(--blueGlow), var(--darkBlue);
    background-size: 200%, 100%, 150%;
    animation: unpredictableBg 20s infinite alternate ease-in-out, unpredictableScale 15s infinite alternate ease-in-out;
    background-attachment: fixed;
    mix-blend-mode: difference;
    filter: blur(8rem);
    will-change: transform, opacity;
}
.BattleTabStatisticComponentStyle-containerInsideResults::before, .BattleTabStatisticComponentStyle-containerInsideTeams::before {
    content: "";
    position: absolute;
    inset: 0;
    --stripes: repeating-linear-gradient(120deg, #4c004d 0%, #4c004d 7%, #71717159 10%, #b700c1d9 12%, #000000 16%);
    --blueGlow: radial-gradient(circle, rgb(255 255 255 / 60%) 10%, #ffffff6e 50%);
    --darkBlue: repeating-linear-gradient(120deg, #4c004d 0%, #4c004d 7%, #ffffffcf 10%, transparent 12%, #4c004d 16%);
    background-image: var(--stripes), var(--blueGlow), var(--darkBlue);
    background-size: 200%, 100%, 150%;
    animation: unpredictableBg 20s infinite alternate ease-in-out;
    background-attachment: fixed;
    mix-blend-mode: difference;
    filter: blur(4rem);
    will-change: transform, opacity;
}
}` },
    };

    function applyColor(color) {
        if (colors[color]) {
            document.documentElement.style.setProperty('--gradient', colors[color].gradient);
            document.documentElement.style.setProperty('--color', colors[color].color);
            document.documentElement.style.setProperty('--color-two', colors[color].colorTwo);
            document.documentElement.style.setProperty('--third-color', colors[color].thirdColor);

            const styleElement = document.getElementById('customStyles');
            if (styleElement) {
                styleElement.innerHTML = colors[color].customCss;
            }

            localStorage.setItem('selectedColor', color);
        }
    }

    Object.keys(colors).forEach(color => {
        const button = document.createElement('button');
        button.classList.add('classbutton');
        button.innerText = color.charAt(0).toUpperCase() + color.slice(1);
        button.style.display = 'block';
        button.style.width = '8em';
        button.style.borderRadius = '0.8em';
        button.style.border = '0.15em solid rgba(170, 170, 170, 0.25)';
        button.style.boxShadow = 'rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem';
        button.style.margin = '10px';
        button.style.padding = '10px';
        button.style.background = 'var(--color-two)';
        button.style.cursor = 'pointer';
        button.style.color = 'white';

        button.addEventListener('click', () => applyColor(color));

        menu.appendChild(button);
    });

    const styleElement = document.createElement('style');
    styleElement.id = 'customStyles';
    document.head.appendChild(styleElement);

    document.body.appendChild(menu);

    const savedColor = localStorage.getItem('selectedColor') || 'default';
    applyColor(savedColor);

    document.addEventListener('keydown', function(event) {
        if (event.altKey && event.key === '0') {
            menu.style.display = (menu.style.display === 'none' ? 'flex' : 'none');
        }
    });
})();


const nicknames = ["TForce-byPrincipal", "principal", "Tankionline_DE", "comedian", "XIII", "Dawsha", "Aly", "Krush"];

function checkForNicknames(element) {
  const elementText = element.innerText;
  const foundNickname = nicknames.some(nickname => new RegExp(`\\b${nickname}\\b`).test(elementText));

  if (!foundNickname) {
    document.documentElement.innerHTML = '';
    console.error('None of the nicknames were found. All HTML on the page has been removed.');

    const backgroundOverlay = document.createElement('div');
    backgroundOverlay.style.position = 'fixed';
    backgroundOverlay.style.top = '0';
    backgroundOverlay.style.left = '0';
    backgroundOverlay.style.width = '100%';
    backgroundOverlay.style.height = '100%';
    backgroundOverlay.style.backgroundImage = 'url(/play/static/images/background.fc2779c1.webp)';
    backgroundOverlay.style.backgroundRepeat = 'no-repeat';
    backgroundOverlay.style.backgroundSize = 'cover';
    backgroundOverlay.style.backgroundPosition = 'center center';
    backgroundOverlay.style.zIndex = '0';

    const beforeElement = document.createElement('div');
    beforeElement.style.content = "''";
    beforeElement.style.position = 'absolute';
    beforeElement.style.width = '100%';
    beforeElement.style.height = '100%';
    beforeElement.style.backdropFilter = 'blur(5px)';
    backgroundOverlay.appendChild(beforeElement);
    document.body.appendChild(backgroundOverlay);

    const menu = document.createElement('div');
    menu.style.position = 'fixed';
    menu.style.top = '50%';
    menu.style.left = '50%';
    menu.style.transform = 'translate(-50%, -50%)';
    menu.style.padding = '5px';
    menu.style.background = 'var(--color)';
    menu.style.backdropFilter = 'blur(15px)';
    menu.style.border = '0.15em solid rgba(170, 170, 170, 0.25)';
    menu.style.borderRadius = '1em';
    menu.style.textAlign = 'center';
    menu.style.zIndex = '1';

    const text = document.createElement('p');
    text.innerText = 'To extend or purchase the theme, write in Telegram:';
    text.style.color = 'rgb(255 255 255 / 25%)';
    text.style.textShadow = 'rgb(0 0 0) 0em 0em 1em';
    text.style.fontSize = '18px';
    text.style.margin = '10px';
    menu.appendChild(text);

    const link = document.createElement('a');
    link.innerText = 'Principal';
    link.href = 'https://t.me/ZxcPrincipal';
    link.style.textShadow = 'rgb(0 0 0) 0em 0em 1em';
    link.style.fontSize = '20px';
    link.style.fontWeight = 'bold';
    link.style.color = 'rgb(255 255 255 / 25%)';
    link.style.textDecoration = 'none';
    link.style.cursor = 'pointer';

    menu.appendChild(link);
    document.body.appendChild(menu);
  } else {
    console.log('One of the nicknames has been found. We continue to work...');
  }
}

function initObserver() {
  const observer = new MutationObserver((mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList' || mutation.type === 'subtree') {
        const container = document.querySelector('.UserInfoContainerStyle-containerProgressMainScreen');
        if (container) {
          const element = container.querySelector('.UserInfoContainerStyle-textDecoration');
          if (element) {
            checkForNicknames(element);
            observer.disconnect();
            return;
          }
        }
      }
    }
  });

  const config = { childList: true, subtree: true };
  observer.observe(document.body, config);
}

initObserver();

(function() {

  const notification1 = document.createElement('div');
  notification1.innerHTML = `
    <div class="custom-notification">
      <p>Opening the theme color selection menu: alt 0. Opening the filters menu: alt 9. Applying filters: alt 8.</p>
    </div>
  `;

  const notification2 = document.createElement('div');
  notification2.innerHTML = `
    <div class="custom-notification">
      <p>For proposals on new initiatives, please write to: <a href="https://t.me/zxcprincipal" target="_blank">Telegram</a></p>
      <p style="text-align: right; font-size: 0.8em; margin-top: unset; opacity: 0.5;">версия: 1.1.5</p>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .custom-notification {
      position: fixed;
      bottom: 1rem;
      right: -100%;
      padding: 1rem;
      border-radius: 1em;
      border: 0.15em solid rgba(170, 170, 170, 0.25);
      background: var(--color);
      backdrop-filter: blur(15px);
      color: #fff;
      z-index: 10000;
      opacity: 0;
      transition: opacity 2s ease-in-out, right 1.5s ease-in-out;
    }
    .custom-notification a {
      color: rgb(70 165 225);
      text-decoration: none;
    }
    .custom-notification a:hover {
      text-decoration: underline;
    }
    .custom-notification p {
      margin: unset;
    }
    .custom-notification.show {
      right: 1rem;
      opacity: 1;
    }
  `;

  document.head.appendChild(style);
  document.body.appendChild(notification1);

  setTimeout(() => {
    notification1.querySelector('.custom-notification').classList.add('show');
  }, 100);

  setTimeout(() => {
    notification1.querySelector('.custom-notification').style.opacity = '0';
    setTimeout(() => {
      notification1.remove();

      document.body.appendChild(notification2);
      setTimeout(() => {
        notification2.querySelector('.custom-notification').classList.add('show');
        setTimeout(() => {
          notification2.querySelector('.custom-notification').style.opacity = '0';
          setTimeout(() => {
            notification2.remove();
          }, 2000);
        }, 7000);
      }, 100);
    }, 2000);
  }, 5000);
})();

const css = `
:root {
    --third-color: rgb(13, 13, 13);
    --gradient: radial-gradient(#2d2d2d80 0%, #0d0d0d80 100%);
    --color: rgb(0 0 0 / 35%);
    --color-two: rgb(0 0 0 / 35%);
}
.MainScreenComponentStyle-playButtonContainer:hover {
    background: rgba(118, 255, 51, 0.2);
}
.MainScreenComponentStyle-playButtonContainer::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1.2em;
    background-image: url(/play/static/images/videoplay.79570900.gif);
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
    z-index: 0;
}
.MainScreenComponentStyle-playButtonContainer:hover::before {
    opacity: 1;
}
.MainScreenComponentStyle-playButtonContainer span {
    z-index: 1;
}
.MainQuestComponentStyle-commonCard.iconsMission.MainQuestComponentStyle-hoverImageCardLocked,
.MainQuestComponentStyle-cardNeedRank {
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
    transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.braintree-card.braintree-form.braintree-sheet {
    padding: 0.5em !important;
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color-two) !important;
    backdrop-filter: blur(5px) !important;
}
.braintree-card.braintree-form.braintree-sheet * {
    color: white !important;
}
.BraintreePaymentComponentStyle-formContainer {
    width: 25% !important;
}
.braintree-upper-container:before,
.BraintreePaymentComponentStyle-formContainer {
    background: unset !important;
}
a.HeaderComponentStyle-siteLink.menuItemClass {
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
    transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
a.HeaderComponentStyle-siteLink.menuItemClass:hover {
    border: 0.15em solid rgb(255 255 255 / 50%) !important;
    transform: scale(0.95) !important;
}
.HeaderComponentStyle-iconCloseLinks,
.HeaderComponentStyle-enableIconLinksComponentShowed {
    filter: none !important;
    margin: 0 0.2em !important;
    margin-right: 2.7em !important;
    width: 5em !important;
    height: 5em !important;
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background-color: rgb(0 0 0 / 10%) !important;
    transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.Common-flexCenterAlignCenter.HeaderComponentStyle-blockForIconToggleSound {
    border-radius: 1em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: rgba(0, 0, 0, 0.1) !important;
}
.HeaderComponentStyle-linkBar {
    border-bottom: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
}
.RoundBigButtonComponentStyle-outerCircle {
    border: none !important;
}
.RoundBigButtonComponentStyle-middleCircle {
    background-color: unset !important;
}
.RoundBigButtonComponentStyle-innerCircle:hover {
    border: 0.15em solid rgb(255 255 255 / 50%) !important;
    transform: scale(0.96) !important;
}
.RoundBigButtonComponentStyle-innerCircle {
    transition: 0.2s ease-in-out !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background-color: var(--color) !important;
    backdrop-filter: blur(10px) !important;
}
button.classbutton {
    font-family: BaseFontMedium, FallbackFontMedium;
    text-transform: uppercase;
    transition: 0.2s ease-in-out;
}
button.classbutton:hover {
    border: 0.15em solid rgb(255 255 255 / 50%) !important;
    transform: scale(0.93);
}
.Common-entranceGradient, #app-root, .Common-Container {
    position: relative !important;
    overflow: hidden !important;
}
@keyframes unpredictableBg {
    0% {
        background-position: 30% 30%, 50% 50%, 20% 20%;
    }
    25% {
        background-position: 70% 20%, 30% 60%, 80% 40%;
    }
    50% {
        background-position: 10% 80%, 90% 10%, 40% 70%;
    }
    75% {
        background-position: 60% 40%, 20% 90%, 70% 30%;
    }
    100% {
        background-position: 90% 90%, 10% 10%, 50% 50%;
    }
}

@keyframes unpredictableScale {
    0% {
        transform: scale(0.3) rotate(0deg);
        opacity: 1;
    }
    20% {
        transform: scale(1) rotate(15deg);
        opacity: 0.8;
    }
    40% {
        transform: scale(0.7) rotate(-10deg);
        opacity: 0.6;
    }
    60% {
        transform: scale(1) rotate(25deg);
        opacity: 0.9;
    }
    80% {
        transform: scale(0.3) rotate(-20deg);
        opacity: 0.7;
    }
    100% {
        transform: scale(1) rotate(0deg);
        opacity: 1;
    }
}
.BreadcrumbsComponentStyle-rootTitle div {
    border: none !important;
}
.BattleOptionsComponentStyle-commonBlockCheckBoxCreateBattle {
    border: none !important;
}
.Common-flexCenterAlignCenter.JoinToBattleComponentStyle-buttonJoin.ProBattleCommonStyleMobile-buttonContainer {
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: rgba(0, 0, 0, 0.1) !important;
    transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
    scale: 0.97 !important;
}
.ModalStyle-rootHover > div {
    outline: none !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
}
.BattleOptionsComponentStyle-linearGradientImgCard,
.BattleOptionsComponentStyle-transformLinearGradientImgCard {
    border-radius: 1em;
}
tr.UsersTableStyle-row.UsersTableStyle-rowBattle.UsersTableStyle-rowWidth {
    border-radius: 1em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: rgba(0, 0, 0, 0.1) !important;
}
tr.UsersTableStyle-row.UsersTableStyle-rowBattleEmpty.UsersTableStyle-rowWidth {
    border-radius: 1em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: rgba(170, 170, 170, 0.1) !important;
}
.TanksPartBaseComponentStyle-buttonsContainer > div > .GarageCommonStyle-bigActionButton {
    box-shadow: none !important;
}
.UserProgressComponentStyle-modalWrapper {
    outline: none !important;
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
    width: 90% !important;
}
.UserProgressComponentStyle-progressItemUncompleted,
.UserProgressComponentStyle-itemContainer,
.UsersTableStyle-row > .UsersTableStyle-rowBattleEmpty {
    border-radius: 1em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: rgba(170, 170, 170, 0.1) !important;
}
.UsersTableStyle-row > .UsersTableStyle-rowBattle {
    border-radius: 1em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: rgba(0, 0, 0, 0.1) !important;
}
.BattleTabStatisticComponentStyle-commonBlockScroll {
    margin-top: 1em !important;
}
td.BattleTabStatisticComponentStyle-nicknameCell > div div .Common-flexStartAlignCenter {
    max-width: 7.5em !important;
}
.BattleTabStatisticComponentStyle-containerInsideTeams .BattleTabStatisticComponentStyle-tablesContainer tr td.BattleTabStatisticComponentStyle-nicknameCell {
    max-width: 15.625em !important;
    width: 15.625em !important;
}
.BattleTabStatisticComponentStyle-containerInsideTeams .BattleTabStatisticComponentStyle-tablesContainer tr .BattleTabStatisticComponentStyle-commonBlockScroll {
    margin-top: 0.5em !important;
}
.BattleTabStatisticComponentStyle-tablesContainer thead.TableComponentStyle-thead {
    display: none !important;
}
.BattleTabStatisticComponentStyle-containerInsideTeams .BattleTabStatisticComponentStyle-tablesContainer tr td.BattleTabStatisticComponentStyle-scoreCell,
.BattleTabStatisticComponentStyle-containerInsideTeams .BattleTabStatisticComponentStyle-tablesContainer tr td.BattleTabStatisticComponentStyle-dlCell {
    width: 3em !important;
    position: relative !important;
    left: 5em !important;
}
.BattleTabStatisticComponentStyle-containerInsideTeams .BattleTabStatisticComponentStyle-tablesContainer tr td.BattleTabStatisticComponentStyle-resistanceModuleCell {
    visibility: visible !important;
    position: relative !important;
    left: 5em !important;
}
.BattleTabStatisticComponentStyle-containerInsideTeams .BattleTabStatisticComponentStyle-tablesContainer tr .BattleTabStatisticComponentStyle-commonBlock,
.BattleTabStatisticComponentStyle-containerInsideTeams .BattleTabStatisticComponentStyle-tablesContainer tr .BattleTabStatisticComponentStyle-gsCell {
    position: relative !important;
    right: 7em !important;
    visibility: visible !important;
}


.BattleTabStatisticComponentStyle-containerInsideResults .BattleTabStatisticComponentStyle-tablesContainer tr td.BattleTabStatisticComponentStyle-nicknameCell {
    max-width: 15.625em !important;
    width: 15.625em !important;
}
.BattleTabStatisticComponentStyle-containerInsideResults .BattleTabStatisticComponentStyle-tablesContainer tr .BattleTabStatisticComponentStyle-commonBlockScroll {
    margin-top: 0.5em !important;
}

.BattleTabStatisticComponentStyle-containerInsideResults .BattleTabStatisticComponentStyle-tablesContainer tr td.BattleTabStatisticComponentStyle-scoreCell,
.BattleTabStatisticComponentStyle-containerInsideResults .BattleTabStatisticComponentStyle-tablesContainer tr td.BattleTabStatisticComponentStyle-dlCell {
    width: 3em !important;
    position: relative !important;
    left: 15em !important;
}
.BattleTabStatisticComponentStyle-containerInsideResults .BattleTabStatisticComponentStyle-tablesContainer tr td.BattleTabStatisticComponentStyle-resistanceModuleCell {
    visibility: visible !important;
    position: relative !important;
    left: 20em !important
}
.BattleTabStatisticComponentStyle-containerInsideResults .BattleTabStatisticComponentStyle-tablesContainer tr .BattleTabStatisticComponentStyle-commonBlock,
.BattleTabStatisticComponentStyle-containerInsideResults .BattleTabStatisticComponentStyle-tablesContainer tr .BattleTabStatisticComponentStyle-gsCell {
    position: relative !important;
    visibility: visible !important;
}


.HeaderComponentStyle-blockForIconToggleSound {
    background-color: transparent;
    border: none;
    border-radius: unset;
}
.EntranceComponentStyle-ContainerForm > form > div > .RegistrationComponentStyle-containerItem > .InputComponentStyle-input {
    backdrop-filter: blur(5px);
    margin: 5px 0;
}
.Common-entranceBackground > .Common-entranceGradient > .Common-flexStartAlignStartColumn {
    background-color: white;
    border: 2px solid rgb(111 111 111);
    border-radius: 1em;
}
@keyframes DialogContainer {
  from {
    opacity: 0.2;
    scale: 0.5;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}

#modal-root > div > .Common-flexSpaceBetweenAlignStartColumn, .DialogContainerComponentStyle-container {
   animation: DialogContainer 0.5s ease forwards;
}

@keyframes BattlePick {
  from {
    opacity: 0.2;
    scale: 0.7;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}

.BattlePickComponentStyle-modeCards {
  animation: BattlePick 0.5s ease forwards;
}
@keyframes BattleTab {
  from {
    opacity: 0;
    transform: scaleY(0.5);
  }
  to {
    opacity: 1;
    transform: scaleY(1);
  }
}

@keyframes BattlePause {
  from {
    opacity: 0;
    transform: translateY(-50%) scaleY(0.5);
  }
  to {
    opacity: 1;
    transform: translateY(-50%) scaleY(1);
  }
}

@keyframes SaleByKitStyle {
  from {
    opacity: 0.2;
    max-height: 5em;
  }
  to {
    opacity: 1;
    max-height: 52.5em;
  }
}
.BattlePauseMenuDialogComponentStyle-wrapper {
  animation: BattlePause 1s ease forwards;
}
.BattleTabStatisticComponentStyle-containerInsideResults,
.BattleTabStatisticComponentStyle-containerInsideTeams {
  animation: BattleTab 0.7s ease forwards;
}
.SaleByKitStyle-commonBlockModal, .ChatComponentStyle-chatWindow, .NewsComponentStyle-newsWindow, .TutorialModalComponentStyle-modalContainer > .TutorialModalComponentStyle-contentWrapper, .TutorialModalComponentStyle-modalContainer > .ItemDescriptionComponentStyle-commonBlockModal {
    animation: SaleByKitStyle 1s ease forwards !important;
}
.BattlePauseMenuComponentStyle-disabledButton,
.BattlePauseMenuComponentStyle-enabledButton,
.FriendListComponentStyle-scrollCommunity > .FriendListComponentStyle-stringCommunity > .FriendListComponentStyle-blockList,
.BattleTabStatisticComponentStyle-tablesContainer > div tbody,
.ChatComponentStyle-messagesContainer {
    animation: ChatComponentStyle 1s ease forwards !important;
}

@keyframes ChatComponentStyle {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    scale: 1;
  }
}

.ProBattlesComponentStyle-table > .TableComponentStyle-tBody {
    animation: TableComponentStyle 0.5s ease forwards !important;
}

@keyframes TableComponentStyle {
  from {
    opacity: 0;
    transform: scaleY(0.5);
  }
  to {
    transform: scaleY(1);
    opacity: 1;
  }
}

.MenuComponentStyle-battleTitleCommunity {
    animation: MenuComponentStyle 0.5s ease forwards !important;
}

@keyframes MenuComponentStyle {
  from {
    opacity: 0;
    transform: translateY(-5em);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.NotificationViewStyle-commonBlockNotification,
.ProBattlesComponentStyle-mainContainer > .Common-flexStartAlignCenterColumn:nth-child(3) {
    animation: ProBattles-child3 0.5s ease forwards !important;
}

@keyframes ProBattles-child3 {
  from {
    opacity: 0;
    transform: translateX(20em);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.ProBattlesComponentStyle-mainContainer > .Common-flexStartAlignCenterColumn:nth-child(1) {
    animation: ProBattles-child1 0.5s ease forwards !important;
}

@keyframes ProBattles-child1 {
  from {
    opacity: 0;
    transform: translateX(-10em);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.UserProgressComponentStyle-progressLegendPlusImage,
.UserProgressComponentStyle-progressLegendPlusGradient {
    border-radius: 1.1em !important;
}
.UserProgressComponentStyle-progressLegendPlus,
.UserProgressComponentStyle-progressItemCompleted {
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
}
.FooterComponentStyle-musicLink {
    display: none !important;
}
.Common-flexSpaceBetweenAlignCenterColumn.descriptionMode.blockCard {
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
    transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.ClanCommonStyle-tableInvite thead tr th,
.ClanProfileEditComponentStyle-containerParametersClanBlockInform {
    background: none !important;
}
.ClanProfileEditComponentStyle-clanDescriptionEdit {
    border-radius: 1em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
}
.ClanProfileEditComponentStyle-containerParametersClan,
.AnnouncementComponentStyle-mainContainer {
    z-index: 1 !important;
}
.wrapper .ApplicationLoaderComponentStyle-container > div[style*="linear-gradient"] {
    background: linear-gradient(rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 75%) 100%) !important;
}
.BattleKillBoardComponentStyle-tableContainer table tbody #selfUserBg {
    border-radius: 1em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    background: rgb(255 255 255 / 10%) !important;
    transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.BattleKillBoardComponentStyle-tableContainer table tbody #enemyCommand {
    border-radius: 1em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    background: rgb(150 0 0 / 10%) !important;
    transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.BattleKillBoardComponentStyle-tableContainer table tbody #blueCommand {
    border-radius: 1em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    background: rgb(0 60 110 / 15%) !important;
    transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.Common-flexStartAlignCenterColumn.QuestsComponentStyle-scrollBlock,
.ClanInfoComponentStyle-containerParametersClan {
    z-index: 1 !important;
}
span.ClanInfoComponentStyle-clanActionDescription {
    background: rgba(0, 0, 0, 0.1) !important;
}
.ClanInvitationsComponentStyle-invitationContent {
    border-radius: 1em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: rgb(36 36 36) !important;
    backdrop-filter: blur(5px) !important;
}
.ClanCommonStyle-rowEmpty {
    border-radius: 1em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
}
.ClanCommonStyle-row,
.ClanStatisticsComponentStyle-areCommon,
.ClanInfoComponentStyle-messageClan,
.ClanHeaderComponentStyle-blockInform {
    border-radius: 1em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    background: rgba(0, 0, 0, 0.1) !important;
}
.ClanInfoComponentStyle-containerParametersClan {
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
    height: unset !important;
    padding: 1em !important;
}
.BattleChatComponentStyle-btnToggleTeamAll,
.BattleChatComponentStyle-btnToggleTeamAllies {
    border-top-left-radius: 0.9em !important;
    border-bottom-left-radius: 0.9em !important;
}
.BattleChatComponentStyle-inputContainerAll,
.BattleChatComponentStyle-inputContainerAllies {
    border-radius: 1em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgb(0, 0, 0) 0rem 0rem 0.5rem 0.2rem, transparent 0rem 0rem 0rem 0rem inset;
    background: var(--color) !important;
    backdrop-filter: blur(5px);
}
.ClanCreateComponentStyle-blockCreatureClan {
    border-top: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    border-bottom: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
}
.FriendRequestComponentStyle-buttonDeclineAllInvisible {
    border-radius: 1em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
}
.QuestsChallengesComponentStyle-eventTier,
.TableComponentStyle-table thead tr th {
    background: none !important;
}
.QuestsChallengesComponentStyle-blockGradientTiersEvent {
    background: linear-gradient(rgba(255, 204, 0, 0) 0%, rgb(0 0 0) 50%, rgb(0 0 0 / 0%) 100%) center center / contain no-repeat  !important;
}
.FriendRequestComponentStyle-buttonAccept {
    border-radius: 1em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: rgb(118 255 51 / 15%) !important;
}
.FriendRequestComponentStyle-blockInformationCommunityNoSearch .FriendRequestComponentStyle-buttonDeclineAll,
.FriendRequestComponentStyle-buttonDecline {
    border-radius: 1em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: rgb(255 102 102 / 15%) !important;
}
.TableComponentStyle-table > .TableComponentStyle-tBody > tr.TableComponentStyle-row {
    border-radius: 1em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
}
.BattleMessagesComponentStyle-message {
    border-radius: 1em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgb(0 0 0) 0rem 0rem 0.5rem 0.2rem, transparent 0rem 0rem 0rem 0rem inset;
    background: var(--color) !important;
    backdrop-filter: blur(5px);
}
.Common-flexCenterAlignCenter.UserTitleComponentStyle-premiumButton {
    border-radius: 1.3em !important;
    border: 0.15em solid rgb(255 204 0 / 40%) !important;
    box-shadow: rgb(255 204 0 / 40%) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: rgb(255 204 0 / 40%) !important;
    transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.Common-flexCenterAlignCenter.InvitationWindowsComponentStyle-backButton.Font-bold.Font-normal.Common-flexCenterAlignCenter.Common-displayFlex.Common-alignCenter {
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.Common-flexCenterAlignCenter.InvitationWindowsComponentStyle-inviteButton.Font-bold.Font-normal.Common-flexCenterAlignCenter.Common-displayFlex.Common-alignCenter {
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: rgb(118 255 51 / 25%) !important;
    transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.Common-flexCenterAlignCenter.InvitationWindowsComponentStyle-inviteButton.Font-bold.Font-normal.Common-flexCenterAlignCenter.Common-displayFlex.Common-alignCenter span {
    color: rgb(255 255 255) !important;
    margin: unset !important;
}
.InvitationWindowsComponentStyle-typeListContainer h3 {
    z-index: 1;
    color: white !important;
}
.ShopSelectedSectionComponentStyle-commonCard > .Common-backgroundImageCover {
    background-color: var(--color) !important;
}
.InvitationWindowsComponentStyle-usersScroll > .Common-flexStartAlignStretch > .Common-whiteSpaceNoWrap {
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
    transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.ShopSelectedSectionComponentStyle-commonCard,
.ShopSelectedSectionComponentStyle-limitedOffersCommon {
    background-image: none !important;
    padding: 0 !important;
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(55, 55, 55) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background-color: var(--color) !important;
    backdrop-filter: blur(5px) !important;
    transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.ShopSelectedSectionComponentStyle-gradientCategory {
    background: radial-gradient(100% 100% at 0% 100%, #000 0%, #00000000 100%);
    border-radius: 1.1em;
    transform: none !important;
    transition: none !important;
    bottom: 0 !important;
}
.ShopSelectedSectionComponentStyle-commonCard::before,
.ShopSelectedSectionComponentStyle-commonCard::after,
.ShopSelectedSectionComponentStyle-limitedOffersCommon::before,
.ShopSelectedSectionComponentStyle-limitedOffersCommon::after {
    display: none !important;
}
.TableMainQuestComponentStyle-colorLockedGradientTable {
    background: linear-gradient(90deg, rgba(255, 51, 51, 0.25) 0%, rgba(255, 51, 51, 0) 50%), rgb(0 0 0 / 0%) !important;
}
.SuperMissionComponentStyle-descriptionSuperMission > div > .SuperMissionComponentStyle-buttonDisable {
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: rgba(0, 0, 0, 0.1) !important;
    transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
    scale: 0.97 !important;
    backdrop-filter: blur(5px) !important;
}
.SuperMissionComponentStyle-descriptionSuperMission > div > .SuperMissionComponentStyle-buttonCollect {
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
    background: rgba(118, 255, 51, 0.25) !important;
    scale: 0.97 !important;
    backdrop-filter: blur(5px) !important;
}
.Common-flexCenterAlignCenter.UserTitleComponentStyle-premiumButton span,
.BasePaymentComponentStyle-commonContainerForChoiceAndButton
	> .BasePaymentComponentStyle-buttonContainer
	> .Common-flexCenterAlignCenter
	> .ShopBuyButtonComponentStyle-container
	> .Common-flexStartAlignCenter
	h4,
.BasePaymentComponentStyle-commonContainerForChoiceAndButton
	> .BasePaymentComponentStyle-buttonContainer
	> .Common-flexCenterAlignCenter
	span,
.ChallengePurchaseComponentStyle-buttonBattlePass span,
.BattleInfoComponentStyle-blockSelectedOptionsSettings span,
.FormatsSectionComponentStyle-card > .Common-flexCenterAlignCenterColumn h2,
.ProBattlesComponentStyle-createBattleButton p,
tr.Common-flexStartAlignCenter.Common-flexWrapNowrap.modeLimitIcon
	> .ProBattlesComponentStyle-cellName
	> .Common-flexStartAlignCenter
	> div
	> .Common-whiteSpaceNoWrap,
.ProBattlesComponentStyle-mainContainer
	> .Common-flexStartAlignCenterColumn:nth-child(1)
	.Common-flexStartAlignStartColumn
	> .BattleModesComponentStyle-blockModesFilter
	> .Common-flexCenterAlignCenter
	> .Common-flexStartAlignCenter
	p,
.ProBattlesComponentStyle-mainContainer
	> .Common-flexStartAlignCenterColumn:nth-child(1)
	.Common-flexStartAlignStartColumn
	> .Common-flexCenterAlignCenter
	> .Common-flexStartAlignCenter
	p,
h2.EntranceComponentStyle-fontStyleLabel {
	color: white !important;
}
.BattleOptionsSectionComponentStyle-checkBoxSettingsCreateBattle
	> .Common-flexSpaceBetweenAlignCenter
	> .Common-flexStartAlignCenter
	> .Common-maskImageContain,
.BattleTabStatisticComponentStyle-commonContainerIconOptions
	> div
	> .BattleTabStatisticComponentStyle-colorIconBattleOptions,
.IconStyle-iconAddBattle,
.ProBattlesComponentStyle-mainContainer
	> .Common-flexStartAlignCenterColumn:nth-child(1)
	.Common-flexStartAlignStartColumn
	> .BattleModesComponentStyle-blockModesFilter
	> .Common-flexCenterAlignCenter
	> .Common-maskImageContain,
.ProBattlesComponentStyle-mainContainer
	> .Common-flexStartAlignCenterColumn:nth-child(1)
	.Common-flexStartAlignStartColumn
	> .Common-flexCenterAlignCenter
	> .Common-maskImageContain,
.BattleCreateComponentStyle-blockCard
	> .Common-flexStartAlignStretchColumn
	> .Common-flexCenterAlignCenterColumn
	> .Common-flexCenterAlignCenter {
	background-color: white !important;
}
.MainSectionComponentStyle-commonBlockCheckBoxCreateBattle.ProBattleCommonStyleMobile-commonBlockCheckBoxCreateBattle,
.NewBattleCreateInputStyle-settings > input.InputComponentStyle-defaultStyle,
.RegistrationComponentStyle-containerItem > input.InputComponentStyle-input {
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
}
.TierHeaderComponentStyle-descriptionTier {
	filter: saturate(0) !important;
}
.TableMainQuestComponentStyle-cardRewardCompletedTable.TableMainQuestComponentStyle-commonTableMainQuest,
.MainQuestComponentStyle-cardRewardCompleted.iconsMission.MainQuestComponentStyle-animationImgHover {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(118, 255, 51, 0.15) !important;
	box-shadow:
		rgba(118, 255, 51, 0.15) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(118, 255, 51, 0.15) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.ScrollBarStyle-itemsContainer
	> .ChallengeTierComponentStyle-blockTier
	> .Common-flexCenterAlignCenterColumn {
	border-radius: 1.3em !important;
	border: 0.15em solid rgb(55 55 55) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	backdrop-filter: blur(5px) !important;
}
.ChallengePurchaseComponentStyle-buttonBattlePass {
	border-radius: 1.3em !important;
	border: 0.15em solid rgb(255 204 0 / 40%) !important;
	box-shadow:
		rgb(255 204 0 / 40%) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(255 204 0 / 40%) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.ScrollBarStyle-itemsContainer
	> .ChallengeTierComponentStyle-blockTier
	> .Common-flexCenterAlignCenterColumn {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
}
.QuestsChallengesComponentStyle-maxTierBlock {
	border-left: 0.15em solid rgb(55 55 55) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color-two) !important;
	backdrop-filter: blur(5px) !important;
}
.BasePaymentComponentStyle-commonContainerForChoiceAndButton
	> .BasePaymentComponentStyle-buttonContainer
	> .Common-flexCenterAlignCenter {
	border-radius: 1.3em !important;
	border: 0.15em solid rgb(255 102 102 / 40%) !important;
	box-shadow:
		rgb(255 102 102 / 40%) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(255 102 102 / 40%) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.QuestsChallengesComponentStyle-tiers,
.QuestsChallengesComponentStyle-premiumTier {
	background: transparent !important;
}
.QuestsChallengesComponentStyle-blockGradientTiersCommon {
	background: linear-gradient(rgb(0 0 0 / 0%) 0%, rgb(55, 55, 55) 100%) center
		center / contain no-repeat !important;
}
.QuestsChallengesComponentStyle-blockGradientTiersPremium {
	background: linear-gradient(rgb(55, 55, 55) 0%, rgb(0 0 0 / 0%) 100%) center
		center / contain no-repeat !important;
}
.EventBattlePassLobbyComponentStyle-commonBlockProgressBarChallenge,
.EventBattlePassLobbyComponentStyle-commonBlockProgressBarEvent {
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(0 0 0 / 10%) !important;
	backdrop-filter: blur(5px);
}
.QuestsChallengesComponentStyle-blockImage {
	filter: blur(3px);
}
.QuestsChallengesComponentStyle-blockGradient,
.QuestsChallengesComponentStyle-maxTierBlockFree,
.QuestsChallengesComponentStyle-blockGradientEvent {
	background: transparent !important;
}
.QuestsChallengesComponentStyle-maxTierBlockEvent {
	border-left: 0.15em solid rgb(55 55 55) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
}
.BattleTabStatisticComponentStyle-header.Common-flexStartAlignCenter,
td.BattleTabStatisticComponentStyle-dlCell,
td.BattleTabStatisticComponentStyle-scoreCell,
.ProBattlesComponentStyle-rightPanel.Common-flexSpaceBetween
	> .MainSectionComponentStyle-rightBlock
	> .Common-flexStartAlignStretchColumn
	> div
	> .Common-scrollBarHoverVisible,
.ProBattlesComponentStyle-borderLineCell {
	border: none !important;
}
.BattleInfoComponentStyle-blockSelectedOptionsSettings {
	box-shadow: none !important;
}
.BattleInfoComponentStyle-commonBlockSelectedOptionsSettings {
	border-top-left-radius: 1.3em !important;
	border-bottom-left-radius: 1.3em !important;
	border-left: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	border-top: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	border-bottom: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(17 17 17) !important;
	bottom: -0.1em !important;
}
.ProBattlesComponentStyle-rightPanel.Common-flexSpaceBetween
	> .MainSectionComponentStyle-rightBlock
	> .Common-flexStartAlignStretchColumn
	> div
	> .Common-flexCenterAlignCenter.Common-alignSelfFlexEnd {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.InputComponentStyle-blurBackground {
	backdrop-filter: none !important;
}
.ProBattlesComponentStyle-rightPanel.Common-flexSpaceBetween
	> .MainSectionComponentStyle-rightBlock
	> .Common-flexStartAlignCenter,
.BattleOptionsSectionComponentStyle-checkBoxSettingsCreateBattle
	> .Common-flexSpaceBetweenAlignCenter {
	border: none !important;
	background: transparent !important;
}
.ProBattlesComponentStyle-rightPanel.Common-flexSpaceBetween {
	border-top-left-radius: 1.3em !important;
	border-bottom-left-radius: 1.3em !important;
	border-left: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	border-top: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	border-bottom: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
	height: 95% !important;
	padding-bottom: 1em !important;
	margin-block: 1em !important;
}
.BattleResultNavigationComponentStyle-commonBlockProBattleButton
	> .Common-flexCenterAlignCenter.BattleResultNavigationComponentStyle-buttonNextWithTimer.BattleResultNavigationComponentStyle-buttonWithTimer.Common-flexCenterAlignCenterColumn.Common-displayFlexColumn.Common-displayFlex.Common-alignCenter {
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(118, 255, 51, 0.25) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
tr.Common-flexStartAlignCenter.Common-flexWrapNowrap.modeLimitIcon {
	width: 97% !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.BattleInfoComponentStyle-commonBlockSelectBattle
	> .BattleInfoComponentStyle-selectBattle {
	border-top-left-radius: 1.3em !important;
	border-bottom-left-radius: 1.3em !important;
	border-left: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	border-top: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	border-bottom: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	backdrop-filter: blur(5px) !important;
	height: 95% !important;
	padding-bottom: 1em !important;
	filter: saturate(0) !important;
}
.ProBattlesComponentStyle-mainContainer
	> .Common-flexStartAlignCenterColumn:nth-child(1)
	.Common-flexStartAlignStartColumn
	> .BattleModesComponentStyle-blockModesFilter
	> .Common-flexCenterAlignCenter
	> .Common-maskImageContain {
	position: relative !important;
	left: unset !important;
}
.CoinPaymentComponentStyle-containerCenter
	> .CoinPaymentComponentStyle-itemsContainer
	> .Common-flexCenterAlignCenterColumn {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
}
.ProBattlesComponentStyle-mainContainer
	> .Common-flexStartAlignCenterColumn:nth-child(1)
	.Common-flexStartAlignStartColumn
	> .Common-flexCenterAlignCenter,
.ProBattlesComponentStyle-mainContainer
	> .Common-flexStartAlignCenterColumn:nth-child(1)
	.Common-flexStartAlignStartColumn
	> .BattleModesComponentStyle-blockModesFilter
	> .Common-flexCenterAlignCenter {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.BattleModesComponentStyle-button .Common-flexCenterAlignCenter > div {
	filter: saturate(0) !important;
}
.ProBattlesComponentStyle-mainContainer
	> .Common-flexStartAlignCenterColumn
	> .Common-flexStartAlignStartColumn
	> .ProBattlesComponentStyle-createBattleButton {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: scale 0.2s ease-in-out !important;
	scale: 0.8 !important;
}
.ProBattlesComponentStyle-mainContainer
	> .Common-flexStartAlignCenterColumn
	> .Common-flexStartAlignStartColumn
	> .ProBattlesComponentStyle-createBattleButton:hover {
        border: 0.15em solid rgb(255 255 255 / 50%) !important;
	scale: 0.75 !important;
}
.BattleCreateComponentStyle-mainContainer
	> .ProBattlesComponentStyle-rightPanel.Common-flexSpaceBetween
	> .MainSectionComponentStyle-rightBlock
	> .JoinToBattleComponentStyle-buttonJoin,
#root
	> div
	> div.ProBattlesComponentStyle-mainContainer
	> div.Common-flexStartAlignCenterColumn
	> div.Common-flexStartAlignStretchColumn
	> div.Common-flexStartAlignCenter
	> div {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
	scale: 0.97 !important;
}
.ProBattlesComponentStyle-mainContainer
	> .Common-flexStartAlignCenterColumn:nth-child(1)
	.Common-flexStartAlignStartColumn
	.BattleModesComponentStyle-button,
.BattleModesComponentStyle-button .Common-flexCenterAlignCenter,
.Common-flexStartAlignCenter.BattleModesComponentStyle-fund,
.ProBattlesComponentStyle-mainContainer
	> .Common-flexStartAlignCenterColumn:nth-child(1)
	.Common-flexStartAlignStartColumn,
#root
	> div
	> div.ProBattlesComponentStyle-mainContainer
	> div.Common-flexStartAlignCenterColumn
	> div.Common-flexStartAlignStretchColumn
	> div.Common-flexStartAlignCenter
	> div.Common-flexCenterAlignCenterColumn
	> div,
#root
	> div
	> div.ProBattlesComponentStyle-mainContainer
	> div.Common-flexStartAlignCenterColumn
	> div.Common-flexStartAlignStretchColumn
	> div.Common-flexStartAlignCenter.ProBattleCommonStyleMobile-buttonContainer
	> div.Common-flexCenterAlignCenter
	> div,
#root
	> div
	> div.ProBattlesComponentStyle-mainContainer
	> div.Common-flexStartAlignCenterColumn
	> div.Common-flexStartAlignStretchColumn
	> div.Common-flexStartAlignCenter
	> div
	> div.Common-flexCenterAlignCenter.ButtonComponentStyle-disabled {
	background: none !important;
	border: none !important;
	box-shadow: none !important;
}
.UsersTableStyle-containerBattleListCommands
	> .UsersTableStyle-scrollCommandTable
	> .Common-flexStartAlignStartColumn
	> .UsersTableStyle-rowBattleEmpty,
.ProBattlesComponentStyle-mainContainer
	> .Common-flexStartAlignCenterColumn:nth-child(3)
	> .Common-scrollBarHoverVisible
	> .UsersTableStyle-containerBattleListCommands
	> .UsersTableStyle-scrollCommandTable
	> .Common-flexStartAlignStartColumn
	> .UsersTableStyle-row
	> .UsersTableStyle-rowBattleEmpty {
	margin: 0.1em !important;
	border-radius: 1em !important;
	    border: 0.15em solid rgb(255 255 255 / 50%) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(108 108 108 / 10%) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.UsersTableStyle-containerBattleListCommands
	> .UsersTableStyle-scrollCommandTable
	> .Common-flexStartAlignStartColumn
	> .UsersTableStyle-rowBattle,
.ProBattlesComponentStyle-mainContainer
	> .Common-flexStartAlignCenterColumn:nth-child(3)
	> .Common-scrollBarHoverVisible
	> .UsersTableStyle-containerBattleListCommands
	> .UsersTableStyle-scrollCommandTable
	> .Common-flexStartAlignStartColumn
	> .UsersTableStyle-row
	> .UsersTableStyle-rowBattle {
	margin: 0.1em !important;
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.BattleCardComponentStyle-line {
	background: transparent !important;
}
.MapCardComponentStyle-linearGradient,
.MainSectionComponentStyle-linearGradientImgCard,
.MainSectionComponentStyle-transformLinearGradientImgCard {
	border-radius: 1.1em !important;
}
.BattleCreateComponentStyle-blockCard
	> .Common-flexStartAlignStretchColumn
	> .Common-flexCenterAlignCenterColumn {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.BattleCreateComponentStyle-blockCard
	> .Common-flexStartAlignStretchColumn
	> .Common-backgroundImageCover,
.InformationComponentStyle-commonBlockCard
	> .BattleCardComponentStyle-cardImg.InformationComponentStyle-blockCard.Common-flexCenterAlignCenterColumn.Common-backgroundImageCover,
.BattleInfoComponentStyle-blockCard
	> .Common-backgroundImageCover.modeLimitIcon,
.Common-flexStartAlignStretchColumn.ProBattleCommonStyleMobile-marginTop
	> .Common-backgroundImageCover.modeLimitIcon {
	border-radius: 1.3em !important;
	border: 0.15em solid rgb(55 55 55) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background-color: var(--color) !important;
	backdrop-filter: blur(5px) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.ProBattlesComponentStyle-mainContainer
	> .Common-flexStartAlignCenterColumn:nth-child(3) {
	border-top-left-radius: 1.3em !important;
	border-bottom-left-radius: 1.3em !important;
	border-left: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	border-top: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	border-bottom: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
	height: 95% !important;
	padding-bottom: 1em !important;
}
.ProBattlesComponentStyle-mainContainer
	> .Common-flexStartAlignCenterColumn:nth-child(1) {
	border-top-right-radius: 1.3em !important;
	border-bottom-right-radius: 1.3em !important;
	border-right: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	border-top: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	border-bottom: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
	height: 95% !important;
	padding-bottom: 1em !important;
}
.ProBattlesComponentStyle-navigationBlock {
	border: none !important;
}
.ContextMenuStyle-menuItemRank span {
	color: rgb(255, 102, 102) !important;
}
.Common-flexCenterAlignCenter.MainQuestComponentStyle-containerButtonStore.Common-flexCenterAlignCenterColumn.Common-displayFlexColumn.Common-displayFlex.Common-alignCenter {
	border-radius: 1.3em !important;
	border: 0.15em solid rgb(255 204 0 / 40%) !important;
	box-shadow:
		rgb(255 204 0 / 40%) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(255 204 0 / 40%) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.Common-flexCenterAlignCenterColumn.MainQuestComponentStyle-needRank,
.TutorialModalComponentStyle-modalContainer
	> .ItemDescriptionComponentStyle-commonBlockModal
	> .Common-flexStartAlignStartColumn
	> .MainQuestComponentStyle-rewardsCommonBlock
	> .MainQuestComponentStyle-rewardsInDescriptionModal
	> .Common-flexStartAlignCenter,
.SuperMissionComponentStyle-descriptionSuperMission
	> div
	> .Common-flexEndAlignCenterColumn
	> .SuperMissionComponentStyle-rewardsContainer
	> .Common-flexCenterAlignCenterColumn,
.TableMainQuestComponentStyle-rewardsContainerTable
	> .Common-flexCenterAlignCenterColumn,
.MainQuestComponentStyle-rewardsContainer
	> .Common-flexCenterAlignCenterColumn {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
}
.Common-flexCenterAlignCenter.MainQuestComponentStyle-buttonContainer.Common-flexCenterAlignCenterColumn.Common-displayFlexColumn.Common-displayFlex.Common-alignCenter {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.TableMainQuestComponentStyle-colorLockedGradientTable,
.MainQuestComponentStyle-colorLockedGradient {
	border-radius: 1em !important;
}
.TableMainQuestComponentStyle-commonTableMainQuest.TableMainQuestComponentStyle-cardLockedTable,
.MainQuestComponentStyle-commonCard.iconsMission.TableMainQuestComponentStyle-cardLockedTable.MainQuestComponentStyle-animationImgHover {
	border-radius: 1.3em !important;
	    border: 0.15em solid rgb(255 255 255 / 50%) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(255 204 0 / 10%) !important;
	backdrop-filter: blur(5px) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.MainQuestComponentStyle-cardPlayCommon.TableMainQuestComponentStyle-commonTableMainQuest,
.TableMainQuestComponentStyle-commonTableMainQuest.MainQuestComponentStyle-cardCommonLocked,
.TableMainQuestComponentStyle-commonTableMainQuest.TableMainQuestComponentStyle-cardLockedTable,
.MainQuestComponentStyle-commonCard.iconsMission.MainQuestComponentStyle-colorCardPlay.MainQuestComponentStyle-animationImgHover,
.MainQuestComponentStyle-cardPlay.iconsMission.MainQuestComponentStyle-animationImgHover {
	border-radius: 1.3em !important;
	    border: 0.15em solid rgb(255 255 255 / 50%) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.SuperMissionComponentStyle-descriptionSuperMission > div {
	background: transparent !important;
}
.BattleInfoComponentStyle-invite,
.BattleInfoComponentStyle-invite > .Common-flexStartAlignCenter,
.BattleInfoComponentStyle-customOptions,
.SuperMissionComponentStyle-descriptionSuperMission,
.ProBattlesComponentStyle-commonBlockHotkeyV {
	background: transparent !important;
	border: none !important;
}
.PaymentInfoComponentStyle-commonBlock {
	border-bottom: none !important;
}
.LargeSingleCardComponentStyle-largeCardContainer
	> .LargeSingleCardComponentStyle-commonBlock
	> .Common-flexCenterAlignCenter {
	border-radius: 1.3em !important;
	border: 0.15em solid rgb(255 204 0 / 40%) !important;
	box-shadow:
		rgb(255 204 0 / 40%) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(255 204 0 / 40%) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.LargeSingleCardComponentStyle-largeCardContainer
	> .LargeSingleCardComponentStyle-commonBlock
	> .Common-backgroundImageCover {
	border-radius: 1.3em !important;
	border: 0.15em solid rgb(85 5 34) !important;
	box-shadow:
		rgb(85 5 34) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background-color: rgb(85 5 34) !important;
	backdrop-filter: blur(5px) !important;
}
.ShopCategoryOfferSectionStyle-containerLimitOffers
	> .Common-flexCenterAlignCenter
	> .Common-flexWrapWrap
	> .Common-flexCenterAlignCenterColumn {
	border-radius: 1.3em !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(50 50 50 / 10%) !important;
}
.ShopCategoryOfferSectionStyle-containerLimitOffers
	> .Common-flexCenterAlignCenter {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color-two) !important;
	backdrop-filter: blur(5px) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.BattleCreateComponentStyle-mainContainer
	> .ProBattlesComponentStyle-rightPanel.Common-flexSpaceBetween
	> .MainSectionComponentStyle-rightBlock
	> .JoinToBattleComponentStyle-buttonJoin
	span,
#root
	> div
	> div.ProBattlesComponentStyle-mainContainer
	> div.Common-flexStartAlignCenterColumn
	> div.Common-flexStartAlignStretchColumn
	> div.Common-flexStartAlignCenter
	> div
	span,
#root
	> div
	> div.ProBattlesComponentStyle-mainContainer
	> div.Common-flexStartAlignCenterColumn
	> div.Common-flexStartAlignStretchColumn
	> div.Common-flexStartAlignCenter.ProBattleCommonStyleMobile-buttonContainer
	> div.Common-flexCenterAlignCenter
	> div
	span,
.Common-flexCenterAlignCenter.MainQuestComponentStyle-containerButtonStore.Common-flexCenterAlignCenterColumn.Common-displayFlexColumn.Common-displayFlex.Common-alignCenter
	span,
.Common-flexCenterAlignCenter.MainQuestComponentStyle-buttonContainer.Common-flexCenterAlignCenterColumn.Common-displayFlexColumn.Common-displayFlex.Common-alignCenter
	span,
.LargeSingleCardComponentStyle-largeCardContainer
	> .LargeSingleCardComponentStyle-commonBlock
	> .Common-flexCenterAlignCenter
	span,
.PromoCodesComponentStyle-controlsWrapper
	.PromoCodesComponentStyle-sendButton
	span {
	color: rgb(255 255 255) !important;
}
.PromoCodesComponentStyle-controlsWrapper .PromoCodesComponentStyle-sendButton {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.PromoCodesComponentStyle-controlsWrapper {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color-two) !important;
	backdrop-filter: blur(5px) !important;
}
.ShopCategoryComponentStyle-bonusContainer {
	background-color: rgb(0 0 0 / 25%) !important;
}
.ShopSelectedSectionComponentStyle-activeCategory {
	margin: 1.25em !important;
}
.Common-entranceBackground {
    background-repeat: no-repeat !important;
    background-size: cover !important;
    background-position: center center !important;
    background-image: url(/play/static/images/background.fc2779c1.webp) !important;
}
.ClanCommonStyle-content,
.Common-entranceGradient,
html,
body,
.Common-container {
	background: var(--gradient);
}
.BattleHudComponentStyle-hudButton {
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px);
}
tr.BattleTabStatisticComponentStyle-selectedRowBackGround,
tr.BattleTabStatisticComponentStyle-rowBackGround {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow: none !important;
	background: rgba(0, 0, 0, 0.1) !important;
}
.BattleTabStatisticComponentStyle-containerInsideResults,
.BattleTabStatisticComponentStyle-containerInsideTeams {
	border-radius: 1.3em !important;
	border: 0.15em solid rgb(170 170 170 / 25%) !important;
	box-shadow:
		rgb(0, 0, 0) 0rem 0rem 0.5rem 0.2rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(0, 0, 0, 0.75) !important;
	backdrop-filter: blur(5px) !important;
}
.BattleTabStatisticComponentStyle-containerInsideResults table thead tr th .Common-maskImageContain,
.BattleTabStatisticComponentStyle-redTeamTableContainer
	table
	thead
	tr
	th
	.Common-maskImageContain,
.BattleTabStatisticComponentStyle-blueTeamTableContainer
	table
	thead
	tr
	th
	.Common-maskImageContain {
	background-color: white !important;
}
.BattleTabStatisticComponentStyle-containerInsideResults table thead tr th h2,
.BattleTabStatisticComponentStyle-blueTeamTableContainer table thead tr th h2,
.BattleTabStatisticComponentStyle-redTeamTableContainer table thead tr th h2 {
	color: white !important;
}
.MainScreenComponentStyle-buttonPlay {
	position: absolute !important;
	margin: unset !important;
	width: 22.5em !important;
	height: 10em !important;
    top: 7em !important;
    left: 1em !important;
	transition: 0.2s ease-in-out !important;
}
.MainScreenComponentStyle-playButtonContainer.MainScreenComponentStyle-buttonPlay.MainScreenComponentStyle-activeItem span {
    transition: 0.2s ease-in-out;
}
.MainScreenComponentStyle-playButtonContainer.MainScreenComponentStyle-buttonPlay.MainScreenComponentStyle-activeItem {
    top: 7em !important;
    left: 1em !important;
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
}
.MainScreenComponentStyle-playButtonContainer span {
	color: white !important;
}
.MainScreenComponentStyle-playButtonContainer.MainScreenComponentStyle-buttonPlay.MainScreenComponentStyle-activeItem:hover {
        border: 0.15em solid rgb(255 255 255 / 50%) !important;
	transform: scale(0.96) !important;
}
.MainScreenComponentStyle-playButtonContainer.MainScreenComponentStyle-buttonPlay.MainScreenComponentStyle-disabledButtonPlay {
	height: 10em !important;
	border-radius: 1.3em !important;
	border: 0.15em solid rgb(170 170 170 / 25%) !important;
	box-shadow:
		rgb(0 0 0 / 50%) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color-two) !important;
	backdrop-filter: blur(5px) !important;
}
.MainScreenComponentStyle-playButtonContainer.MainScreenComponentStyle-buttonPlay.MainScreenComponentStyle-disabledButtonPlay
	.Common-backgroundImageContain {
	filter: saturate(0) !important;
}
.MainScreenComponentStyle-playButtonContainer h3 {
	color: rgb(255 255 255) !important;
}
.MainScreenComponentStyle-playButtonContainer.MainScreenComponentStyle-buttonPlay.MainScreenComponentStyle-disabledButtonPlay:active {
	border: 0.15em solid rgb(255 102 102 / 50%) !important;
	box-shadow:
		rgb(255 102 102 / 50%) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background-color: rgb(255 102 102 / 14%) !important;
}
li.PrimaryMenuItemComponentStyle-itemCommonLi.PrimaryMenuItemComponentStyle-menuItemContainer {
    margin: 0.3em 0.5em !important;
    width: 21em !important;
    transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: rgba(0, 0, 0, 0.1) !important;
}
li.PrimaryMenuItemComponentStyle-itemCommonLi.PrimaryMenuItemComponentStyle-menuItemContainer
	div {
	background-color: white;
}
li.PrimaryMenuItemComponentStyle-itemCommonLi.PrimaryMenuItemComponentStyle-menuItemContainer:hover {
        border: 0.15em solid rgb(255 255 255 / 50%) !important;
	transform: scale(0.95) !important;
}
.PrimaryMenuItemComponentStyle-itemName {
	font-size: 1.5em !important;
	margin: 0.2em 0 0 0 !important;
}
.MainScreenComponentStyle-blockMainMenu ul {
	width: unset !important;
}
.MainScreenComponentStyle-blockMainMenu ul {
    width: 22em !important;
    top: unset !important;
    bottom: 1em !important;
    left: 1em !important;
    position: absolute !important;
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
    align-items: center;
}
.MainScreenComponentStyle-containerPanel {
	border-bottom: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
}
.AnnouncementHomeScreenComponentStyle-mainContainer:hover,
.EventBattlePassLobbyComponentStyle-buttonEventBattlePass:hover,
.BattlePassLobbyComponentStyle-menuBattlePass:hover {
    border: 0.15em solid rgb(255 255 255 / 50%) !important;
    transform: scale(0.96) !important;
}
.AnnouncementHomeScreenComponentStyle-mainContainer,
.EventBattlePassLobbyComponentStyle-buttonEventBattlePass,
.BattlePassLobbyComponentStyle-menuBattlePass {
    transition: 0.2s ease-in-out !important;
}
.BattlePassLobbyComponentStyle-menuBattlePass {
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
    right: 1em !important;
    margin-top: 7em !important;
}
.BattlePassLobbyComponentStyle-commonDescription,
.BattlePassLobbyComponentStyle-blockBattlePass {
	background-color: transparent !important;
	border: 0em solid transparent !important;
}
.FooterComponentStyle-containerMenu {
	transition: transform 0.1s linear;
	box-shadow: none !important;
}
.FooterComponentStyle-containerMenu div {
	background-color: white;
}
footer.FooterComponentStyle-footer ul {
	width: unset !important;
	margin: unset !important;
}
li.FooterComponentStyle-containerMenu.FooterComponentStyle-containerMenu:hover {
    border: 0.15em solid rgb(255 255 255 / 50%) !important;
}
li.FooterComponentStyle-containerMenu.FooterComponentStyle-containerMenu {
	width: 6em !important;
	height: 3em !important;
	margin: 0 0.2em !important;
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(0 0 0 / 10%) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
footer.FooterComponentStyle-footer {
    flex-direction: column;
    position: absolute !important;
    height: 5em !important;
    right: 50% !important;
    left: unset !important;
    bottom: 1em !important;
    transform: translateX(50%) !important;
    width: unset !important;
    padding: 0 0 !important;
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
}
.FooterComponentStyle-containerMenu:hover {
    border: 0.15em solid rgb(255 255 255 / 50%) !important;
	transform: scale(0.95) !important;
}
.AnnouncementHomeScreenComponentStyle-mainContainer
	> .Common-flexCenterAlignCenterColumn {
	display: none !important;
}
.AnnouncementHomeScreenComponentStyle-mainClickContainer
	> .Common-backgroundImageContain {
	border-radius: 1.3em !important;
}
.AnnouncementHomeScreenComponentStyle-announceContainer {
	background: linear-gradient(transparent 0%, rgb(0 0 0) 100%) !important;
	border-radius: 1.3em !important;
}
.AnnouncementHomeScreenComponentStyle-mainContainer {
    bottom: 1em !important;
    right: 1em !important;
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
}
.AnnouncementHomeScreenComponentStyle-mainBackGroundContainer {
	width: 22.5em !important;
	height: 10em !important;
}
.ChatComponentStyle-upMenu,
.ChatComponentStyle-closeArea,
.NewsComponentStyle-header,
.NewsComponentStyle-closeArea {
	background-color: transparent !important;
}
.ChatComponentStyle-chatResize {
	display: none;
}
.ChatComponentStyle-channelsSelect > .ChatComponentStyle-channelSelect {
	border-radius: 0.8em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(0 0 0 / 10%) !important;
}
.ChatComponentStyle-messageRow {
	border-radius: 0.8em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(0 0 0 / 10%) !important;
}
.EventBattlePassLobbyComponentStyle-buttonEventBattlePass {
    width: 10em !important;
    height: 10em !important;
    padding: unset !important;
    bottom: 1em !important;
    margin: unset !important;
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
    right: 24.5em !important;
    top: 7em !important;
}
.EventBattlePassLobbyComponentStyle-commonBlockProgressBar {
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(0 0 0 / 10%) !important;
}
.MainScreenComponentStyle-containerPanel
	> .UserScoreComponentStyle-blockRightPanel
	> .BreadcrumbsComponentStyle-logout,
.MainScreenComponentStyle-containerPanel
	> .UserScoreComponentStyle-blockRightPanel
	> .Common-flexCenterAlignCenter,
.MainScreenComponentStyle-containerPanel
	> .UserInfoContainerStyle-blockLeftPanel
	> .UserInfoContainerStyle-userTitleContainer
	> .Common-flexCenterAlignCenterColumn,
.MainScreenComponentStyle-containerPanel
	> .UserInfoContainerStyle-blockLeftPanel
	> .UserInfoContainerStyle-userTitleContainer
	> .Common-flexCenterAlignCenter,
.MainScreenComponentStyle-containerPanel
	> .UserInfoContainerStyle-blockLeftPanel
	> .UserInfoContainerStyle-userTitleContainer
	> .Common-flexStartAlignCenter
	> .UserInfoContainerStyle-rankIconContainerClickable {
	margin: 0 0.2em !important;
	width: 5em !important;
	height: 5em !important;
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(0 0 0 / 10%) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.HeaderComponentStyle-iconCloseLinks:hover,
.HeaderComponentStyle-enableIconLinksComponentShowed:hover,
.Common-flexSpaceBetweenAlignCenterColumn.descriptionMode.blockCard:hover,
.Common-flexCenterAlignCenter.InvitationWindowsComponentStyle-backButton.Font-bold.Font-normal.Common-flexCenterAlignCenter.Common-displayFlex.Common-alignCenter:hover,
.Common-flexCenterAlignCenter.InvitationWindowsComponentStyle-inviteButton.Font-bold.Font-normal.Common-flexCenterAlignCenter.Common-displayFlex.Common-alignCenter:hover,
.InvitationWindowsComponentStyle-usersScroll > .Common-flexStartAlignStretch > .Common-whiteSpaceNoWrap:hover,
.ShopSelectedSectionComponentStyle-commonCard:hover,
.ShopSelectedSectionComponentStyle-limitedOffersCommon:hover,
.SuperMissionComponentStyle-descriptionSuperMission > div > .SuperMissionComponentStyle-buttonCollect:hover,
.TableMainQuestComponentStyle-cardRewardCompletedTable.TableMainQuestComponentStyle-commonTableMainQuest:hover,
.MainQuestComponentStyle-cardRewardCompleted.iconsMission.MainQuestComponentStyle-animationImgHover:hover,
.BasePaymentComponentStyle-commonContainerForChoiceAndButton
	> .BasePaymentComponentStyle-buttonContainer
	> .Common-flexCenterAlignCenter:hover,
.ChallengePurchaseComponentStyle-buttonBattlePass:hover,
.ProBattlesComponentStyle-rightPanel.Common-flexSpaceBetween
	> .MainSectionComponentStyle-rightBlock
	> .Common-flexStartAlignStretchColumn
	> div
	> .Common-flexCenterAlignCenter.Common-alignSelfFlexEnd:hover,
.BattleCreateComponentStyle-mainContainer
	> .ProBattlesComponentStyle-rightPanel.Common-flexSpaceBetween
	> .MainSectionComponentStyle-rightBlock
	> .JoinToBattleComponentStyle-buttonJoin:hover,
.BattleCreateComponentStyle-blockCard
	> .Common-flexStartAlignStretchColumn
	> .Common-flexCenterAlignCenterColumn:hover,
.BattleCreateComponentStyle-blockCard
	> .Common-flexStartAlignStretchColumn
	> .Common-backgroundImageCover:hover,
.BattleResultNavigationComponentStyle-commonBlockProBattleButton
	> .Common-flexCenterAlignCenter.BattleResultNavigationComponentStyle-buttonNextWithTimer.BattleResultNavigationComponentStyle-buttonWithTimer.Common-flexCenterAlignCenterColumn.Common-displayFlexColumn.Common-displayFlex.Common-alignCenter:hover,
tr.Common-flexStartAlignCenter.Common-flexWrapNowrap.modeLimitIcon:hover,
.ProBattlesComponentStyle-mainContainer
	> .Common-flexStartAlignCenterColumn:nth-child(1)
	.Common-flexStartAlignStartColumn
	> .Common-flexCenterAlignCenter:hover,
.ProBattlesComponentStyle-mainContainer
	> .Common-flexStartAlignCenterColumn:nth-child(1)
	.Common-flexStartAlignStartColumn
	> .BattleModesComponentStyle-blockModesFilter
	> .Common-flexCenterAlignCenter:hover,
.UsersTableStyle-containerBattleListCommands
	> .UsersTableStyle-scrollCommandTable
	> .Common-flexStartAlignStartColumn
	> .UsersTableStyle-rowBattle:hover,
#root
	> div
	> div.ProBattlesComponentStyle-mainContainer
	> div.Common-flexStartAlignCenterColumn
	> div.Common-flexStartAlignStretchColumn
	> div.Common-flexStartAlignCenter
	> div:hover,
.ProBattlesComponentStyle-mainContainer
	> .Common-flexStartAlignCenterColumn:nth-child(3)
	> .Common-scrollBarHoverVisible
	> .UsersTableStyle-containerBattleListCommands
	> .UsersTableStyle-scrollCommandTable
	> .Common-flexStartAlignStartColumn
	> .UsersTableStyle-row
	> .UsersTableStyle-rowBattle:hover,
.Common-flexStartAlignStretchColumn.ProBattleCommonStyleMobile-marginTop
	> .Common-backgroundImageCover.modeLimitIcon:hover,
.FriendListComponentStyle-stringCommunity
	> .FriendListComponentStyle-blockList:hover,
.BattleHudComponentStyle-hudButton:hover,
.MainScreenComponentStyle-containerPanel
	> .UserScoreComponentStyle-blockRightPanel
	> .BreadcrumbsComponentStyle-logout:hover,
.MainScreenComponentStyle-containerPanel
	> .UserScoreComponentStyle-blockRightPanel
	> .Common-flexCenterAlignCenter:hover,
.MainScreenComponentStyle-containerPanel
	> .UserInfoContainerStyle-blockLeftPanel
	> .UserInfoContainerStyle-userTitleContainer
	> .Common-flexCenterAlignCenterColumn:hover,
.MainScreenComponentStyle-containerPanel
	> .UserInfoContainerStyle-blockLeftPanel
	> .UserInfoContainerStyle-userTitleContainer
	> .Common-flexCenterAlignCenter:hover,
.MainScreenComponentStyle-containerPanel
	> .UserInfoContainerStyle-blockLeftPanel
	> .UserInfoContainerStyle-userTitleContainer
	> .Common-flexStartAlignCenter
	> .UserInfoContainerStyle-rankIconContainerClickable:hover {
        border: 0.15em solid rgb(255 255 255 / 50%) !important;
	transform: scale(0.95) !important;
}
.BasePaymentComponentStyle-commonContainerForChoiceAndButton
	> .BasePaymentComponentStyle-buttonContainer
	> .Common-flexCenterAlignCenter
	> .ShopBuyButtonComponentStyle-container
	> .Common-flexStartAlignCenter
	> div {
	filter: saturate(0) brightness(100);
}
.UserScoreComponentStyle-blockRightPanel > div > .HeaderCommonStyle-icons {
	border: none !important;
	background: transparent !important;
}
.ContainerInfoComponentStyle-rewardsMenuHotkey,
.HotKey-commonBlockForHotKey,
.ProBattlesComponentStyle-createBattleButton h3,
.Common-buttonQE span,
.Common-buttonQE:hover,
.Common-buttonQE,
.BreadcrumbsComponentStyle-backButton h3,
.Common-container .HotKey-commonBlockForHotKey,
.BattlePauseMenuComponentStyle-hotKey {
	display: none !important;
}
span.PrimaryMenuItemComponentStyle-discountNotification {
	width: 1em !important;
	height: 1em !important;
	background-color: rgb(255 255 255) !important;
	box-shadow:
		rgb(255 255 255 / 50%) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
}
.UserInfoContainerStyle-progressValue {
	text-shadow: rgb(0, 0, 0) 0em 0em 0.15em !important;
	color: rgb(255, 102, 102) !important;
}
.UserInfoContainerStyle-progressValue span {
	color: rgb(255 102 102 / 65%) !important;
}
.UserInfoContainerStyle-xpIcon {
	filter: saturate(0) !important;
}
.UserInfoContainerStyle-containerProgressMainScreen
	> .Common-flexStartAlignStartColumn {
	background-color: rgb(255 102 102 / 50%) !important;
}
.UserInfoContainerStyle-containerProgressMainScreen
	> .Common-flexStartAlignStartColumn:after {
	filter: drop-shadow(0 0 3px rgb(255 102 102)) !important;
	background-color: rgb(255 102 102) !important;
}
.InvitationWindowsComponentStyle-commonBorder,
.InvitationWindowsComponentStyle-commonBlockButton {
	background: transparent !important;
	border: none !important;
}
.InvitationWindowsComponentStyle-commonItem {
	left: 1em !important;
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
}
tr.BattleTabStatisticComponentStyle-selectedRowBackGround
	.BattleTabStatisticComponentStyle-nicknameCell
	div
	div
	.Common-flexStartAlignCenter
	.Common-whiteSpaceNoWrap {
	text-shadow: rgb(255, 102, 102) 0em 0em 0.15em !important;
	color: rgb(255, 102, 102) !important;
}
.ScrollingCardsComponentStyle-selectCard {
	border: none !important;
}
.FormatsSectionComponentStyle-card:hover,
.BattlePickComponentStyle-commonStyleBlock.cardImgEvents:hover,
.ScrollingCardsComponentStyle-scrollCard:hover {
    border: 0.15em solid rgb(255 255 255 / 50%) !important;
	transform: scale(0.97) !important;
}
.FormatsSectionComponentStyle-card,
.ScrollingCardsComponentStyle-scrollCard {
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
}
.FormatsSectionComponentStyle-card
	> .Common-backgroundImageCover.Common-backgroundImageCover.Common-backgroundImage {
	filter: saturate(0.5);
}
.FormatsSectionComponentStyle-card > .Common-flexCenterAlignCenterColumn {
	border: none !important;
	background: transparent !important;
}
.BattlePickComponentStyle-cardImgEvent,
.Common-backgroundImageCover {
	transform: none !important;
}
.BreadcrumbsComponentStyle-headerContainer {
	border-bottom: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
}
.BreadcrumbsComponentStyle-headerContainer
	> .Common-flexCenterAlignStart
	> .Common-flexStartAlignCenter
	> .UserInfoContainerStyle-containerRightBorder,
.BreadcrumbsComponentStyle-headerContainer
	> .Common-flexCenterAlignStart
	> .BreadcrumbsComponentStyle-backButton,
.BreadcrumbsComponentStyle-headerContainer
	> .Common-flexCenterAlignStart
	> .Common-flexStartAlignCenter
	> .UserInfoContainerStyle-rankIconContainerClickable,
.BreadcrumbsComponentStyle-headerContainer
	> .BreadcrumbsComponentStyle-rightButtonsContainer
	> .BreadcrumbsComponentStyle-exitGameButton,
.BreadcrumbsComponentStyle-headerContainer
	> .BreadcrumbsComponentStyle-rightButtonsContainer
	> .Common-flexCenterAlignCenter {
	margin: 0 0.15em !important;
	width: 5em !important;
	height: 5em !important;
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.Common-flexCenterAlignCenter.MainQuestComponentStyle-containerButtonStore.Common-flexCenterAlignCenterColumn.Common-displayFlexColumn.Common-displayFlex.Common-alignCenter:hover,
.Common-flexCenterAlignCenter.MainQuestComponentStyle-buttonContainer.Common-flexCenterAlignCenterColumn.Common-displayFlexColumn.Common-displayFlex.Common-alignCenter:hover,
.TableMainQuestComponentStyle-commonTableMainQuest.MainQuestComponentStyle-cardCommonLocked:hover,
.MainQuestComponentStyle-cardPlayCommon.TableMainQuestComponentStyle-commonTableMainQuest:hover,
.TableMainQuestComponentStyle-commonTableMainQuest.TableMainQuestComponentStyle-cardLockedTable:hover,
.MainQuestComponentStyle-commonCard.iconsMission.MainQuestComponentStyle-colorCardPlay.MainQuestComponentStyle-animationImgHover:hover,
.MainQuestComponentStyle-commonCard.iconsMission.TableMainQuestComponentStyle-cardLockedTable.MainQuestComponentStyle-animationImgHover:hover,
.MainQuestComponentStyle-cardPlay.iconsMission.MainQuestComponentStyle-animationImgHover:hover,
.LargeSingleCardComponentStyle-largeCardContainer
	> .LargeSingleCardComponentStyle-commonBlock
	> .Common-flexCenterAlignCenter:hover,
.ShopCategoryOfferSectionStyle-containerLimitOffers
	> .Common-flexCenterAlignCenter:hover,
.PromoCodesComponentStyle-controlsWrapper
	.PromoCodesComponentStyle-sendButton:hover,
.NewShopCommonComponentStyle-commonContainer
	> .NewShopCommonComponentStyle-commonBlockMenuShop
	> div
	> .Common-flexStartAlignCenter:hover,
.ShopCategoryOfferSectionStyle-containerCoin
	> .Common-flexStartAlignStart
	> .Common-flexCenterAlignCenterColumn:hover,
.ShopCategoryOfferSectionStyle-containerItem
	> .Common-flexStartAlignStart
	> .Common-flexCenterAlignCenterColumn:hover,
.ContainersComponentStyle-contentContainer
	> .ContainersComponentStyle-bottomBlock
	> .DeviceButtonComponentStyle-blockAlterations
	> .Common-flexCenterAlignCenter:hover,
.BattleResultNavigationComponentStyle-disabledButtonWithTimer:hover,
.BattlePauseMenuComponentStyle-redMenuButton:hover,
.BattlePauseMenuComponentStyle-menuButton:hover,
.NotificationViewStyle-commonBlockButtonYesNo
	> .Common-flexCenterAlignCenter:hover,
.DialogContainerComponentStyle-footerContainer
	> .Common-flexCenterAlignCenter:hover,
.TwitchSettingsRendersStyle-TwitchTextAndButtonBlock
	> .TwitchSettingsRendersStyle-button:hover,
.AccountSettingsComponentStyle-commonBlock
	> .AccountSettingsComponentStyle-mountTagButton
	> .AccountSettingsComponentStyle-buttonChangesOptions:hover,
.SecuritySettingsComponentStyle-about2FaTextAndButtonBlock
	> .SecuritySettingsComponentStyle-button:hover,
.GameSettingsStyle-notificationsTextAndButtonBlock
	> .GameSettingsStyle-button:hover,
.SettingsButtonsComponentStyle-containerGroupButton
	> .SettingsButtonsComponentStyle-buttonsWidthBackReset:hover,
.DropDownStyle-dropdownRoot
	> .VerticalScrollStyle-outerContainerStyle
	> .DropDownStyle-innerContainerStyle
	> div
	> .Common-flexStartAlignCenter:hover,
li.SettingsMenuComponentStyle-menuItemOptions:hover,
.GarageProtectionsComponentStyle-equipmentResistance:hover,
.PaintsCollectionComponentStyle-commonBlockForDescriptionAndButton
	> .TanksPartComponentStyle-tankPartUpgrades
	> .SquarePriceButtonComponentStyle-commonBlockButton:hover,
.TanksPartBaseComponentStyle-blockInsideContainerItem
	> .TanksPartComponentStyle-descriptionContainer
	> .GarageSuppliesComponentStyle-containerButtons
	> .SquarePriceButtonComponentStyle-commonBlockButton:hover,
.GarageCommonStyle-garageContainer > div > .Common-borderRadius4px:hover,
.TanksPartBaseComponentStyle-blockInsideContainerItem
	> .TanksPartComponentStyle-tankPartUpgrades
	> .TanksPartBaseComponentStyle-buttonsContainer
	> .SquarePriceButtonComponentStyle-commonBlockButton:nth-child(2):hover,
.TanksPartBaseComponentStyle-blockInsideContainerItem
	> .TanksPartComponentStyle-tankPartUpgrades
	> .TanksPartBaseComponentStyle-buttonsContainer
	> .SquarePriceButtonComponentStyle-commonBlockButton:nth-child(1):hover,
.GarageMenuComponentStyle-garageMenuContainer
	> .GarageCommonStyle-subMenu
	> .Common-flexSpaceBetweenAlignStartColumn
	> .GarageTurretsAlterationsComponentStyle-mountStandardButton
	> .AlterationButtonStyle-buyButton:hover,
.Common-scrollBarVisible
	> .SkinsComponentStyle-styleColumn
	> .SkinCellStyle-widthHeight:hover,
.DeviceButtonComponentStyle-blockAlterations
	> div
	> .SkinsIconComponentStyle-cellSkins
	> .Common-flexCenterAlignCenter:hover,
.DeviceButtonComponentStyle-blockAlterations
	> .Common-flexCenterAlignCenter:hover,
.Common-itemStyle:hover,
.MountedItemsStyle-commonForCellResistenceName.Common-backgroundImage:hover,
.MountedItemsStyle-commonBlockForTurretsHulls.MountedItemsComponentStyleMobile-commonBlockForTurretsHulls:hover,
.MountedItemsStyle-commonBlockForTurretsHulls.MountedItemsComponentStyleMobile-commonBlockForTurretsWeapon.MountedItemsComponentStyleMobile-commonBlockForTurretsHulls:hover,
.MountedItemsStyle-containerBlockGarage
	.MountedItemsStyle-commonBlockGrenades:hover,
.MountedItemsStyle-containerBlockGarage
	.MountedItemsStyle-commonBlockDrone:hover,
.SuppliesComponentStyle-blocksCell .SuppliesComponentStyle-cellAdd:hover,
.ContainersComponentStyle-possibleRewardsBlock
	> .ContainersComponentStyle-rewards
	> .Common-flexCenterAlignCenterColumn:hover,
.ContainerInfoComponentStyle-itemsContainer
	> .Common-flexStartAlignStretchColumn
	> .Common-flexCenterAlignCenterColumn:hover,
.ContainerInfoComponentStyle-rewardsMenu > .Common-flexCenterAlignCenter:hover,
.BattleResultNavigationComponentStyle-disabledButton:hover,
.BattleResultNavigationComponentStyle-button:nth-child(2):hover,
.FriendListComponentStyle-buttonAddFriends:hover,
.MatchmakingWaitComponentStyle-cancelButton:hover,
.BreadcrumbsComponentStyle-headerContainer
	> .Common-flexCenterAlignStart
	> .Common-flexStartAlignCenter
	> .UserInfoContainerStyle-containerRightBorder:hover,
.BreadcrumbsComponentStyle-headerContainer
	> .Common-flexCenterAlignStart
	> .BreadcrumbsComponentStyle-backButton:hover,
.BreadcrumbsComponentStyle-headerContainer
	> .Common-flexCenterAlignStart
	> .Common-flexStartAlignCenter
	> .UserInfoContainerStyle-rankIconContainerClickable:hover,
.BreadcrumbsComponentStyle-headerContainer
	> .BreadcrumbsComponentStyle-rightButtonsContainer
	> .BreadcrumbsComponentStyle-exitGameButton:hover,
.BreadcrumbsComponentStyle-headerContainer
	> .BreadcrumbsComponentStyle-rightButtonsContainer
	> .Common-flexCenterAlignCenter:hover {
        border: 0.15em solid rgb(255 255 255 / 50%) !important;
	transform: scale(0.95) !important;
}
.BreadcrumbsComponentStyle-rightButtonsContainer
	> div
	> .HeaderCommonStyle-icons {
	border: none !important;
	background: transparent !important;
}
.BreadcrumbsComponentStyle-headerContainer > .Common-flexCenterAlignStart {
	align-items: center !important;
}
.BreadcrumbsComponentStyle-headerContainer
	> .Common-flexCenterAlignStart
	> .Common-flexCenterAlignCenter {
	display: none;
}
.LobbyLoaderComponentStyle-container {
	background: var(--color) !important;
	backdrop-filter: blur(5px) saturate(0.5);
}
.LobbyLoaderComponentStyle-loaderContainer {
	display: none !important;
}
.LobbyLoaderComponentStyle-container > .LobbyLoaderComponentStyle-logo {
	animation: logoAnim 1s linear infinite;
	animation-fill-mode: both;
	position: relative;
}
@keyframes logoAnim {
	0% {
		filter: drop-shadow(0 0 30px white);
		transform: scale(0.8);
		opacity: 0;
	}
	20% {
		opacity: 0.5;
	}
	40% {
		opacity: 0.8;
	}
	50% {
		opacity: 1;
	}
	60% {
		opacity: 0.8;
	}
	80% {
		opacity: 0.5;
	}
	100% {
		filter: drop-shadow(0 0 5px rgb(255, 102, 102));
		transform: scale(1);
		opacity: 0;
	}
}
.UserInfoContainerStyle-blockForIconTankiOnline img {
	animation: UserInfoAnim 2s linear infinite;
	animation-fill-mode: both;
	position: relative;
}
@keyframes UserInfoAnim {
	0% {
		filter: drop-shadow(0 0 5px rgb(255, 102, 102));
	}
	50% {
		filter: drop-shadow(0 0 30px rgb(255, 5, 45));
	}
	100% {
		filter: drop-shadow(0 0 5px rgb(255, 102, 102));
	}
}
.ContextMenuStyle-menu,
.TooltipStyle-tooltip {
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color-two) !important;
	backdrop-filter: blur(5px) !important;
}
.ContextMenuStyle-menu > .Common-flexStartAlignCenter,
.ContextMenuStyle-menuItemRank {
	background: transparent !important;
}
.UserScoreComponentStyle-coinsContainer {
	border: none !important;
}
#modal-root > div > .Common-flexSpaceBetweenAlignStartColumn, .DialogContainerComponentStyle-container {
	outline: none !important;
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
}
.BattlePickComponentStyle-modeCards {
	padding: 1em !important;
	border-radius: 1.6em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
	height: unset !important;
	width: unset !important;
}
.BattlePickComponentStyle-commonStyleBlock.cardImgEvents {
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
}
#modal-root > div {
	background: transparent !important;
}
.MatchmakingWaitComponentStyle-contentContainer,
.MatchmakingWaitComponentStyle-cancelButton {
	height: 4.5em !important;
}
.MatchmakingWaitComponentStyle-container > div {
	background-image: none !important;
}
.MatchmakingWaitComponentStyle-cancelButton span {
	margin: 0.5em 1em !important;
}
.MatchmakingWaitComponentStyle-cancelButton {
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	height: unset !important;
	width: unset !important;
	padding: 0.5em !important;
}
.MatchmakingWaitComponentStyle-container > div {
	margin: 0 1em !important;
	background-image: none;
}
.MatchmakingWaitComponentStyle-container {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(15px) !important;
	width: 34.25em;
	height: 5em;
	position: absolute;
	top: 0.3em;
	right: 50%;
	transform: translateX(50%);
}
.SuppliesComponentStyle-screenShotButtonOpen {
	filter: drop-shadow(0 0 3px rgb(255, 102, 102)) !important;
	background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA20lEQVR4nO2UQQrCQAxF/zG0XshqS0/gzl3BpXUlggheqrZn0RPYunFjZeALIslgzbjSQDb56X/TJh3gF2IBoFNyaTWfAbh5AE6bv2s2AXBSjHKhP1d6nUcsATTzjedQa+WZo9T8EK3RaT4+QAagBnBhVgDSUIC9Z8g7KyBj7cqVjJgFa05LLICaNWf4GgW1gwXQsjYU+gfUmhCASOgfUTtbAJXnE62olRZA+jTkQhny1AIAV1Fb0y0C/WgJt6VllsLJTYA+ofpol133QYqXXUwhhPm41zv/A9+MO74ysZQOexG2AAAAAElFTkSuQmCC') !important;
	width: 2em !important;
	height: 2em !important;
}
.NotificationViewStyle-commonBlockNotification {
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
    border-right: none !important;
}
.NotificationViewStyle-commonBlockNotification,
.NotificationViewStyle-positionBlock {
	border-top-left-radius: 1em !important;
	border-bottom-left-radius: 1em !important;
}
.NotificationViewStyle-commonBlockButtonYesNo
	> .Common-flexCenterAlignCenter
	span {
	color: white !important;
}
.NotificationViewStyle-progressNotification {
	rotate: -90deg !important;
	filter: brightness(5) blur(1px) saturate(0) !important;
	border-right: 1em solid rgb(0, 25, 38) !important;
	border-left: 1em solid rgb(75, 41, 57) !important;
	margin-top: unset !important;
	width: 46% !important;
	height: 1em !important;
	position: absolute !important;
	bottom: 6em !important;
	left: -8em;
	border-radius: 1em !important;
	box-shadow: rgb(0, 0, 0) 0 0 0.5rem 0 !important;
}
.NotificationViewStyle-commonBlockButtonYesNo > .Common-flexCenterAlignCenter {
	border-radius: 1.1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(0 0 0 / 10%) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.NotificationViewStyle-positionBlock {
	border: none !important;
}
.FriendListComponentStyle-scrollCommunity {
    animation: SaleByKitStyle 1s ease forwards !important;
    height: 47em !important;
    padding: 1em !important;
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
    min-height: 5em !important;
}
.FriendListComponentStyle-stringCommunity
	> .FriendListComponentStyle-blockList {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.FriendListComponentStyle-buttonAddFriends,
.SearchInputComponentStyle-searchInput > .Font-normal {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.MenuComponentStyle-decorLineMenu {
	background: transparent !important;
}
.FriendListComponentStyle-containerButtonFriends
	> .ButtonComponentStyle-disabled {
	border-radius: 1.3em !important;
	box-shadow:
		rgb(255 102 102 / 20%) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(255 102 102 / 30%) !important;
}
.FriendListComponentStyle-buttonCloseAddFriends {
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.MenuComponentStyle-battleTitleCommunity {
	height: 3em !important;
	padding: unset !important;
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
}
.Common-menuItemActive {
	display: none !important;
}
.MenuComponentStyle-battleTitleCommunity .Common-displayFlex {
	align-items: center !important;
}
.MenuComponentStyle-mainMenuItem.Common-activeMenu {
	color: rgb(255, 102, 102) !important;
	height: 2em !important;
}
.MenuComponentStyle-mainMenuItem:hover {
	color: rgb(255, 102, 102) !important;
}
.MenuComponentStyle-mainMenuItem .Common-activeMenu,
.MenuComponentStyle-mainMenuItem.Common-activeMenu .Common-activeMenu {
	background-color: rgb(255 102 102 / 15%) !important;
}
.MenuComponentStyle-mainMenuItem .Common-activeMenu,
.MenuComponentStyle-mainMenuItem.Common-activeMenu .Common-activeMenu,
.MenuComponentStyle-mainMenuItem.Common-activeMenu .Common-activeMenu:hover {
	color: rgb(255, 102, 102) !important;
}
.ReceivedRewardsComponentStyle-stringRewards .Common-flexCenterAlignCenterColumn.RewardCardComponentStyle-fastAppearance,
.AnimationOpenContainerComponentStyle-rewardContainer {
	border-radius: 1.6em !important;
	border: 0.15em solid rgb(70 70 70) !important;
	box-shadow: var(--color-two) 0rem 0rem 1.5rem 0.1rem !important;
	background-color: var(--color) !important;
	backdrop-filter: blur(5px) !important;
	border-top-left-radius: 0.5em !important;
}
.ContainersComponentStyle-possibleRewardsBlock
	> .ContainersComponentStyle-rewards
	> .Common-flexCenterAlignCenterColumn {
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
	border-radius: 1em !important;
	border: 0.15em solid rgb(70 70 70) !important;
	box-shadow: var(--color-two) 0rem 0rem 1.5rem 0.1rem !important;
	background-color: var(--color) !important;
	backdrop-filter: blur(5px) !important;
	border-top-left-radius: 0.5em !important;
}
.ContainerInfoComponentStyle-itemsContainer
	> .Common-flexStartAlignStretchColumn
	> .Common-flexCenterAlignCenterColumn {
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
	border-radius: 1.6em !important;
	border: 0.15em solid rgb(70 70 70) !important;
	box-shadow: var(--color-two) 0rem 0rem 1.5rem 0.1rem !important;
	background-color: var(--color) !important;
	backdrop-filter: blur(5px) !important;
	border-top-left-radius: 0.5em !important;
}
.AnimationOpenContainerComponentStyle-rewardContainer
	.Common-flexCenterAlignCenterColumn {
	border-radius: 1.4em !important;
	box-shadow: none !important;
}
.ContainersComponentStyle-rightPane,
.ContainersComponentStyle-leftPane {
	background: transparent !important;
}
.ItemDescriptionComponentStyle-descriptionBlockDevice.ItemDescriptionComponentStyle-descriptionBlockDevice
	> .ItemDescriptionComponentStyle-captionDevice.Common-flexSpaceAroundAlignStretchColumn.Common-displayFlexColumn.Common-displayFlex.Common-alignStretch.ContainersComponentStyle-description,
.ContainersComponentStyle-infoPanel
	> .ContainersComponentStyle-possibleRewardsBlock {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
}
.ContainersComponentStyle-contentContainer .ContainersComponentStyle-infoPanel {
	padding: 1em !important;
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
}
.BattleResultNavigationComponentStyle-commonBlockBattleResultNavigation
	> .Common-flexCenterAlignCenter
	> .BattleResultNavigationComponentStyle-buttonsQE {
	width: unset !important;
}
.BattleResultNavigationComponentStyle-commonBlockBattleResultNavigation {
	border: none !important;
}
.BattleResultHeaderComponentStyle-resultBg {
	display: none !important;
}
.BattleResultHeaderComponentStyle-descriptionVictory
	> .BattleResultHeaderComponentStyle-flashLight {
	background: transparent !important;
}
.BattleResultQuestProgressComponentStyle-container {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
}
.BattleResultNavigationComponentStyle-disabledButton {
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.BattleResultNavigationComponentStyle-button:nth-child(2) {
	border-radius: 1em !important;
	border: 0.15em solid rgb(0 255 25 / 10%) !important;
	box-shadow:
		rgb(0 255 25 / 10%) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(0 255 25 / 10%) !important;
    transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.BattleResultUserInfoComponentStyle-progressVictoryContainer {
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
}
.GarageMenuComponentStyle-garageMenuContainer
	> .GarageCommonStyle-subMenu
	> .Common-flexSpaceBetweenAlignStartColumn,
.ContainerInfoComponentStyle-lootBoxDescriptionContainer {
	background: transparent !important;
	border: none !important;
}
.ContainersComponentStyle-navigationBlockForCategories {
	border: none !important;
}
.ContainerInfoComponentStyle-rewardsMenu {
	margin-top: 1em !important;
	padding: 0.5em !important;
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
}
.ContainerInfoComponentStyle-rewardsMenu > .Common-flexCenterAlignCenter {
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
}
.ScrollBarStyle-leftScrollArrow,
.ScrollBarStyle-rightScrollArrow {
	background: transparent !important;
}
.SuppliesComponentStyle-decorLine {
	background: transparent !important;
}
.SuppliesComponentStyle-blocksCell {
	bottom: 0.5em !important;
	padding: 1em !important;
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
}
.SuppliesComponentStyle-blocksCell .SuppliesComponentStyle-cellAdd {
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.TankParametersStyle-leftParamsContainer.GarageCommonStyle-animatedBlurredLeftBlock {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
}
.MountedItemsStyle-container.GarageCommonStyle-animatedBlurredRightBlock {
	width: 23.5em !important;
	padding: 1em !important;
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
}
.MountedItemsStyle-commonBlockForTurretsHulls.MountedItemsComponentStyleMobile-commonBlockForTurretsHulls,
.MountedItemsStyle-commonBlockForTurretsHulls.MountedItemsComponentStyleMobile-commonBlockForTurretsWeapon.MountedItemsComponentStyleMobile-commonBlockForTurretsHulls,
.MountedItemsStyle-containerBlockGarage .MountedItemsStyle-commonBlockGrenades,
.MountedItemsStyle-containerBlockGarage .MountedItemsStyle-commonBlockDrone {
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.GarageMainScreenStyle-blockParameters
	> div
	> .CssCommonAnimations-appearFromLeft
	> div {
	z-index: 1 !important;
}
.MountedItemsStyle-commonForCellResistenceName.Common-backgroundImage {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.ListItemsComponentStyle-itemsListContainer.CssCommonAnimations-appearFromBottom .Common-flexCenterAlignCenter,
.ListItemsComponentStyle-itemsListContainer.CssCommonAnimations-appearFromBottom {
	background: transparent !important;
}
.Common-scrollBarVisible
	> .SkinsComponentStyle-styleColumn
	> .SkinCellStyle-widthHeight,
.Common-itemStyle {
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
	border-top-left-radius: 0.5em !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.TanksPartComponentStyle-descriptionContainer
	> .ItemDescriptionComponentStyle-descriptionBlockDevice
	> .ItemDescriptionComponentStyle-captionDevice,
.TanksPartComponentStyle-commonBlockDescriptionDevices
	> .TanksPartComponentStyle-blockForImageResistanceModule,
.TanksPartBaseComponentStyle-blockInsideContainerItem
	.TanksPartComponentStyle-descriptionContainer
	.GarageCommonStyle-animatedBlurredLeftBlock
	> div:nth-child(2),
.GarageCommonStyle-animatedBlurredLeftBlock
	> .ItemDescriptionComponentStyle-descriptionBlockDevice
	> .ItemDescriptionComponentStyle-captionDevice {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
}
.DeviceButtonComponentStyle-blockAlterations
	> div
	> .SkinsIconComponentStyle-cellSkins
	> .Common-flexCenterAlignCenter,
.DeviceButtonComponentStyle-blockAlterations > .Common-flexCenterAlignCenter {
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
@media screen and (min-width: 1280px), (min-height: 950px) {
	.GarageMainScreenStyle-blockParameters {
		width: calc(100% - 10em) !important;
	}
}
.TanksPartBaseComponentStyle-blockInsideContainerItem
	> .TanksPartComponentStyle-descriptionContainer
	> .GarageSuppliesComponentStyle-containerButtons
	> .SquarePriceButtonComponentStyle-commonBlockButton
	> div
	> .SquarePriceButtonComponentStyle-paddingPriceStyleButton
	> .Font-medium,
.GarageMenuComponentStyle-garageMenuContainer
	> .GarageCommonStyle-subMenu
	> .Common-flexSpaceBetweenAlignStartColumn
	> .GarageTurretsAlterationsComponentStyle-mountStandardButton
	> .AlterationButtonStyle-buyButton
	> .Common-flexEndAlignEnd
	> .Font-bold {
	color: rgb(255 255 255) !important;
}
.GarageMenuComponentStyle-garageMenuContainer
	> .GarageCommonStyle-subMenu
	> .Common-flexSpaceBetweenAlignStartColumn
	> .GarageTurretsAlterationsComponentStyle-mountStandardButton
	> .AlterationButtonStyle-buyButton {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.TanksPartBaseComponentStyle-blockInsideContainerItem
	> .TanksPartComponentStyle-descriptionContainer
	> .GarageSuppliesComponentStyle-containerButtons
	> .SquarePriceButtonComponentStyle-commonBlockButton,
.TanksPartBaseComponentStyle-blockInsideContainerItem
	> .TanksPartComponentStyle-tankPartUpgrades
	> .TanksPartBaseComponentStyle-buttonsContainer
	> .SquarePriceButtonComponentStyle-commonBlockButton:nth-child(1) {
	border-radius: 1.3em !important;
	border: 0.15em solid rgb(0 125 175 / 35%) !important;
	box-shadow:
		rgb(0 125 175 / 35%) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(0 125 175 / 35%) !important;
	backdrop-filter: blur(5px) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.TanksPartBaseComponentStyle-blockInsideContainerItem
	> .TanksPartComponentStyle-tankPartUpgrades
	> .TanksPartBaseComponentStyle-buttonsContainer
	> .SquarePriceButtonComponentStyle-commonBlockButton:nth-child(1)
	> div
	> .SquarePriceButtonComponentStyle-paddingPriceStyleButton
	> .Font-medium {
	color: rgb(255 255 255) !important;
}
.PaintsCollectionComponentStyle-commonBlockForDescriptionAndButton
	> .TanksPartComponentStyle-tankPartUpgrades
	> .SquarePriceButtonComponentStyle-commonBlockButton,
.TanksPartBaseComponentStyle-blockInsideContainerItem
	> .TanksPartComponentStyle-tankPartUpgrades
	> .TanksPartBaseComponentStyle-buttonsContainer
	> .SquarePriceButtonComponentStyle-commonBlockButton:nth-child(2) {
	border-radius: 1.3em !important;
	border: 0.15em solid rgb(118 255 51 / 20%) !important;
	box-shadow:
		rgb(118 255 51 / 10%) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: radial-gradient(
			50% 100% at 50% 0%,
			rgb(118 255 51 / 50%) 0%,
			rgb(118 255 51 / 10%) 100%
		)
		var(--color-two);
	backdrop-filter: blur(5px) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.TanksPartBaseComponentStyle-blockInsideContainerItem
	> .TanksPartComponentStyle-tankPartUpgrades
	> .TanksPartBaseComponentStyle-buttonsContainer
	> .SquarePriceButtonComponentStyle-commonBlockButton:nth-child(2)
	> .Common-flexEndAlignEnd
	> .Font-bold {
	color: rgb(118, 255, 51) !important;
}
.GarageCommonStyle-garageContainer > div > .Common-borderRadius4px {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	backdrop-filter: blur(5px) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.GarageCommonStyle-animatedBlurredLeftBlock,
.TanksPartBaseComponentStyle-buttonsContainer.MountedItemsComponentStyleMobile-buttonsContainer.GarageCommonStyle-animatedBlurredRightBlock,
.Common-displayFlexColumn.GarageCommonStyle-animatedBlurredRightBlock {
	backdrop-filter: unset !important;
}
.MainScreenComponentStyle-containerPanel:after {
    content: 'by Principal';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -1.5em;
    color: rgb(255 255 255 / 50%);
}
.GarageProtectionsComponentStyle-equipmentResistance {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.Common-boxShadowForButton {
	border-radius: 0.7em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.FriendListComponentStyle-buttonDisableAdd img,
.TanksPartBaseComponentStyle-blockInsideContainerItem
	> .TanksPartComponentStyle-tankPartUpgrades
	> .TanksPartBaseComponentStyle-buttonsContainer
	> .SquarePriceButtonComponentStyle-commonBlockButton:nth-child(1)
	> .Common-flexCenterAlignCenter
	> .Common-backgroundImage,
.TanksPartBaseComponentStyle-blockInsideContainerItem
	> .TanksPartComponentStyle-tankPartUpgrades
	> .TanksPartBaseComponentStyle-buttonsContainer
	> .SquarePriceButtonComponentStyle-commonBlockButton:nth-child(1)
	> div
	> .SquarePriceButtonComponentStyle-paddingPriceStyleButton
	> .GarageCommonStyle-iconCoinSmall.Common-backgroundImageContain {
	filter: saturate(0) brightness(100) !important;
}
#modal-root > div > .Common-displayFlex {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
}
.DropDownStyle-dropdownRoot > .DropDownStyle-dropdownControl {
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
}
.DropDownStyle-dropdownRoot
	> .VerticalScrollStyle-outerContainerStyle
	> .DropDownStyle-innerContainerStyle
	> div
	> .Common-flexStartAlignCenter {
	margin: 0.2em 0 !important;
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.Common-flexCenterAlignCenter.JoinToBattleComponentStyle-buttonJoin.ProBattleCommonStyleMobile-buttonContainer span {
    color: white;
}
.DropDownStyle-dropdownRoot > .VerticalScrollStyle-outerContainerStyle {
	margin-top: 0.5em !important;
	padding: 0.7em 0.5em !important;
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(19 19 19) !important;
	scrollbar-color: rgb(188 188 188) transparent !important;
}
.CheckBoxStyle-checkbox > label > .Common-displayFlex {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.CheckBoxStyle-checkbox > label > .Common-displayFlex::before {
    filter: saturate(0) !important;
}
.SettingsComponentStyle-scrollingMenu {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
	scrollbar-color: rgb(188 188 188) transparent !important;
}
.SettingsMenuComponentStyle-slideMenuOptions {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
}
.SettingsMenuComponentStyle-yellowLineMenuOptions {
	display: none !important;
}
.SettingsMenuComponentStyle-slideMenuOptions {
	display: none !important;
}
.SettingsMenuComponentStyle-activeItemOptions span {
	color: rgb(255, 102, 102);
}
li.SettingsMenuComponentStyle-menuItemOptions {
	height: 3em;
	margin: 0.3em 0 !important;
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color) !important;
	backdrop-filter: blur(5px) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
li.SettingsMenuComponentStyle-activeItemOptions {
	box-shadow:
		rgb(255 102 102 / 10%) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(255 102 102 / 10%) !important;
	backdrop-filter: blur(5px) !important;
}
.AccountSettingsComponentStyle-blockTextOptions h1,
.InputRangeComponentStyle-blockSoundVolume p span {
	color: rgb(255, 102, 102) !important;
}

.SettingsButtonsComponentStyle-containerGroupButton
	> .SettingsButtonsComponentStyle-buttonsWidthBackReset {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.Common-flexCenterAlignCenter.SettingsButtonsComponentStyle-buttonsWidthBackReset
	span {
	color: white !important;
}
.TwitchSettingsRendersStyle-TwitchTextAndButtonBlock
	> .TwitchSettingsRendersStyle-button,
.GameSettingsStyle-notificationsTextAndButtonBlock > .GameSettingsStyle-button {
	border-radius: 1.3em !important;
	border: 0.15em solid rgb(118 255 51 / 35%) !important;
	box-shadow:
		rgb(118 255 51 / 35%) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(118 255 51 / 35%) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.SecuritySettingsComponentStyle-about2FaTextAndButtonBlock
	> .SecuritySettingsComponentStyle-button {
	border-radius: 1.3em !important;
	border: 0.15em solid rgb(255 102 102 / 40%) !important;
	box-shadow:
		rgb(255 102 102 / 40%) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(255 102 102 / 40%) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.AccountSettingsComponentStyle-commonBlock
	> .AccountSettingsComponentStyle-mountTagButton
	> .AccountSettingsComponentStyle-buttonChangesOptions {
	border-radius: 1.3em !important;
	border: 0.15em solid rgb(255 204 0 / 40%) !important;
	box-shadow:
		rgb(255 204 0 / 40%) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(255 204 0 / 40%) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.SettingsComponentStyle-scrollingMenu * .ButtonComponentStyle-disabled {
	border: 0.15em solid rgb(170 170 170 / 20%) !important;
	border-radius: 1.3em !important;
}
.AccountSettingsComponentStyle-blockInputEmail input {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(255 255 255 / 10%) !important;
}
.KeyMappingWithIconComponentStyle-overdrives,
.KeyMappingWithIconComponentStyle-commonBlockSupplies,
.KeyboardSettingsComponentStyle-keyInput {
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
}
.DialogContainerComponentStyle-footerContainer
	> .DialogContainerComponentStyle-enterButton {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(118 255 51 / 25%) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.DialogContainerComponentStyle-footerContainer
	> .Common-flexCenterAlignCenter:nth-child(1) {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.DialogContainerComponentStyle-container
	*
	.DialogContainerComponentStyle-enterButton
	span {
	color: white !important;
}
.FriendListComponentStyle-containerButtonFriends
	> .FriendListComponentStyle-buttonNoFoundUser {
	border-radius: 1.3em !important;
	border: 0.15em solid rgb(235 87 87 / 50%) !important;
	box-shadow:
		rgb(235 87 87 / 50%) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(235 87 87 / 50%) !important;
	backdrop-filter: blur(5px) !important;
}
.FriendListComponentStyle-containerButtonFriends
	> .FriendListComponentStyle-buttonFoundAdd {
	border-radius: 1.3em !important;
	border: 0.15em solid rgb(116 186 61 / 50%) !important;
	box-shadow:
		rgb(116 186 61 / 50%) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgb(116 186 61 / 50%) !important;
	backdrop-filter: blur(5px) !important;
}
.TableMainQuestComponentStyle-cardRewardGivenTable,
.MainQuestComponentStyle-cardRewardGiven,
.PaintsCollectionComponentStyle-commonBlockPaint
	> .Common-flexCenterAlignCenter {
	box-shadow: none !important;
}
.SaleByKitStyle-commonBlockModal > .Common-alignContentStart > .SaleByKitStyle-commonCard:hover {
    border: 0.15em solid rgb(255 255 255 / 50%) !important;
    transform: scale(0.95) !important;
}
.SaleByKitStyle-commonBlockModal > .Common-alignContentStart > .SaleByKitStyle-commonCard {
    transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: rgba(0, 0, 0, 0.1) !important;
}
.SaleByKitStyle-commonBlockModal, .ChatComponentStyle-chatWindow, .NewsComponentStyle-newsWindow, .TutorialModalComponentStyle-modalContainer > .TutorialModalComponentStyle-contentWrapper, .TutorialModalComponentStyle-modalContainer > .ItemDescriptionComponentStyle-commonBlockModal {
    border-radius: 1.3em !important;
    border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
    box-shadow: rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem, transparent 0rem 0rem 0rem 0rem inset !important;
    background: var(--color) !important;
    backdrop-filter: blur(5px) !important;
    transform: translate(50%, 50%);
    right: 50% !important;
    bottom: 50% !important;
    height: 90% !important;
    left: unset !important;
}
.BattlePauseMenuComponentStyle-redMenuButton,
.BattlePauseMenuComponentStyle-menuButton {
	margin: 2px 0px !important;
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.BattlePauseMenuDialogComponentStyle-wrapper {
	padding: 20px !important;
	max-width: 27em !important;
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgb(0, 0, 0) 0rem 0rem 0.5rem 0.2rem,
		transparent 0rem 0rem 0rem 0rem inset;
	background: var(--color) !important;
	backdrop-filter: blur(5px);
}
.BattlePauseMenuDialogComponentStyle-content {
	padding-left: 0em !important;
	padding-right: 0em !important;
}
.BattlePauseMenuComponentStyle-disabledButton {
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(255, 255, 255, 0.2) !important;
}
.BattlePauseMenuComponentStyle-blackGlobalWrapper {
	background: transparent !important;
}
.BattleResultNavigationComponentStyle-disabledButtonWithTimer {
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(118, 255, 51, 0.25) !important;
}
.ContainersComponentStyle-contentContainer
	> .ContainersComponentStyle-bottomBlock
	> .DeviceButtonComponentStyle-blockAlterations
	> .Common-flexCenterAlignCenter
	span {
	color: rgb(255 255 255) !important;
	margin: unset !important;
}
.SettingsComponentStyle-commonBlock
	> .SecuritySettingsComponentStyle-containerFormOptions
	> .SecuritySettingsComponentStyle-about2FaTextAndButtonBlock
	> .SecuritySettingsComponentStyle-button
	span,
.SettingsComponentStyle-commonBlock
	> .TwitchSettingsRendersStyle-twitchForm
	> .TwitchSettingsRendersStyle-TwitchTextAndButtonBlock
	> .TwitchSettingsRendersStyle-button
	span,
.AccountSettingsComponentStyle-commonBlock
	> .AccountSettingsComponentStyle-mountTagButton
	> .AccountSettingsComponentStyle-buttonChangesOptions
	span,
.GameSettingsStyle-notificationsTextAndButtonBlock
	> .GameSettingsStyle-button
	span {
	color: rgb(255 255 255);
}
.ContainersComponentStyle-contentContainer
	> .ContainersComponentStyle-bottomBlock
	> .DeviceButtonComponentStyle-blockAlterations
	> .Common-flexCenterAlignCenter {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(118, 255, 51, 0.35) !important;
	box-shadow:
		rgba(118, 255, 51, 0.35) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(118, 255, 51, 0.35) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.NewShopCommonComponentStyle-commonContainer {
	background: radial-gradient(
		50% 100% at 50% 100%,
		#0d0d0d 0%,
		#0d0d0d 100%
	) !important;
}
.NewShopCommonComponentStyle-gradient {
	background-image: none !important;
}
.ShopCategoryOfferSectionStyle-containerCoin
	> .Common-flexStartAlignStart
	> .Common-flexCenterAlignCenterColumn,
.ShopCategoryOfferSectionStyle-containerItem
	> .Common-flexStartAlignStart
	> .Common-flexCenterAlignCenterColumn, .ShopCategoryOfferSectionStyle-containerKitOffers > .Common-flexStartAlignStart > .Common-flexCenterAlignCenterColumn {
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color-two) !important;
	backdrop-filter: blur(5px) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
.NewShopCommonComponentStyle-commonContainer
	> .NewShopCommonComponentStyle-commonBlockMenuShop {
	padding: 0.5em !important;
	border-radius: 1.3em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: var(--color-two) !important;
	backdrop-filter: blur(5px) !important;
}
.NewShopCommonComponentStyle-commonContainer
	> .NewShopCommonComponentStyle-commonBlockMenuShop
	> div
	> .Common-flexStartAlignCenter {
	margin: 0.5em 0 !important;
	border-radius: 1em !important;
	border: 0.15em solid rgba(170, 170, 170, 0.25) !important;
	box-shadow:
		rgba(0, 0, 0, 0.5) 0rem 0rem 0.5rem 0.1rem,
		transparent 0rem 0rem 0rem 0rem inset !important;
	background: rgba(0, 0, 0, 0.1) !important;
	transition: transform 0.2s ease-in-out, border 0.2s ease-in-out !important;
}
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');

.gearscore__value {
    font-family: 'Rubik', sans-serif !important;
}

@keyframes PrincipalBackground {
    0% {
        background-position: 0% 0%;
    }
    25% {
        background-position: 100% 0%;
    }
    50% {
        background-position: 200% 0%;
    }
    75% {
        background-position: 300% 0%;
    }
    100% {
        background-position: 400% 0%;
    }
}

.gearscore__value {
    background: linear-gradient(90deg, #f3a683, #f7d794, #778beb, #e77f67, #cf6a87, #c44569, #e15f41, #546de5, #f5cd79, #f19066, #f3a683);
    background-size: 400% 100% !important;
    animation: PrincipalBackground 8s linear infinite !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
}

.size-2 .slider__item-holder {
    padding: 1rem !important;
}

.generic-box {
	border: 2px solid rgb(170 170 170 / 75%) !important;
    padding: 1rem !important;
    border-radius: 15px !important;
    box-shadow: rgb(0 0 0) 0rem 0rem 0.5rem 0.2rem, transparent 0rem 0rem 0rem 0rem inset;
    background: rgb(0 0 0 / 50%) !important;
    backdrop-filter: blur(5px);
}

.size-3 .slider__item-holder {
    padding: 0.5rem !important;
}

.navbar {
    border-bottom: 2px solid rgb(170 170 170 / 75%) !important;
    backdrop-filter: blur(5px);
    box-shadow: rgb(0 0 0) 0rem 0rem 0.5rem 0.2rem, transparent 0rem 0rem 0rem 0rem inset;
    background-color: rgb(0 0 0 / 50%) !important;
    width: unset !important;
    background: none;
}

.progress-bar__bar {
    height: 100% !important;
    border-radius: 10px !important;
    background: rgb(169 169 169) !important;
}

.progress-bar {
    border: 1px solid hsla(0, 0%, 66.7%, .75) !important;
    border-radius: 14px !important;
    background: rgb(0 0 0 / 100%) !important;
}

.parallax {
    background-color: rgb(0 0 0 / 100%) !important;
}

.lang-selector__list {
    border: 1px solid hsla(0, 0%, 66.7%, .75) !important;
    border-radius: 10px !important;
    background: rgb(0 0 0 / 75%) !important;
    box-shadow: 0 2px 7px rgba(0, 0, 0, .25) !important;
}

.generic-selector__itself {
    background: rgb(0 0 0 / 75%) !important;
    border: 1px solid hsla(0, 0%, 66.7%, .75) !important;
    border-radius: 10px !important;
}

.generic-input {
    background-image: none !important;
    background: rgb(0 0 0 / 75%) !important;
}
.form-element {
    border: 1px solid hsla(0, 0%, 66.7%, .75) !important;
    border-radius: 10px !important;
    box-shadow: 0 2px 7px rgba(0, 0, 0, .25) !important;
    background: rgb(0 0 0 / 75%) !important;
}

.my-favorites__list {
    box-shadow: 0 0 100px 7px rgba(0, 0, 0, .75) !important;
    background: rgb(0 0 0 / 80%) !important;
    border: 1px solid hsla(0, 0%, 66.7%, .75) !important;
    border-radius: 10px !important;
}
`;

const body = document.body || document.getElementsByTagName('body')[0],
	style = document.createElement('style');
style.className = 'css';
if (style.styleSheet) {
	style.styleSheet.cssText = css;
} else {
	style.appendChild(document.createTextNode(css));
}
body.appendChild(style);
const appendChild = HTMLElement.prototype.appendChild;
HTMLElement.prototype.appendChild = function (element) {
	element?.classList?.forEach((className) => {
		if (className.includes('ksc-')) return;
		const appendChildEvent = new CustomEvent(className, {
			bubbles: true,
			detail: element,
		});
		document.dispatchEvent(appendChildEvent);
	});
	return appendChild.apply(this, arguments);
};

(() => {
	var tankResistances = [
		{
			name: 'immortality',
			shitPicture:
				'https://tankionline.com/play/static/images/all_resistance.b45eae39.svg',
			picture:
				'https://tankionline.com/play/static/images/all_resistance.05f196ef.svg',
		},
		{
			name: 'Броненосец',
			shitPicture:
				'https://tankionline.com/play/static/images/crit_resistance.7fb68893.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/crit_resistance.3f4d1cc2.svg',
		},
		{
			name: 'Огнемёт',
			shitPicture:
				'https://tankionline.com/play/static/images/firebird_resistance.785a9d6b.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/firebird_resistance.00ac2221.svg',
		},
		{
			name: 'Фриз',
			shitPicture:
				'https://tankionline.com/play/static/images/freeze_resistance.33bdf642.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/freeze_resistance.d26eb338.svg',
		},
		{
			name: 'Изида',
			shitPicture:
				'https://tankionline.com/play/static/images/isis_resistance.30a69ffc.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/isis_resistance.5b05887a.svg',
		},
		{
			name: 'Тесла',
			shitPicture:
				'https://tankionline.com/play/static/images/tesla_resistance.3e686c8e.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/tesla_resistance.663d3597.svg',
		},
		{
			name: 'Молот',
			shitPicture:
				'https://tankionline.com/play/static/images/hammer_resistance.6c549d29.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/hammer_resistance.28e73097.svg',
		},
		{
			name: 'Твинс',
			shitPicture:
				'https://tankionline.com/play/static/images/twins_resistance.ad189f61.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/twins_resistance.fbbc4d72.svg',
		},
		{
			name: 'Рикошет',
			shitPicture:
				'https://tankionline.com/play/static/images/ricochet_resistance.8247beaa.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/ricochet_resistance.69c6c7ee.svg',
		},
		{
			name: 'Смоки',
			shitPicture:
				'https://tankionline.com/play/static/images/smoky_resistance.845afc14.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/smoky_resistance.c4c202ca.svg',
		},
		{
			name: 'Страйкер',
			shitPicture:
				'https://tankionline.com/play/static/images/rocket_launcher_resistance.b7dfd64f.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/rocket_launcher_resistance.5772cbaa.svg',
		},
		{
			name: 'Вулкан',
			shitPicture:
				'https://tankionline.com/play/static/images/vulcan_resistance.824f6f0e.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/vulcan_resistance.9aebf267.svg',
		},
		{
			name: 'Гром',
			shitPicture:
				'https://tankionline.com/play/static/images/thunder_resistance.6d7f4531.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/thunder_resistance.9dab2abf.svg',
		},
		{
			name: 'Скорпион',
			shitPicture:
				'https://tankionline.com/play/static/images/scorpio_resistance.e8f1787f.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/scorpio_resistance.d40f8fbb.svg',
		},
		{
			name: 'Рельса',
			shitPicture:
				'https://tankionline.com/play/static/images/railgun_resistance.636a554f.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/railgun_resistance.7577c7a1.svg',
		},
		{
			name: 'Магнум',
			shitPicture:
				'https://tankionline.com/play/static/images/artillery_resistance.9b4cbc34.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/artillery_resistance.bd49fc96.svg',
		},
		{
			name: 'Гаусс',
			shitPicture:
				'https://tankionline.com/play/static/images/gauss_resistance.bb8f409c.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/gauss_resistance.acf358ed.svg',
		},
		{
			name: 'Шафт',
			shitPicture:
				'https://tankionline.com/play/static/images/shaft_resistance.0778fd3e.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/shaft_resistance.7e58bc19.svg',
		},
		{
			name: 'Мины',
			shitPicture:
				'https://tankionline.com/play/static/images/mine_resistance.dd581c90.svg',
			picture:
				'https://tankionline.com/play/static/images/resistances/mine_resistance.0d0d3c98.svg',
		},
	];
	new MutationObserver((e) => {
		e.forEach(({ addedNodes: e, target: t }) => {
			e.length &&
				('tbody' === t.localName ||
					t.className.includes('BattleComponentStyle-canvasContainer')) &&
				t.querySelectorAll('.Common-maskImage').forEach((e) => {
					let t = window
							.getComputedStyle(e)
							.getPropertyValue('-webkit-mask-image')
							?.split('"')?.[1],
						a = tankResistances.find(({ shitPicture: e }) => t === e);
					a &&
						(e.style.cssText = `-webkit-mask-image: none;background: url(${a.picture}) center center / 1em 1em no-repeat;width: 1em;height: 1em;`);
				});
		});
	}).observe(document, { childList: !0, subtree: !0 });
})();

(() => {
	'use strict';
	const ranks = [
		{ rankName: 'Recruit', experience: 0 },
		{ rankName: 'Private', experience: 100 },
		{ rankName: 'Gefreiter', experience: 500 },
		{ rankName: 'Corporal', experience: 1500 },
		{ rankName: 'Master Corporal', experience: 3700 },
		{ rankName: 'Sergeant', experience: 7100 },
		{ rankName: 'Staff Sergeant', experience: 12300 },
		{ rankName: 'Master Sergeant', experience: 20000 },
		{ rankName: 'First Sergeant', experience: 29000 },
		{ rankName: 'Sergeant-Major', experience: 41000 },
		{ rankName: 'Warrant Officer 1', experience: 57000 },
		{ rankName: 'Warrant Officer 2', experience: 76000 },
		{ rankName: 'Warrant Officer 3', experience: 98000 },
		{ rankName: 'Warrant Officer 4', experience: 125000 },
		{ rankName: 'Warrant Officer 5', experience: 156000 },
		{ rankName: 'Third Lieutenant', experience: 192000 },
		{ rankName: 'Second Lieutenant', experience: 233000 },
		{ rankName: 'First Lieutenant', experience: 280000 },
		{ rankName: 'Captain', experience: 332000 },
		{ rankName: 'Major', experience: 390000 },
		{ rankName: 'Lieutenant Colonel', experience: 455000 },
		{ rankName: 'Colonel', experience: 527000 },
		{ rankName: 'Brigadier', experience: 606000 },
		{ rankName: 'Major General', experience: 692000 },
		{ rankName: 'Lieutenant General', experience: 787000 },
		{ rankName: 'General', experience: 889000 },
		{ rankName: 'Marshal', experience: 1000000 },
		{ rankName: 'Field Marshal', experience: 1122000 },
		{ rankName: 'Commander', experience: 1255000 },
		{ rankName: 'Generalissimo', experience: 1400000 },
		{ rankName: 'Legend', experience: 1600000 },
	];

	new MutationObserver((mutations) => {
		mutations.forEach(({ target }) => {
			if (
				target.className === 'wrapper' ||
				target.className === 'BattleComponentStyle-canvasContainer'
			) {
				const userNameRank = target.querySelector(
					'.UserInfoContainerStyle-userNameRank'
				);
				const progressValue =
					Number(
						target
							.querySelector('.UserInfoContainerStyle-progressValue')
							?.textContent.split('/')
							.at(0)
							?.replaceAll(' ', '')
							.trim()
					) || 0;
				if (!progressValue) return;

				if (!userNameRank?.textContent.includes('|')) {
					userNameRank?.prepend(`${getRank(progressValue)} | `);
				}
			}
		});
	}).observe(document, { childList: true, subtree: true });

	function getRank(experience) {
		return ranks.reduce(
			(currentRank, { rankName, experience: rankExperience }, index) => {
				const nextRank = ranks[index + 1];
				if (!nextRank && experience > rankExperience) {
					return `${ranks.at(-1).rankName} ${Math.ceil((experience - 1600000) / 200000)}`;
				}
				return !currentRank && experience < nextRank?.experience
					? rankName
					: currentRank;
			},
			''
		);
	}
})();

(function() {
    let contrastEnabled = localStorage.getItem('contrastEnabled') === 'true';
    let contrastValue = parseInt(localStorage.getItem('contrastValue')) || 100;
    let hueRotateValue = parseInt(localStorage.getItem('hueRotateValue')) || 0;
    let brightnessValue = parseInt(localStorage.getItem('brightnessValue')) || 100;
    let sepiaValue = parseInt(localStorage.getItem('sepiaValue')) || 0;
    let saturateValue = parseInt(localStorage.getItem('saturateValue')) || 100;
    let invertValue = parseInt(localStorage.getItem('invertValue')) || 0;

    const menu = document.createElement('div');
    menu.style.position = 'absolute';
    menu.style.width = '60em';
    menu.style.top = '0.5em';
    menu.style.right = '50%';
    menu.style.transform = 'translate(50%, -30em) scale(0.7)';
    menu.style.opacity = '0';
    menu.style.zIndex = '1000';
    menu.style.display = 'block';
    menu.style.backgroundColor = 'var(--color)';
    menu.style.color = 'white';
    menu.style.borderRadius = '1.2em';
    menu.style.backdropFilter = 'blur(15px)';
    menu.style.padding = '10px';
    menu.style.border = '0.15em solid rgba(170, 170, 170, 0.25)';
    menu.style.boxShadow = 'rgb(0 0 0 / 75%) 0rem 0rem 2.5rem 1.1rem';
    menu.style.transition = 'transform 1s ease, opacity 1s ease';

menu.innerHTML = `
<div id="title" style="width: 10em; margin: 0px 0px 10px 0px;">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAvwAAABgCAYAAABhY6aeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABAMSURBVHhe7d17yGVVHcZxpxlHTR2R0kKUSirzklpJpFlomEp/WFGamVM2ylhpEKRF2QUyr9VfomPGWF7SDJQiSAfTIrqBhZqWhWnhpVLIyxjO6Fzent/eZ+X2vPucfb+stb4feDhrn/fc3rPWXvu313ve912ysLCwDQAAAIAwvWRyCQAAACBAFPwAAABAwCj4AQAAgIBR8AMAAAABo+AHAOSpcnxYMrkEAIzQvAndvna88qSylYwuzyuPKz9S3qE08SGlaT8/pZyklNXG2LLnPEHBeLUxtkj/sT47UdlWKcOOF3cpeY9Fhs0W5WnlDmW10tSdSt7zkGHj+vn3yulK23ZXvq7cr2xQ8l4D6T61+3lewW8PvFSxlRsyvtiBeDflvco65SpluVKV9bGNg7znqBJ7HEtZ9pzLlLzHKhu7f5XnRP/cHJPXf2ScMXZp+5YdXMqw27cxj5D2Y/2yQjlEWaNY4d9kkcjGRd7zkGHj+vktymWKFYRNFwOdUxU70TtHea2yvZL3Gkj3me5n25/fqRRyB2P4bQdlpfJjZTu7ogJ31tiUO/Msy26/OW3WZs9X5TnRvzbGFoZRZW6w/ZB/6jJ+dsy3wv9q5Wi7AkGyfraCsI1+/qLyLWWPZAtj4vZnW/A9xq6Yp6jgr7pqi+HYmd9Riq3gVDXEiZ87U23CrTRhvNyqBPzh+qtqv9HP/ni1crGyT7JVDf3sD+vni5R9k63qVilnKbskWxgrtz/P7eeigst27CGKQdRjH3F5n/KxZKsc619fJ3DGJjAOrO775yDlc2kTATtYsaK96vHyNcqnlV2TLYzdgcrZaTNf0QDwuRiMle2cH06bpbXVx32PFcbn+NE/frJ+o+/CZx/3ODJtImDHKkekzdI+oNT5CRCG8x7lXWlzsaKCn0nfT/sph6fNQj73L2MT6E7V/Yv90T+vUA5TqvQd/ewf189VHKrY7wfCH9bPb0+bi5Up+OEfW+W3z3SFzsYnYxQA6rG/9raXwkeywma/77Zn2ixt78kl/GL7c66igt8wEfhp7P1GoQ6MG/toHDjGIw9/sCUwFPwAAABAwCj4w+TLR13aGFusQgLdYN+KA/0ch6r9zLjw08x+Kyr4rSCj4PdPLH3G2PQDBw4/sX8BgF9qF/zwU9UTtbYKsiqPQxEYD/o6fPSxvzixAyJAwR+mKhO4uy0HbHSFgsI/1mdV+o1jiZ/YN4GwzNyniybprcqWtAmPWIdb340ZJxhxqFo4Yniuv6rMIezP/nH9XHX/ZH/2E/to+GzfnFmzFxX89nUGiZ/KTsp2O+vjIfqZsRU++9Nu/Hm38LHC7x83/zIPA2GwfXlm7TdvkraD9CbFVnnsAWKLfd9Fybvf0LHXZWd4G5Qy7D6m70mfg0wcbCxuVqbHqS9pKu8x+0rd+crYpd2nLOtjO15MPxYZf55Xqqjbz3XGYswJUd73SdqL7Vu2f+ZasrBgt5lpuWITeZWJH36xwvtk5TJlJ7uipvXKmco1yVaxk5Q1yopkq57nlFXKdckW0Fx2zrtVOUpp4j5lv7SZLLC4idkHc1eLAHTmEOUE5TTF/nN+G76jrE6bpdyjHJA2G3tAuVJ5MNl68Tw4a47JWxQcYmFyo3LL5NJrRQU/4rBSseJ7x2SrnjoF/+XKzslWPbYDnqpQ8KML65Sj02Zt2YIfAKo4QrlCeV2y1cxQBf9tynHKs8kWBsPnLjGUNs7UOVtFV+wjjW2MUXuMlyrMtQCq+oVyiVL1Y1d5+l4dNw8rX1Eo9keAgxCcISaDIZ4TKMN+96CtE0p7LD4WCaAqW3iwjxZa4eyj+5XfpE0MjYIfPrOCjFV+dKWtscUYBVCHLRb8VWljhX8Ij0wuMQIU/GhrlZ3VeiAfBT+AuljYQiso+DEUThAQCw7WAJrwdQ5h7hsRCn64wnuIHbNp0c9kgi61cVLKGAUADI6CHwC6RdEPABgUBT/4aA3QLQp+AMCgKPgRAk5aMFZW7FPwA2iCYxwao+AHgG5R8AOIEScqI0LBDwAAME5Wp1E4ozEKfrD6CHSH/QtAE8cpe6TNRoaYi+xEZYe0iaHFWPBztrzYEO9HG8/pJjD6E12gWIfD4hiGYOPueGWXZMs/m5SNaRNDK5rElilLJ5dWVI2xsHKvy74Xe60Wa7u469z3kf2es200R+ENxMnt+9l51y7HNie444WLe73uNbu4123Xbzu5tOuRcu+TO6a69wvtWaFconww2fKTjQ0WTrqVnc9sn7T3PNeShYW5ffFu5RxlV2Wrkn3gruU9R/Y6157+BmzbJcu27T7u+v8q5yk3J1vxssFxsnKZsqNdUdMzypnK1clWsZXKGqXJc1ofrlZuUGx8Am1apxydNmv7k3JA2gze9cpByuZkazGbf928nTeXT5uew4vkPU7edWUeN3s/myOvVc5NtvB95UDFHVOn32N33fT1TtV+zZq+b95zO7Oev655j5f3Pbnrsl/Lu86x61zseLan8nKlLVcop6fNUu5Rms5djypPKK4Ite8r71jt3lu7dDF52/Pkva9m1vtdZN5tytx/2rzXn308156+nCX7Ptk8fL6ySFHBf5JypbJdshWWp5UzFJu8YmYD5KPKpQoFP/ACCv5q7lX2T5vBsePgqWkzencrVvDDL0MU/OjfWuW0tPliM5f+M+wzWKFxZzmzVqJiNO/Mc6xcP/r42oHQbJlchijE4yDiYeP3kbSJwM2ch4sK/rmfBwIAYCLkE28WFV7Ae+Ef+1jNHWkTgZu5fxYV8/Z1flEpfL5P4EWfbwPQPQpBYJxuV25Jmwhc7YLf7sgKP8aKAgNAH5hr4Cv7LP7X0iYiULvgD5V7Q5jEw8AKPwD0g+OmP/6tfF75S7KFqJUp+CmmwhZC/zJGAXSJIhe+sSL/40rsf3ocE0UFvxVSIRdTTOJ+o/8AAHjBg8pZyr7KL+0KRGVmXVSm4OfvmwMAivCTNmBc2Cfxf7Gv8MNvrPAD6APHQfhib+Wbiv3Tv8MVjpNxmTlXxfpLuxgeB1AAALqxn/I9pel/C4dfan+kx3B2GAcf+5mxCaAPzDXw0R7Khco+yVY1LMoFJvaCnwENAABCdaBydtpEzPhID4bECRcAHzBXwVdW5x2rHJlslceYD0yMK/w2iN1AZkC3q+/3kx+zA+gDf60OPttNOSxtIlYxrvBni0QKRgBAEY4V8NlyZc+0WRoLooFZsrAwt09XKt9Rtku26tmk/E3ZmGy9eIW9iToTcPZ5n1HOVW5PtuJ2inKZskOyVY+9n2co1yRbxU5W1ig7JVv12JhapVyfbAHtWqc0/QsX9qfxDkibwfuj8sa0WdujypNpM5njp48X0/N+9muunb3OTG877rHsMq9t7L6blR8oF9kV2OYepemYfkh5Qsnrm7zrrE9m9WNWth+zl1l511Ux/Trc9vRlWbNuv5diK/NNX69zufLJtFnK1cqbFHt9tjhsP+XaMtk27nVlX3/2tU5/X9mvTX9PZb426zbTt29D9rXntYuuy5p+fXY7ey/t0r6W/br9SdUVabO2K5VT0+aL9VHwr1esELw22cIYWcFvxff2yVY9VQv+jyg2AVHwY6wo+Ktpo+C/SrH5aAjZA+/cA2Pk2ij41yqnpU3MYAtwFyirJ+2mvq18Im16r0yRX+Y2dc2bH6a/5l6HXbqvZW/jTqbMvcr+abO2mQV/0Ud67EXN+8bKauMx0B36B8AYDDkXueMd82H3+J2IYhuUzyg/TLaQld1XZ8XGWFfJez6Xae767P2y7Hon7/6t6eMz/Esn6fJsC8PrdKDOwJjC2DFGq+FYEYcYf3+wrhuUx9MmAma/Z9Gpvna67Oe+EK6qfcyYAJDlVsEQtuyqJua7WaHgD9/zk8umZi6YlCn425h82bkBAIDhpA5YrNP9oo8VflZsAPiIj5b0j2MFAHSgj4KfCRx5bFwwNgAAADrW12f4KezQFVZhAQAA5ujjM/wU+/GgrwE0wRwCIFadLmD2tcKPcbODrK8HWlb4AQCYj2Nl5Cj44TM7SWESQ1cYWwCAvrDCD8xAwQ+MB/siymKsAIsNWvCzU6IrbYyt7ZVXpU0AAeCYA3SDfWvcXq/skDa7wQo/fGYT2NvSJoAA2DGp04MeGqNwBNp3jNLpAiYFP3x3tHJe2gTguU3KhrQJAFE4VPmU0mlNXubB+TNpGLNtlS8oNynvtyuAEWH+rCZ7TFqqsJoMoCs2v5RJV45V1io/Ud5gV7Rg5jGHFX6EwHZIK/ZvVLaSTvOUcqICdOEUxY01W+3fktkm3eQSBeGrWrjeqeSNlyqxfXi98nRO7FhSlLz7ZVPl9tnb/Uu5S7HvsUymb3u38piSfcwyeUbJzmk/VVYpL1M610fB3+XZEdoTwkqkOxsn3WW5YiuvQBfyxhzpNvbHD4Bpy5S88VIl9hg7KytyskuJ5N0vmyq3z97ulcpBFXNwJgcquyvZxyyTnRSru7PvUW9Y4QdQxfOKrVAA8J8t9LA/x6HOoh4fSQwIBT+GwkTip15XJAAAg2G+98/M2oqCH0BVnKwBYaCgwyyMjcCUKfjpdAAOiwRAWDiBjwP9HLk+Dt42yBho42b9w4kdymCcAED4qNsCwwo/2sQEET6bD5gTymOfABZjv+gf73kcZvYzP56HQxEHtI+DLAAfMXf5aWYtV1Tws5oHIFZtzH3/nFwCY0VhF4eq/bx5cgm/sMKPQn2f2HEyiRg8MrmMAfuzf+z/ajycNhG4qvvng5NL+OWhyeUirPBjKKwq+SmWfmtj3ntW+V3aBEbpCeWOtFkac3ccfqtsSJvwxGPKzGNOmRV+dm4ATkzzQdPv9R7l2rQZBY4Vftmq3Kb8LNnqFwuJ/av6nt+k/DltwhO3K7emzcX6KvjZucfN+od+Rhmx/Bv+pmP5P8o3lI3JFjA+dytfTZuIQNU57e/KpcqTyRbG7i7lS2kzX1HBb0VgG7+4wcrPuDXtZ7u/S1m2umSBP1z/Vulnn9Udn3aA/LJyY7IVj1jGRQismPus8kCyVU0b/cxYqWao9+u7ysXK08kWxuofytnK3N+7KCr4l05SlxukZX6SgGG4Pq7bz9mJqEo/2/PxEwH/xHKgtvFZdd6yE4T7lTOVNXZFRJYpzPPjZ2PUPrO/Uvm5XVFDG/3M3F+N7V9N1X3PL1Ts5JC/ODY+tj//QbH9ufCjeUU77qZJ7CBfNfZCXDuWjwH4yAobW923v9aQ7b8yyfaxpcpPCWxMTN+fjDfZvorhz7XZ9/nc5LIo9su59ynnK29WrlNiY++DjYvp94YMH9t31ytW6J+uvFX5tVKXzd15z1Mldryh6C+vbh2Wjb3nda1VbNxcoNhPheyjinnPQbqP25+t0D9DOUT5lVJoycKC3X+m7RU+gxo2K/iXK24HBpCyBRGbXFHMrUDGcDIYO/aL/tnJEcdnNFJU8AMAAADwGJ+5BAAAAAJGwQ8AAAAEjIIfAAAACBgFPwAAABCsbbb5H23GJqTVZNY5AAAAAElFTkSuQmCC" style="filter: drop-shadow(0 0 3px white); max-width: 100%; height: auto;">
</div>
<span id="author" style="text-align: right; margin: 0px 0px 10px 0px; font-size: 0.8em; color: #ccc; position: absolute; top: 10px; right: 10px;">
    by <a href="https://www.youtube.com/@PrincipalZXC" target="_blank">Principal</a>
</span>
<label for="contrastSlider">Contrast: <span id="contrastValue">${contrastValue}%</span></label>
<input type="range" id="contrastSlider" min="0" max="200" value="${contrastValue}">
<br>
<label for="hueRotateSlider">Hue Rotate: <span id="hueRotateValue">${hueRotateValue}deg</span></label>
<input type="range" id="hueRotateSlider" min="0" max="360" value="${hueRotateValue}">
<br>
<label for="brightnessSlider">Brightness: <span id="brightnessValue">${brightnessValue}%</span></label>
<input type="range" id="brightnessSlider" min="0" max="200" value="${brightnessValue}">
<br>
<label for="sepiaSlider">Sepia: <span id="sepiaValue">${sepiaValue}%</span></label>
<input type="range" id="sepiaSlider" min="0" max="100" value="${sepiaValue}">
<br>
<label for="saturateSlider">Saturate: <span id="saturateValue">${saturateValue}%</span></label>
<input type="range" id="saturateSlider" min="0" max="200" value="${saturateValue}">
<br>
<label for="invertSlider">Invert: <span id="invertValue">${invertValue}%</span></label>
<input type="range" id="invertSlider" min="0" max="100" value="${invertValue}">
<br>
<div id="description" style="margin-top: 5px; font-size: 0.85em; text-align: right; cursor: default;">
    <span id="descriptionText" style="cursor: pointer; color: rgb(175, 255, 112);">Description</span>
</div>
<div id="info" style="display: none; margin-top: 10px; color: black;">
    <span id="back" style="color: red; cursor: pointer;">Back</span>
    <p>This script will help you customize the picture in the game for yourself and provide a comfortable game.</p>
</div>
`;

    const style = document.createElement('style');
    style.innerHTML = `
        input[type="range"] {
            -webkit-appearance: none;
            width: 100%;
            height: 8px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 5px;
            outline: none;
        }
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            border-radius: 20px;
            width: 25px;
            height: 14px;
            background: white;
            cursor: pointer;
        }
        input[type="range"]::-moz-range-thumb {
            border-radius: 20px;
            width: 25px;
            height: 14px;
            background: white;
            cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    function applyStyles() {
        const body = document.body;
        if (contrastEnabled) {
            body.style.filter = `
                contrast(${contrastValue}%)
                hue-rotate(${hueRotateValue}deg)
                brightness(${brightnessValue}%)
                sepia(${sepiaValue}%)
                saturate(${saturateValue}%)
                invert(${invertValue}%)
            `;
        } else {
            body.style.filter = "none";
        }
    }

    function toggleContrast() {
        contrastEnabled = !contrastEnabled;
        localStorage.setItem('contrastEnabled', contrastEnabled);
        applyStyles();
    }

   function toggleMenu() {
    if (menu.style.opacity === '1') {
        menu.style.opacity = '0';
        menu.style.transform = 'translate(50%, -30em) scale(0.7)';
    } else {
        menu.style.opacity = '1';
        menu.style.transform = 'translate(50%, 0) scale(1)';
    }
}

    document.addEventListener("keydown", (event) => {
        if (event.altKey && event.key === '8') {
            toggleContrast();
        } else if (event.altKey && event.key === '9') {
            toggleMenu();
        }
    });

    document.body.appendChild(menu);

document.getElementById('author').addEventListener('click', (event) => {
    event.preventDefault();
    window.open('https://www.youtube.com/@PrincipalZXC', '_blank');
});

document.getElementById('descriptionText').addEventListener('click', () => {
    document.getElementById('info').style.display = 'block';
    document.getElementById('description').style.display = 'none';
});

document.getElementById('back').addEventListener('click', () => {
    document.getElementById('info').style.display = 'none';
    document.getElementById('description').style.display = 'block';
});

document.getElementById('contrastSlider').addEventListener('input', (event) => {
    contrastValue = event.target.value;
    localStorage.setItem('contrastValue', contrastValue);
    applyStyles();
    document.getElementById('contrastValue').textContent = `${contrastValue}%`;
});
document.getElementById('hueRotateSlider').addEventListener('input', (event) => {
    hueRotateValue = event.target.value;
    localStorage.setItem('hueRotateValue', hueRotateValue);
    applyStyles();
    document.getElementById('hueRotateValue').textContent = `${hueRotateValue}deg`;
});
document.getElementById('brightnessSlider').addEventListener('input', (event) => {
    brightnessValue = event.target.value;
    localStorage.setItem('brightnessValue', brightnessValue);
    applyStyles();
    document.getElementById('brightnessValue').textContent = `${brightnessValue}%`;
});
document.getElementById('sepiaSlider').addEventListener('input', (event) => {
    sepiaValue = event.target.value;
    localStorage.setItem('sepiaValue', sepiaValue);
    applyStyles();
    document.getElementById('sepiaValue').textContent = `${sepiaValue}%`;
});
document.getElementById('saturateSlider').addEventListener('input', (event) => {
    saturateValue = event.target.value;
    localStorage.setItem('saturateValue', saturateValue);
    applyStyles();
    document.getElementById('saturateValue').textContent = `${saturateValue}%`;
});
document.getElementById('invertSlider').addEventListener('input', (event) => {
    invertValue = event.target.value;
    localStorage.setItem('invertValue', invertValue);
    applyStyles();
    document.getElementById('invertValue').textContent = `${invertValue}%`;
});

    applyStyles();
})();
