import { ThemeDecorator } from "./ThemeDecorator"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [ThemeDecorator];