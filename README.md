## Using Next.js 14.0.x breaks highcharts

Since version Next.js 14 I cannot use [Highcharts](https://www.highcharts.com/) anymore as the compilation fails. The page is marked as client side page but it seems like some server side render fails.

```
npm run build

> prerender-highcharts@0.1.0 build
> next build

   ▲ Next.js 14.0.3-canary.5

(node:50591) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 ✓ Creating an optimized production build
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
 ✓ Collecting page data
   Generating static pages (0/6)  [    ]TypeError: Cannot read properties of undefined (reading 'document')
    at /Users/olivers/project/prerender-highcharts/.next/server/app/chart/page.js:1:5649
    at 9295 (/Users/olivers/project/prerender-highcharts/.next/server/app/chart/page.js:1:5734)
    at t (/Users/olivers/project/prerender-highcharts/.next/server/webpack-runtime.js:1:127)
    at 1598 (/Users/olivers/project/prerender-highcharts/.next/server/app/chart/page.js:1:2513)
    at t (/Users/olivers/project/prerender-highcharts/.next/server/webpack-runtime.js:1:127)
    at F (/Users/olivers/project/prerender-highcharts/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:91984)
    at /Users/olivers/project/prerender-highcharts/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:94399
    at W._fromJSON (/Users/olivers/project/prerender-highcharts/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:94837)
    at JSON.parse (<anonymous>)
    at N (/Users/olivers/project/prerender-highcharts/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:91705)

Error occurred prerendering page "/chart". Read more: https://nextjs.org/docs/messages/prerender-error
TypeError: Cannot read properties of undefined (reading 'document')
    at /Users/olivers/project/prerender-highcharts/.next/server/app/chart/page.js:1:5649
    at 9295 (/Users/olivers/project/prerender-highcharts/.next/server/app/chart/page.js:1:5734)
    at t (/Users/olivers/project/prerender-highcharts/.next/server/webpack-runtime.js:1:127)
    at 1598 (/Users/olivers/project/prerender-highcharts/.next/server/app/chart/page.js:1:2513)
    at t (/Users/olivers/project/prerender-highcharts/.next/server/webpack-runtime.js:1:127)
    at F (/Users/olivers/project/prerender-highcharts/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:91984)
    at /Users/olivers/project/prerender-highcharts/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:94399
    at W._fromJSON (/Users/olivers/project/prerender-highcharts/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:94837)
    at JSON.parse (<anonymous>)
    at N (/Users/olivers/project/prerender-highcharts/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:91705)
 ✓ Generating static pages (6/6)

> Export encountered errors on following paths:
	/chart/page: /chart
```

## Downgrading to 13.5.6

There are no issues with 13.5.6 compiling the same project

```
npm run build

> prerender-highcharts@0.1.0 build
> next build

(node:50085) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 ✓ Creating an optimized production build
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
 ✓ Collecting page data
 ✓ Generating static pages (6/6)
 ✓ Collecting build traces
 ✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    5.26 kB        85.8 kB
├ ○ /_not-found                          875 B          81.4 kB
└ ○ /chart                               103 kB          183 kB
+ First Load JS shared by all            80.5 kB
  ├ chunks/472-31d0e6423ed7b0d0.js       27.5 kB
  ├ chunks/fd9d1056-795b72f2db284780.js  51.1 kB
  ├ chunks/main-app-b284407094d61a42.js  230 B
  └ chunks/webpack-1e7db9543276c9d8.js   1.73 kB


○  (Static)  automatically rendered as static HTML (uses no initial props)
```
