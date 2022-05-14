# YoAppRepository

## Getting Started

Yoapp Monorepo

## Uses libraries

- Storybook:
- Redux:
- Sass:
- Jest:
- Material UI: https://mui.com/getting-started/installation/
- CDN based font/icon loading

## How to use

### Install lerna globally

sudo yarn global add lerna

### Link local packages together and install remaining package dependencies

npx lerna bootstrap

### Install package into another - installs components package into client

npx lerna add @yoapp/components --scope=@yoapp/client

### run package

npx lerna run start --parallel --scope @yoapp/client

### To run storybook of related package

npx lerna run --scope @yoapp/components storybook

### To start a specific package

npx lerna run --scope @yoapp/merchant start

### Remove the node_modules directory from all packages

npx lerna clean

### Run all the packages parallely

npx lerna run start -- stream

### To remove the package

removes components from merchnat

npx lerna exec 'yarn remove @yoapp/components' --scope=@yoapp/merchant
