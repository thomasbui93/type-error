import kebabCase from "lodash.kebabcase"

export const getCategoryLink = name => `blog/category/${kebabCase(name)}`
