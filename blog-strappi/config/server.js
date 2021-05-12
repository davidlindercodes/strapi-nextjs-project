module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 5000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '26909f28c56b48b0f4e86ad0654d78ba'),
    },
  },
});
