const path = require('path');
const zlib = require('zlib');

module.exports = {
	chainWebpack: config => {
		config.resolve.alias.set(
			'vue$',
			path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
		);	
	},
	pluginOptions: {
		compression:{
			brotli: {
				filename: '[file].br[query]',
				algorithm: 'brotliCompress',
				include: /\.(js|css|html|svg|json)(\?.*)?$/i,
				compressionOptions: {
					params: {
						[zlib.constants.BROTLI_PARAM_QUALITY]: 11,
					},
				},
				minRatio: 0.8,
			}
		}
	}	
}