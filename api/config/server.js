// module.exports = ({ env }) => ({
//   host: env('HOST'),
//   port: env.int('PORT', 1337),

//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   // url:"www.mystore.com",
  


  
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
//   contentSecurity: {
//     // ...
//     directives: {
//       // ...
//       connectsrc: ["'self'", "www.mysample.dev", "https:"],
//       // ...
//     },
//     // ...
//   },
  
// });

module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT', 1337),

  // Add the `settings` property to set the Content-Security-Policy header
  settings: {
    security: {
      // Modify the Content-Security-Policy directive
      contentSecurityPolicy: {
        directives: {
          connectSrc: ["'self'", env('RENDER_HOST')],
        },
      },
    },
  },

  app: {
    keys: env.array('APP_KEYS'),
  },
});
