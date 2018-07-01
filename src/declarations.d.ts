declare const graphql: (query: TemplateStringsArray) => void

declare module '"*.svg' {
  const content: string
  export default content
}

declare module '"*.ico' {
  const content: string
  export default content
}
