const config = {
  imageFolder: './src/statics',
  hostname: 'http://localhost:4600',
  database: {
    url: 'mongodb://localhost/social-new',
  },
  jwt: {
    secret: 'loquesea',
  },
};

module.exports = config;
