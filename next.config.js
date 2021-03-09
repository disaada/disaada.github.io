module.exports = {
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'x-frame-options',
            value: 'SAMEORIGIN',
          }
        ],
      },
      {
        source: '/:path',
        headers: [
          {
            key: 'x-frame-options',
            value: 'SAMEORIGIN',
          }
        ],
      },
      {
        source: '/:path/:slug',
        headers: [
          {
            key: 'x-frame-options',
            value: 'SAMEORIGIN',
          }
        ],
      }
    ]
  },
}
