module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '69daacff45202673d882d7dfa2c31a7b'),
  },
});
