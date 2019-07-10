import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';

const footer = document.createElement('footer');
footer.classList.add('footer');

footer.innerHTML = `
<div class="row footer bg-light">
<div class="col">

<p class="text-center">Follow us:
<a class="social-icon" href="https://www.facebook.com/">
<img src="${facebook}" class="social-icon social" />
</a>

<a class="social-icon" href="https://www.instagram.com/">
  <img src="${instagram}" class="social-icon social" />
</a>
<a class="social-icon" href="https://twitter.com/">
  <img src="${twitter}" class="social-icon social" />
</a>
</div>
<div class="col">
<p class="text-center">Copyright &copy; ${new Date().getFullYear()}</p>
</div>
<div class="col">
<p class="text-center">Powered by: <a href="#">Power</a></p>
</div>
</div>`

 export {footer}
