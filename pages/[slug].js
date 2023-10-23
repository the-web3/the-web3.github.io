export const getStaticPaths = ({ locales }) => {
    return {
      paths: [
        // if no `locale` is provided only the defaultLocale will be generated
        { params: { slug: 'about.en-US' }, locale: 'en-US' },
        { params: { slug: 'index.en-US' }, locale: 'en-US' },
        { params: { slug: 'products.en-US' }, locale: 'en-US' },
        { params: { slug: 'about.zh-CN' }, locale: 'zh-CN' },
        { params: { slug: 'index.zh-CN' }, locale: 'zh-CN' },
        { params: { slug: 'products.zh-CN' }, locale: 'zh-CN' },
      ],
      fallback: true,
    }
  }