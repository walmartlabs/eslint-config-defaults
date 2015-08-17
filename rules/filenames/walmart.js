"use strict";

module.exports = {
  "plugins": [
    "filenames"
  ],
  "rules": {
    // Enforce dash-cased filenames
    "filenames/filenames": [2, "^[a-z0-9\\-\\.]+$"]
  }
};
