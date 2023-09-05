import ScrollSuave from './modules/scrollSuave.js';
import initAnimaScroll from './modules/animacaoScroll.js';
import initAccordion from './modules/animaAccordion.js';
import initTabNav from './modules/navegacaoTab.js';
import initModal from './modules/modal.js';
import initToolTip from './modules/toolTip.js';
import initDropdownMenu from './modules/dropdownMenu.js';
import initMenuMobile from './modules/menuMobile.js';
import initHorarioFuncionamento from './modules/horarioFuncionamento.js';
import initFetchAnimais from './modules/fetchAnimais.js';
import initFetchBitcoin from './modules/fetchBitcoin.js';

const scrollSuave = new ScrollSuave();
scrollSuave.init('[data-menu="suave"] a[href^="#"]');

initAnimaScroll();
initAccordion();
initTabNav();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initHorarioFuncionamento();
initFetchAnimais();
initFetchBitcoin();
