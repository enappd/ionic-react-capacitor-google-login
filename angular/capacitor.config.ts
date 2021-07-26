import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.enappd.IonNgCapGoogleLogin',
  appName: 'IonNgCapGoogleLogin',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: [
        "profile",
        "email"
      ],
      serverClientId: "677523189067-dr8vc85gjflrm1jsuc3baq98kbneg3k9.apps.googleusercontent.com",
      forceCodeForRefreshToken : true
    }
  }
};

export default config;
