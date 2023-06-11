# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [14.0.0-canary.53b3cad2f.0](https://github.com/material-components/material-components-web/compare/v13.0.0...v14.0.0-canary.53b3cad2f.0) (2022-04-27)


### Bug Fixes

* **menusurface:** Add a getOwnerDocument() method to MDCMenuSurfaceAdapter to provide a reference to the document that owns the menu surface DOM element. ([3486659](https://github.com/material-components/material-components-web/commit/348665978ce73694ad4518626dd70cdf5b984113))


### Features

* **menu:** allow preferentially opening surface below anchor ([261f2db](https://github.com/material-components/material-components-web/commit/261f2db59382d561d6c89a7c41dafb6daad5a717))
* **MenuSurface:** Add opening event for menus. ([53b3cad](https://github.com/material-components/material-components-web/commit/53b3cad2f5ef4d0c9d5cf03c752f27035dd7c818))


### BREAKING CHANGES

* **MenuSurface:** Adds #notifyOpening method to menu surface adapter.

PiperOrigin-RevId: 444830518
