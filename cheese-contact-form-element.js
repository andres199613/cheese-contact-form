(function () {

  class CheeseContactForm extends HTMLElement {
    connectedCallback() {
      this.style.display = 'block';
      this.style.width   = '100%';

      var iframe = document.createElement('iframe');
      iframe.src = 'https://andres199613.github.io/cheese-contact-form/';
      iframe.setAttribute('scrolling', 'no');
      iframe.setAttribute('frameborder', '0');
      iframe.style.cssText =
        'width:100%;border:none;display:block;overflow:hidden;';
      iframe.height = '900';
      this.appendChild(iframe);

      var script = document.createElement('script');
      script.src =
        'https://cdn.jsdelivr.net/npm/iframe-resizer@4.3.9/js/iframeResizer.min.js';
      script.onload = function () {
        iFrameResize(
          { log: false, checkOrigin: false, heightCalculationMethod: 'bodyOffset' },
          iframe
        );
      };
      document.head.appendChild(script);
    }
  }

  if (!customElements.get('cheese-contact-form')) {
    customElements.define('cheese-contact-form', CheeseContactForm);
  }

})();
