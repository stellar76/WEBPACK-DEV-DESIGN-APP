!function(n){var Q={};function i(F){if(Q[F])return Q[F].exports;var t=Q[F]={i:F,l:!1,exports:{}};return n[F].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=Q,i.d=function(n,Q,F){i.o(n,Q)||Object.defineProperty(n,Q,{enumerable:!0,get:F})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,Q){if(1&Q&&(n=i(n)),8&Q)return n;if(4&Q&&"object"==typeof n&&n&&n.__esModule)return n;var F=Object.create(null);if(i.r(F),Object.defineProperty(F,"default",{enumerable:!0,value:n}),2&Q&&"string"!=typeof n)for(var t in n)i.d(F,t,function(Q){return n[Q]}.bind(null,t));return F},i.n=function(n){var Q=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(Q,"a",Q),Q},i.o=function(n,Q){return Object.prototype.hasOwnProperty.call(n,Q)},i.p="/dist/js/",i(i.s=0)}([function(module,exports){eval("var navTog = false;\nvar navButton = document.getElementById('navButton');\nvar mobNav = document.getElementById('mobile-nav');\nnavButton.addEventListener('click', function () {\n    if (navTog == false) {\n        navTog = true;\n        navButton.classList.add('toggled');\n        navButton.innerHTML = '<span class=\"ion-android-close\"></span>';\n        mobNav.classList.add('toggled');\n    } else {\n        navTog = false;\n        navButton.classList.remove('toggled');\n        navButton.innerHTML = '<span class=\"ion-navicon\"></span>';\n        mobNav.classList.remove('toggled');\n    }\n});\nfunction checkAd() {\n    var ads = document.getElementsByClassName('ad');\n    var i;\n    for (i = 0; i < ads.length; i++) {\n        ads[i].classList.add('small');\n    }\n}\nfunction checkWindow() {\n    console.log(window.innerWidth);\n}\nwindow.onresize = checkWindow();\n\nwindow.addEventListener('resize', checkWindow);\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbIm5hdlRvZyIsIm5hdkJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJtb2JOYXYiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwicmVtb3ZlIiwiY2hlY2tBZCIsImFkcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpIiwibGVuZ3RoIiwiY2hlY2tXaW5kb3ciLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm9ucmVzaXplIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxTQUFTLEtBQWI7QUFDQSxJQUFJQyxZQUFZQyxTQUFTQyxjQUFULENBQXdCLFdBQXhCLENBQWhCO0FBQ0EsSUFBSUMsU0FBU0YsU0FBU0MsY0FBVCxDQUF3QixZQUF4QixDQUFiO0FBQ0FGLFVBQVVJLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFlBQVk7QUFDNUMsUUFBSUwsVUFBVSxLQUFkLEVBQXFCO0FBQ2pCQSxpQkFBUyxJQUFUO0FBQ0FDLGtCQUFVSyxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixTQUF4QjtBQUNBTixrQkFBVU8sU0FBVixHQUFzQix5Q0FBdEI7QUFDQUosZUFBT0UsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsU0FBckI7QUFDSCxLQUxELE1BTUs7QUFDRFAsaUJBQVMsS0FBVDtBQUNBQyxrQkFBVUssU0FBVixDQUFvQkcsTUFBcEIsQ0FBMkIsU0FBM0I7QUFDQVIsa0JBQVVPLFNBQVYsR0FBc0IsbUNBQXRCO0FBQ0FKLGVBQU9FLFNBQVAsQ0FBaUJHLE1BQWpCLENBQXdCLFNBQXhCO0FBQ0g7QUFDSixDQWJEO0FBY0EsU0FBU0MsT0FBVCxHQUFtQjtBQUNmLFFBQUlDLE1BQU1ULFNBQVNVLHNCQUFULENBQWdDLElBQWhDLENBQVY7QUFDQSxRQUFJQyxDQUFKO0FBQ0EsU0FBS0EsSUFBSSxDQUFULEVBQVlBLElBQUlGLElBQUlHLE1BQXBCLEVBQTRCRCxHQUE1QixFQUFpQztBQUM3QkYsWUFBSUUsQ0FBSixFQUFPUCxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixPQUFyQjtBQUNIO0FBQ0o7QUFDRCxTQUFTUSxXQUFULEdBQXVCO0FBQ25CQyxZQUFRQyxHQUFSLENBQVlDLE9BQU9DLFVBQW5CO0FBQ0g7QUFDREQsT0FBT0UsUUFBUCxHQUFrQkwsYUFBbEI7O0FBRUFHLE9BQU9iLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDVSxXQUFsQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG5hdlRvZyA9IGZhbHNlO1xudmFyIG5hdkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZCdXR0b24nKTtcbnZhciBtb2JOYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9iaWxlLW5hdicpO1xubmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChuYXZUb2cgPT0gZmFsc2UpIHtcbiAgICAgICAgbmF2VG9nID0gdHJ1ZTtcbiAgICAgICAgbmF2QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZ2dsZWQnKTtcbiAgICAgICAgbmF2QnV0dG9uLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cImlvbi1hbmRyb2lkLWNsb3NlXCI+PC9zcGFuPic7XG4gICAgICAgIG1vYk5hdi5jbGFzc0xpc3QuYWRkKCd0b2dnbGVkJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBuYXZUb2cgPSBmYWxzZTtcbiAgICAgICAgbmF2QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3RvZ2dsZWQnKTtcbiAgICAgICAgbmF2QnV0dG9uLmlubmVySFRNTCA9ICc8c3BhbiBjbGFzcz1cImlvbi1uYXZpY29uXCI+PC9zcGFuPic7XG4gICAgICAgIG1vYk5hdi5jbGFzc0xpc3QucmVtb3ZlKCd0b2dnbGVkJyk7XG4gICAgfVxufSk7XG5mdW5jdGlvbiBjaGVja0FkKCkge1xuICAgIHZhciBhZHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhZCcpO1xuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYWRzW2ldLmNsYXNzTGlzdC5hZGQoJ3NtYWxsJylcbiAgICB9XG59XG5mdW5jdGlvbiBjaGVja1dpbmRvdygpIHtcbiAgICBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aCk7XG59XG53aW5kb3cub25yZXNpemUgPSBjaGVja1dpbmRvdygpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY2hlY2tXaW5kb3cpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n")}]);