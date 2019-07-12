import '../styles/bootstrap.min.css';
import '../styles/style.css';
import {header} from './header';
import {wellcome} from './wellcome';
import {restaurant} from './restaurant';
import {reservation} from './reservation';
import {ourLocation, initMap} from './ourLocation';
import {menu} from './menu';
import {footer} from './footer';


const pageLoad = () => {

   const body = document.getElementsByTagName('body')[0];
   const mainContainer = document.getElementById('content');

   body.appendChild(header);
   mainContainer.appendChild(wellcome);
   body.appendChild(footer);

}

const navItems = header.getElementsByClassName('nav-item');

for(let item of navItems){
  item.addEventListener('click',(event) => {
      console.log(event.target.getAttribute('id')+" clicked");
      setTab(event.target.getAttribute('id'));
  });
}


const setTab = (tab) => {

const  container = document.getElementById('content');
  container.innerHTML = '';

  switch (tab) {
    case 'wellcomeTab':
        container.appendChild(wellcome);
      break;
    case 'restaurantTab':
        container.appendChild(restaurant);
      break;
    case 'menuTab':
        container.appendChild(menu);
      break;
    case 'reservationTab':
        container.appendChild(reservation);
      break;
    case 'ourLocationTab':
          container.appendChild(ourLocation);
          initMap();
      break;
    default:
      container.appendChild(wellcome);
  }

}


export {pageLoad}
