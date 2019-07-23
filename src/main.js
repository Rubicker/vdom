import createElement from './utils/createElement';
import render from './utils/render';
import mount from './utils/mount';

const createVApp = count =>
  createElement('div', {
    attrs: {
      id: 'app',
      dataCount: count
    },
    children: [
      createElement('input'),
      'Current count is: ',
      String(count),
      createElement('img', {
        attrs: {
          src: 'https://media.giphy.com/media/tZYa9KrKcen1YUI6om/giphy.gif'
        }
      })
    ]
  });

let count = 0;

const vApp = createVApp(count);

const $app = render(vApp);

let $rootEl = mount($app, document.getElementById('app'));

setInterval(() => {
  count++;
  $rootEl = mount(render(createVApp(count)), $rootEl);
}, 1000);
