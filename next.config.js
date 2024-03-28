module.exports = {
	i18n: {
		locales: ['en', 'ru'],
		defaultLocale: 'en',
	},
	images: {
		domains: ['bananacodes.vercel.app/'],
	},
	async redirects() {
		return [
			{
				source: '/robots.txt',
				destination: '/api/robots',
				permanent: false,
			},
		];
	},
	webpack(config) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			issuer: /\.[jt]sx?$/,
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [{
						name: 'preset-default',
						params: {
							override: {
								removeViewBox: false
							}
						}
					}],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
};