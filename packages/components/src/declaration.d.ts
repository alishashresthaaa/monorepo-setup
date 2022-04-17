declare module '*.scss' {
  const content: Record<string, string>
  export default content
}

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element
  export default MDXComponent
}

declare module '*.jpg' {
  const value: any
  export = value
}

declare module '*.png' {
  const value: any
  export = value
}
