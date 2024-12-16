import withPWA from "next-pwa";

const nextConfig = withPWA({
    reactStrictMode: true,
    pwa: {
        dest: "public", // Directory where the service worker is stored
        register: true, // Automatically register the service worker
        skipWaiting: true, // Allows the app to take control immediately
    },
});

export default nextConfig;
