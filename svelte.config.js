import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // GitHub Pages project sites live at /<repository-name>. Local and custom-domain builds stay at /.
    paths: {
      base: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}` : ''
    },
    adapter: adapter({ fallback: '404.html', pages: 'build', assets: 'build', strict: false }),
    prerender: { entries: ['*'] }
  }
};

export default config;
