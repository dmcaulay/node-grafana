# node-grafana
A Node.js host for [grafana](http://grafana.org/)

## Setup

### Elasticsearch

If you're on OSX you can install elasticsearch with homebrew `brew install elasticsearch` and start it `elasticsearch`.

### The Proxy

```
$ git clone git@github.com:dmcaulay/node-grafana.git
$ cd node-grafana
$ make prereqs
```

## Configure

Uncomment the 'Graphite & Elasticsearch example setup' block in `grafana/config.js` and replace it with the following:

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

You will most likely need to update `elasticsearch.target` and `graphite.target`. The target points to your instances of elasticsearch and graphite. In this case elasticsearch is running locally on it's default port and graphite is running locally on 8880.

## Start

```
$ make start
```
