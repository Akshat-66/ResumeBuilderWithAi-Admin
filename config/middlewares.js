module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ["https://main-pro-1-git-main-akshat-tripathis-projects.vercel.app/"], // Replace with your frontend URL
      credentials: true, // Allow cookies to be sent
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::session',
    config: {
      enabled: true,
      key: "strapi.sid",
      httpOnly: true,
      secure: true, // Set to false if backend is on HTTP
      sameSite: "None", // Required for cross-origin cookies
    },
  },
  'strapi::favicon',
  'strapi::public',
];
