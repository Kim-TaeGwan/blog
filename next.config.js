const BACKEND_URL = process.env.BACKEND_URL; // heroku 서버

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["elric-blog.s3.ap-northeast-2.amazonaws.com"],
  },
  async redirects() {
    return [
      {
        source: "/test/:path*", // 특정 url 접근시
        destination: "/redirect/:path*", // 여기로 redirect
        permanent: false, // 브라우저나 검색엔진이 이 정보를 기억하는지 여부
      },
    ];
  },
  async rewrites() {
    // api 조회
    return [
      {
        source: "/api/portfolio",
        destination: `${BACKEND_URL}/api/portfolio/select`,
        // destination: "http://localhost:4000/api/portfolio/select",
      },
      {
        source: "/api/study",
        destination: `${BACKEND_URL}/api/study/select`,
      },
      {
        source: "/api/contact",
        destination: `${BACKEND_URL}/api/sendEmail/sendEmail`,
      },
    ];
  },
};
