import menu from "./modules/menu";
import modal from "./modules/modal";
import slider from "./modules/slider";
import timer from "./modules/timer";
import maskPhone from "./modules/maskPhone";
import validation from "./modules/validation";
import sendForm from "./modules/sendForm";
import calc from "./modules/calc";
import scroll from "./modules/scroll";
import fancybox from "./modules/fancybox";


fancybox();
scroll();
calc();
slider();
modal();
menu();
timer('20 december 2022', 0);
timer('20 december 2022', 1);
maskPhone('[name="phone"]');
validation();
sendForm({
    formId: 'action-form',
    someElement: [
        {
            type: 'block',
            id: 'calc'
        }
    ] 
});
sendForm({
    formId: 'action-form2',
    someElement: [
        {
            type: 'block',
            id: 'calc'
        }
    ] 
});
sendForm({
    formId: 'callback-form',
    someElement: [
        {
            type: 'block',
            id: 'calc'
        }
    ] 
});
sendForm({
    formId: 'application-form',
    someElement: [
        {
            type: 'block',
            id: 'calc'
        }
    ] 
});