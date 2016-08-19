"use strict";

module.exports = {
  "plugins": [
    "filenames"
  ],
  "rules": {
    // Enforce dash-cased filenames
    "filenames/match-regex": [2, "^[a-z0-9\\-\\.]+$"]
  }
};
