module.exports = {
    reactStrictMode: true,
    experimental: {
        typedRoutes: true,
        serverActions: true,
        instrumentationHook: true
    },
    eslint: {
        dirs: ['app', 'src']
    },
    compiler: {
        styledComponents: true
    },
    swcMinify: true,
    typescript: {
        ignoreBuildErrors: true
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ['@svgr/webpack']
        })
        return config
    }
}

// https://nextjs.org/docs/pages/building-your-application/configuring/custom-server#disabling-file-system-routing
