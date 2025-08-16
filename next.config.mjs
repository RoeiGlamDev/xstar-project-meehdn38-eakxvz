import { withPlugins } from 'next-compose-plugins';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['luxury-lrp-cosmetics.imgix.net']
},
  webpack(config) {

    return config;
  },
  env: {
    BRAND_NAME: 'luxury LRP cosmetics',
    PRIMARY_COLOR: '#FFA500', // Orange
    SECONDARY_COLOR: '#FFFFFF', // White
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
}
};

export default withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
        mozjpeg: {
          quality: 90
},
        pngquant: {
          speed: 3,
          quality: [0.8, 0.9]
},
        svgo: {
          plugins: [{ removeViewBox: false }]
},
        webp: {
          preset: 'default',
          quality: 85
}
},
    ],
  ],
  nextConfig
);