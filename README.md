# Network Slice and Service Orchestrator (NSSO)
## Introduction
The 5GZORRO Network Slice and Service Orchestrator (NSSO) is the component responsible for the end-to-end vertical service management, handling the decomposition and mapping of the service into network slices and network slice instances across multiple domains. The following pictures illustrates the interfaces towards other 5GZORRO platform components and the internal components of the NSSO.

![NSSO interfaces](https://github.com/5GZORRO/nsso/blob/main/nsso_interfaces.png)


The software code is available for the first release isd available on:
- NSSO - VS (containing a the vertical service management and the general purpose network slice management functionality): https://github.com/nextworks-it/slicer/releases/tag/5gzorro-core-1.0-rc
  - This module depends of the following repositories:
  - nfvo-drivers: https://github.com/nextworks-it/nfvo-drivers/releases/tag/5gzorro-core-1.0-rc
  - slicer-catalogue: https://github.com/nextworks-it/slicer-catalogue/releases/tag/5gzorro-core-1.0-rc
  - Docker images are provided as github packages in this repo to ease the platform installation



## Prerequisites
#### System Requirements
* **2 CPUs**
* **8 GB RAM**
* **20 GB Storage**
* **Suggested deployment: Docker based containers/images**

#### Software requirements
* **PostgresDB**: The NSSO uses Postgres as the internal database engine. 
* **RabbitMQ**: The NSSO uses RabbitMQ for the internal exchange of asynchronous messages. 



## Installation
#### Docker installation
In the install folder we provide example docker compose files
#### Configuration 
The configuration parameters shall be passed as environment variables to the docker container. Here we enumerate the main configuration parameters
* domain_id (an identifier for the domain, example: operator-a)
* spring.datasource.url (URL of postgres, example: jdbc:postgresql://postgres10:5432/sebastian)
* spring.datasource.username (Postgres username)
* spring.datasource.password (Postgres password)
* spring.rabbitmq.host (host of RabbitMQ, example: rabbitmq)
* nfvo.catalogue.type (The type of NFVO Catalogue, OSM10 for 5GZORRO scenarios)
* nfvo.lcm.type (The type of NFVO LCM API, OSM10 for 5GZORRO scenarios)
* nfvo.catalogue.address (the address of the NFVO, example: http://localhost)
* nfvo.lcm.address (the address of the NFVO, example: http://localhost)
* nfvo.lcm.username (credentials to use with the NFVO for LCM)
* nfvo.lcm.password (credentials to use with the NFVO for LCM)
* nfvo.lcm.vim (OSM VIM ID)
* nfvo.catalogue.username (credentials to use with the NFVO for VNF and NS catalogue management)
* nfvo.lcm.monitoring.url (address of the monitoring module of the NFVO, example: http://mda)
* nfvo.lcm.elicensing.address (address of the elicensing manager, example: http://elicensemgr)
* nfvo.lcm.external_monitoring.address (address the MDA module, example: http://mda:4000)
 
            

## Maintainers

** Juan Brenes **  - j.brenes@nextworks.it
** Pietro Giardina ** - p.giardina@nextworks.it

## License
Most of the components of the NSSO are licensed using the Apache 2.0 license


![5GZORRO logo](https://www.5gzorro.eu/wp-content/uploads/2019/11/Logo-White-5GZORRO.png)
