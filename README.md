# Prism

1. npx create-nx-workspace@latest prism
2. npm install -g nx
3. nx run @prism/prism:start

# Add new library

nx g @nx/react:lib /libs/ui
nx g @nx/react:component /libs/ui/src/lib/button

# Add new projects

nx g @nx/react:app apps/auction
