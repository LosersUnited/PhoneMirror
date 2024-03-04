const appName = "SomeApp";
const authorName = "Davilarek";
const domainName = "dev";
module.exports = {
    "name": appName,
    "slug": appName,
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
        "image": "./assets/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff",
    },
    "assetBundlePatterns": [
        "**/*",
    ],
    "ios": {
        "supportsTablet": true,
        "bundleIdentifier": `${domainName}.${authorName.toLowerCase()}.${appName.toLowerCase()}`,
        "infoPlist": {
            "UIBackgroundModes": [
                "remote-notification",
            ],
        },
    },
    "android": {
        "adaptiveIcon": {
            "foregroundImage": "./assets/adaptive-icon.png",
            "backgroundColor": "#ffffff",
        },
        "package": `${domainName}.${authorName.toLowerCase()}.${appName.toLowerCase()}`,
    },
    "web": {
        "favicon": "./assets/favicon.png",
    },
};
