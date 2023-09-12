import ScrollSuave from './modules/scrollSuave.js';
import initAnimaScroll from './modules/animacaoScroll.js';
import Accordion from './modules/animaAccordion.js';
import TabNav from './modules/navegacaoTab.js';
import Modal from './modules/modal.js';
import ToolTip from './modules/toolTip.js';
import initDropdownMenu from './modules/dropdownMenu.js';
import initMenuMobile from './modules/menuMobile.js';
import initHorarioFuncionamento from './modules/horarioFuncionamento.js';
import fetchAnimais from './modules/fetchAnimais.js';
import initFetchBitcoin from './modules/fetchBitcoin.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();
const accordion = new Accordion('[data-anime="accordion"] dt', 'ativo');
accordion.init();
const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();
const modal = new Modal('[data-modal="container"]', '[data-modal="abrir"]', '[data-modal="fechar"]')
modal.init();
const tooltip = new ToolTip('[data-toolTip]')
tooltip.init();






initAnimaScroll();
initDropdownMenu();
initMenuMobile();
initHorarioFuncionamento();
fetchAnimais('animaisapi.json', '.numeros-grid');
initFetchBitcoin();
