import '../styles/bootstrap.min.css';
import '../styles/style.css';
import {header} from './header';
import {wellcome} from './wellcome';
import {restaurant} from './restaurant';
import {reservation} from './reservation';
import {ourLocation} from './ourLocation';
import {menu} from './menu';

import {footer} from './footer';


const pageLoad = () => {
  const mainContainer = document.getElementById('content');
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(header);
  // mainContainer.appendChild(wellcome);
    // mainContainer.appendChild(restaurant);
    // mainContainer.appendChild(menu);
      // mainContainer.appendChild(reservation);
      mainContainer.appendChild(ourLocation);
  body.appendChild(footer);
}


export {pageLoad}
