const showbuttons = () => {
  document.querySelector('#button-container').innerHTML += `
  <div class="card outside-card">
          <div class="btn-card-body">
            <h1 id="hs-message">Joke Generator!</h1>
            <div id="getJoke" class=" btn btn-lg btn-outline-success hs-btn view-orders-btn">Get a joke</div>
          </div>
  </div>
  `;
};

export default showbuttons;
