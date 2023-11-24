# PWA Demo

This project demonstrates a simple Progressive Web App (PWA) that can be installed as a Chrome desktop application.

## Installation

You can install this web app directly from the browser:

1. Navigate to `localhost:5173` in your Chrome browser.
2. Click on the "Install" button in the address bar.

Alternatively, you can install it through your browser settings:

1. Click on the browser menu (three dots at the upper right corner).
2. Go to `More tools` > `Create shortcut`.
3. Check the `Open as window` option and click `Create`.

## Manifest

The `manifest.json` file is configured for the PWA with appropriate icons and application settings.

```json
{
  "short_name": "Enis's Sample PWA",
  "name": "PWA by Enis",
  "icons": [
    {
      "src": "assets/maskable_icon_x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    // ... other icons
  ],
  // ... other manifest properties
}
