// Grab the target element
const targetEl = document.getElementById('target');
const headerEl = document.querySelector('.header');

headerEl.innerHTML = '<h1>client server</h1>';

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
targetEl.appendChild(moduleContent2);
