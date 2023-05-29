module.exports = ({ env }) => ({
  host: env('HOST'),
  port: env.int('PORT', 1337),

  app: {
    keys: env.array('APP_KEYS'),
  },
  // url:"www.mystore.com",


  
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  contentSecurity: {
    // ...
    directives: {
      // ...
      connectSrc: ["'self'", "www.mysample.dev", "https:"],
      // ...
    },
    // ...
  },
  
});
