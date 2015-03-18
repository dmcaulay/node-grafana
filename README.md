# node-grafana
A Node.js host for [grafana](http://grafana.org/)

## Setup

Install elasticsearch and make sure it's running `curl localhost:9200`.

```
$ git clone git@github.com:dmcaulay/node-grafana.git
$ cd node-grafana
$ make prereqs
```

## Configure

Copy `grafana/config.sample.js` to `grafana/config.js`

Uncomment the 'Graphite & Elasticsearch example setup' block and replace it with the following:

```js
      // Graphite & Elasticsearch example setup
      datasources: {
        graphite: {
          type: 'graphite',
          url: "http://localhost:8080/graphite",
        },
        elasticsearch: {
          type: 'elasticsearch',
          url: "http://localhost:8080/elasticsearch",
          index: 'grafana-dash',
          grafanaDB: true,
        }
      },
```

Update `config.js` if necessary.

```js
{
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
```

You will most likely need to update `elasticsearch.target` and `graphite.target`. You should also be aware that the proxy defaults to `secure: false`. Be sure to remove that if you're using `HTTPS` and your certificate is valid!

## Start

```
$ make start
```
