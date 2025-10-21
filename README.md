# Prism

1. npx create-nx-workspace@latest prism
2. npm install -g nx
3. nx run @prism/prism:start

# Add new library

nx generate @nx/react:library ui-shared --directory=libs/shared --setParserOptions

# Add new projects

nx g @nx/react:app apps/auction
