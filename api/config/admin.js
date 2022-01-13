module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5fbc623526de105b11a30436620b2652'),
  },
});
