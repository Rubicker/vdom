import createElement from './utils/createElement';
import render from './utils/render';
import mount from './utils/mount';
import diff from './utils/diff';

const createVApp = count =>
  createElement('div', {
    attrs: {
      id: 'app',
      dataCount: count
    },
    children: [
      'Current count is: ',
      String(count),
      ...Array.from({ length: count }, () =>
        createElement('img', {
          attrs: {
            src: 'https://media.giphy.com/media/tZYa9KrKcen1YUI6om/giphy.gif'
          }
        })
      )
    ]
  });

let vApp = createVApp(0);

const $app = render(vApp);

let $rootEl = mount($app, document.getElementById('app'));

setInterval(() => {
  const n = Math.floor(Math.random() * 10);
  const vNewApp = createVApp(n);
  const patch = diff(vApp, vNewApp);

  $rootEl = patch($rootEl);
  vApp = vNewApp;
}, 1000);
