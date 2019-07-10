import '../styles/bootstrap.min.css';
import '../styles/style.css';
import {header} from './header';
import {footer} from './footer';


const pageLoad = () => {
  const mainContainer = document.getElementById('content');
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(header);




  body.appendChild(footer);
}

export {pageLoad}
