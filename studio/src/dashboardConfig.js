export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2a7d497341479d37550d62',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-gj9ox55m',
                  apiId: 'e6e68dc8-f953-4bd3-9933-4c3f0e90fa40'
                },
                {
                  buildHookId: '5f2a7d4974e420643f8cda6d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-czospmgs',
                  apiId: 'b0a6377d-a7c4-46ff-8b72-17b0b0df057f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yosyeami/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-czospmgs.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
