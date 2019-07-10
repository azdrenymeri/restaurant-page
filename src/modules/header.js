import logo from '../images/logo.png'
const header = document.createElement('nav');
header.classList.add('navbar','navbar-expand-lg','navbar','fixed-top','navbar-light','bg-light');

header.innerHTML = `
<a class="navbar-brand" href="#Welcome">
    <img src="${logo}" width="50" height="50" class="d-inline-block" alt=""> Italian Restaurant
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#Welcome">Welcome</a>
        </li>
      <li class="nav-item">
        <a class="nav-link" href="#Restaurant">Restaurant</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Menu">Menu</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Reservation">Reservation</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#OurLocation">Our Location</a>
      </li>
    </ul>
</div>
`

export {header}
