module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  contentSecurity: {
    // ...
    directives: {
      // ...
      connectSrc: ["'self'", "http://localhost:1337", "https:"],
      // ...
    },
    // ...
  },
  
});
