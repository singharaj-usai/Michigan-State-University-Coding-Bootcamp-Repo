// Grab the target element
const targetElTwo = document.getElementById('targetTwo');
const headerEl = document.querySelector('.header');

headerEl.innerHTML = '<h1>hot module reloading 🔥</h1>';
targetElTwo.innerHTML = '';

// Create a new element in memory
const moduleContent2 = document.createElement('div');
moduleContent2.id = 'module-2';

// Add some content to the new element
moduleContent2.innerHTML = `
  <div class="article-container">
    <div class="row">
      <div class="col s12">
        <div class="card darken-1">
          <div class="card-content dark-text">
            <span class="card-title">This content was added by module 2</span>
          </div>
        </div>
      </div>
    </div>
  </div>`;

// Append the new element to the target element
targetElTwo.appendChild(moduleContent2);
