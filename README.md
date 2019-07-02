# hexo-cake-math

## How to use
```bash
yarn add hexo-cake-math
```

## Config
You can config by `math` in `hexo` `theme` or `data` config files.

In hexo or theme:
```yml
math:
  per_page: false
  engine: mathjax
```

In `math.yml` data file:
```yml
per_page: false
engine: mathjax
```

You can find more info in [default config file](default.yaml).

## Debug
```bash
# init this project
yarn install
yarn link
# get example
git clone --recursive git@github.com:jiangtj-lab/hexo-theme-cake-example.git example
cd example
yarn install
# add test link
yarn add hexo-cake-math
yarn link hexo-cake-math
# run, see http://localhost:4000
hexo s
```
