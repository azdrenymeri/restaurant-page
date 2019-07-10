import locationImg from '../images/location.jpg';
import cusineImg from '../images/cuisine.jpg';

const restaurant  = document.createElement('div');
restaurant.classList.add('container');
restaurant.innerHTML = `
  <div class="row" id="Restaurant">
      <div class="col navMenu">
        <h2 class="text-center" >~ Restaurant ~</h2>
      </div>
    </div>
    <div class="row bg-light" >
      <div class="col-md-6">
        <h3>Location</h3>
        <p>Thanks for stopping by. We are the last authentic Italian restaurant in Milan, serving delicious Italian cuisine cooked by the best chefs. It only takes a few minutes to browse through our website and check out our menu. We hope you'll soon join us for a superb Italian culinary experience.</p>
        <h5>A Unique Experience</h5>
        <p>Thanks for stopping by. We are the last authentic Italian restaurant in Milan, serving delicious Italian cuisine cooked by the best chefs. It only takes a few minutes to browse through our website and check out our menu. We hope you'll soon join us for a superb Italian culinary experience.</p>
      </div>
      <div class="col-md-6" data-aos="fade-up">
        <img class="img-fluid" src="${locationImg}">
      </div>
    </div>
    <div class="row bg-light"><br></div>
    <div class="row bg-light">
      <div class="col-md-6 order-md-1 order-2" data-aos="fade-up">
        <img class="img-fluid " src="${cusineImg}">
      </div>
      <div class="col-md-6 order-md-12 order-1">
        <h3>Cuisine</h3>
        <p>Thanks for stopping by. We are the last authentic Italian restaurant in Milan, serving delicious Italian cuisine cooked by the best chefs. It only takes a few minutes to browse through our website and check out our menu. We hope you'll soon join us for a superb Italian culinary experience.</p>
        <h5>A Unique Experience</h5>
        <p>Thanks for stopping by. We are the last authentic Italian restaurant in Milan, serving delicious Italian cuisine cooked by the best chefs. It only takes a few minutes to browse through our website and check out our menu. We hope you'll soon join us for a superb Italian culinary experience.</p>
      </div>
`
// restaurant.style.display = 'none';

export {restaurant}
