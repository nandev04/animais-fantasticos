import ScrollSuave from './modules/scrollSuave.js';
import initAnimaScroll from './modules/animacaoScroll.js';
import Accordion from './modules/animaAccordion.js';
import TabNav from './modules/navegacaoTab.js';
import initModal from './modules/modal.js';
import initToolTip from './modules/toolTip.js';
import initDropdownMenu from './modules/dropdownMenu.js';
import initMenuMobile from './modules/menuMobile.js';
import initHorarioFuncionamento from './modules/horarioFuncionamento.js';
import initFetchAnimais from './modules/fetchAnimais.js';
import initFetchBitcoin from './modules/fetchBitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
const accordion = new Accordion('[data-anime="accordion"] dt', 'ativo');
accordion.init();
const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();




initAnimaScroll();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initHorarioFuncionamento();
initFetchAnimais();
initFetchBitcoin();
