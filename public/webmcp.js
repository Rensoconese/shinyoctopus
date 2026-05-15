(function () {
  if (!('modelContext' in navigator) || typeof navigator.modelContext.provideContext !== 'function') return;
  try {
    navigator.modelContext.provideContext({
      tools: [
        {
          name: 'navigate_to_service',
          description: 'Navigate the browser to one of Shiny Octopus main service pages.',
          inputSchema: {
            type: 'object',
            properties: {
              service: {
                type: 'string',
                enum: ['seo', 'accessibility', 'servidores', 'blog', 'about', 'contact'],
                description: 'Target service page slug.'
              }
            },
            required: ['service']
          },
          execute: function (input) {
            var slug = (input && input.service) || '';
            var allowed = ['seo', 'accessibility', 'servidores', 'blog', 'about', 'contact'];
            if (allowed.indexOf(slug) === -1) {
              return { ok: false, error: 'Unknown service slug' };
            }
            window.location.href = '/' + slug + '/';
            return { ok: true, url: '/' + slug + '/' };
          }
        },
        {
          name: 'contact_shinyoctopus',
          description: 'Open the contact page to book an audit or consultation.',
          inputSchema: { type: 'object', properties: {} },
          execute: function () {
            window.location.href = '/contact/';
            return { ok: true, email: 'hi@shinyoctopus.studio' };
          }
        }
      ]
    });
  } catch (e) {
    /* no-op */
  }
})();
