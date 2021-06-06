(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    FQ1g: function (n, t, c) {
      'use strict';
      c.r(t),
        c.d(t, 'AboutModule', function () {
          return p;
        });
      var e = c('ofXK'),
        o = c('sYmb'),
        r = c('tyNb'),
        s = c('4u49'),
        b = c('AytR'),
        i = c('fXoL');
      const a = [
        {
          path: '',
          component: (() => {
            class n {
              constructor() {
                this.version = b.a.version;
              }
              ngOnInit() {}
            }
            return (
              (n.ɵfac = function (t) {
                return new (t || n)();
              }),
              (n.ɵcmp = i.Ob({
                type: n,
                selectors: [['app-about']],
                decls: 19,
                vars: 1,
                consts: [
                  [1, 'container-fluid'],
                  [1, 'jumbotron', 'text-center'],
                  ['translate', ''],
                  [1, 'far', 'fa-bookmark'],
                ],
                template: function (n, t) {
                  1 & n &&
                    (i.Zb(0, 'div', 0),
                    i.Hc(1, '\n  '),
                    i.Zb(2, 'div', 1),
                    i.Hc(3, '\n    '),
                    i.Zb(4, 'h1'),
                    i.Hc(5, '\n      '),
                    i.Zb(6, 'span', 2),
                    i.Hc(7, 'APP_NAME'),
                    i.Yb(),
                    i.Hc(8, '\n    '),
                    i.Yb(),
                    i.Hc(9, '\n    '),
                    i.Zb(10, 'p'),
                    i.Vb(11, 'i', 3),
                    i.Hc(12, ' '),
                    i.Zb(13, 'span', 2),
                    i.Hc(14, 'Version'),
                    i.Yb(),
                    i.Hc(15),
                    i.Yb(),
                    i.Hc(16, '\n  '),
                    i.Yb(),
                    i.Hc(17, '\n'),
                    i.Yb(),
                    i.Hc(18, '\n')),
                    2 & n && (i.Ib(15), i.Jc(' ', t.version, ''));
                },
                directives: [o.a],
                styles: [''],
              })),
              n
            );
          })(),
          data: { title: Object(s.a)('About') },
        },
      ];
      let u = (() => {
          class n {}
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = i.Sb({ type: n })),
            (n.ɵinj = i.Rb({ providers: [], imports: [[r.h.forChild(a)], r.h] })),
            n
          );
        })(),
        p = (() => {
          class n {}
          return (
            (n.ɵfac = function (t) {
              return new (t || n)();
            }),
            (n.ɵmod = i.Sb({ type: n })),
            (n.ɵinj = i.Rb({ imports: [[e.b, o.b, u]] })),
            n
          );
        })();
    },
  },
]);
