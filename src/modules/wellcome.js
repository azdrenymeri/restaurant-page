import wellcomeImg from '../images/wellcome-headline.jpg';


const wellcome = document.createElement('div');

wellcome.innerHTML = `
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img class="d-block w-100 img-fluid img-slider" src="${wellcomeImg}" alt="First slide">
        <div class="carousel-caption">
          <h1>Welcome!</h1>
        <p>...</p>
      </div>
      </div>
  </div>
</div>
</div>
`
export {wellcome}
