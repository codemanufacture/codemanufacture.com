module.exports = (plop) => {
  plop.setGenerator(`pure-component`, {
    description: `Add pure component`,
    prompts: [
      {
        type: `input`,
        name: `name`,
        message: `Component name?`,
      },
    ],
    actions: [
      {
        type: `add`,
        path: `src/components/{{pascalCase name}}/index.ts`,
        templateFile: `plop-templates/component/index.ts.hbs`,
      },
      {
        type: `add`,
        path: `src/components/{{pascalCase name}}/{{pascalCase name}}.tsx`,
        templateFile: `plop-templates/component/component.tsx.hbs`,
      },
    ],
  })

  plop.setGenerator(`page`, {
    description: `Add new page`,
    prompts: [
      {
        type: `input`,
        name: 'title',
        message: `Title?`,
      },
      {
        type: `input`,
        name: `slug`,
        message: `Slug?`
      }
    ],
    actions: (data) => {
      const kebabCase = plop.getHelper(`kebabCase`)
      const { slug, title } = data

      const path = slug.split(`/`)
        .map(p => kebabCase(p))
        .join(`/`) || kebabCase(title)

      return [
        {
          type: `add`,
          path: `content/pages/${path}.md`,
          templateFile: `plop-templates/content/page.md.hbs`,
        }
      ]
    },
  })
}