const targetEl = document.getElementById('target');

// Clear out the loading message that exists in the target element
targetEl.innerHTML = '';

// Create a new element in memory
const moduleContent = document.createElement('div');
moduleContent.id = 'module-1';

// Add some content to the new element
moduleContent.innerHTML = `<div class="container">
<div class="row valign-wrapper">
  <div class="col s6 offset-s3 valign">
    <div class="card dark-blue darken-1">
      <div class="card-content dark-text">
        <div class="card-image">
          <img src="images/icon.png" alt="" style="border-radius: 10px">
        </div>
        <span class="card-title">Service Worker</span>
        <p>I am a very simple service worker. I run in the background inside the browser and handle things
         like caching files, handling network requests when your connection goes offline.</p>
      </div>
      <div class="card-action">
        <a id="card-link" href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API#service_worker_concepts_and_usage">Read More</a>
      </div>
    </div>
  </div>
</div>
</div>`;

// Append the new element to the target element
targetEl.appendChild(moduleContent);

// register a service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then((register) => console.log(register));
}
