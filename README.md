The 5GZORRO Network Slice and Service Orchestrator (NSSO) is the component responsible for the end-to-end vertical service management, handling the decomposition and mapping of the service into network slices and network slice instances across multiple domains. The following pictures illustrates the interfaces towards other 5GZORRO platform components and the internal components of the NSSO.

![NSSO interfaces](https://github.com/5GZORRO/nsso/blob/main/nsso_interfaces.png)


The software code is available for the first release isd available on:
- NSSO - VS (containing a the vertical service management and the general purpose network slice management functionality): https://github.com/nextworks-it/slicer/releases/tag/5gzorro-core-1.0-rc
  - This module depends of the following repositories:
  - nfvo-drivers: https://github.com/nextworks-it/nfvo-drivers/releases/tag/5gzorro-core-1.0-rc
  - slicer-catalogue: https://github.com/nextworks-it/slicer-catalogue/releases/tag/5gzorro-core-1.0-rc
  - Docker images are provided as github packages in this repo to ease the platform installation

![5GZORRO logo](https://www.5gzorro.eu/wp-content/uploads/2019/11/Logo-White-5GZORRO.png)

