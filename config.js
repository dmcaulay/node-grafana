module.exports = {
  port: 8080,
  dir: './grafana',
  proxy: {
    secure: false
  },
  elasticsearch: {
    path: '/elasticsearch',
    target: 'http://localhost:9200'
  },
  graphite: {
    path: '/graphite',
    target: 'https://localhost:8880'
  }
};
