VERSION := 1.9.1

all: prereqs start

prereqs:
	npm -s install
	wget -q http://grafanarel.s3.amazonaws.com/grafana-$(VERSION).tar.gz
	mkdir grafana
	tar -xzf grafana-$(VERSION).tar.gz -C grafana --strip-components=1
	rm grafana-$(VERSION).tar.gz
	cp grafana/config.sample.js grafana/config.js

start:
	npm start

clean:
	rm -rf grafana
	rm -rf node_modules
