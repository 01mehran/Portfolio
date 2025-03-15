// document.addEventListener("DOMContentLoaded", () => {
// Selecting Elements;
const _ = document;
const openMenu = _.querySelector("#menubar");
const closeBtn = _.querySelector("#close-btn");
const mobileMenu = _.querySelector("#mobile-menu");
const ul = _.querySelector("header ul");
const indicatoreBtn = _.querySelector("#indicatore");
const header = _.querySelector("header");
const form = document.querySelector("#form");
const links = mobileMenu.querySelectorAll("a");


const toggleMobileMenu = function (width, display) {
  mobileMenu.style.right = width;
  indicatoreBtn.style.display = display;
  overlay.classList.toggle("overlay");
};

mobileMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    toggleMobileMenu("-400px", "none")
  }
});

// smooth Scrolling;
ul.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.tagName === "A") {
    const id = e.target.getAttribute("href");
    _.querySelector(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});

// Back to top;
indicatoreBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Height of page;
window.onscroll = () => {
  let height = (scrollY / (document.body.scrollHeight - innerHeight)) * 100;
  indicatoreBtn.style.background = `conic-gradient(white ${height}%, transparent ${height}% 100%)`;

  if (window.scrollY > 100) {
    indicatoreBtn.style.transform = "translateX(-150%)";
    header.style.backgroundColor = "black";
  } else {
    indicatoreBtn.style.transform = "translateX(0%)";
    indicatoreBtn.style.opacity = "0.7";
    header.style.backgroundColor = "transparent";
  }
};


// Create overlay;
const overlay = document.createElement("div");
header.appendChild(overlay);

overlay.addEventListener("click", () => {
  toggleMobileMenu("-400px", "bloxk");
});

// Open Button;
openMenu.addEventListener("click", () => {
  toggleMobileMenu("0px", "none");
});

// Close Button
closeBtn.addEventListener("click", () => {
  toggleMobileMenu("-400px", "block");
});

// Reset form after submiting;
form.addEventListener("submit", function () {
  form.reset();
});

//   Auto Typing;
var AutoTyping = (function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var i = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(i.exports, i, i.exports, r), (i.l = !0), i.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          r.d(
            n,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 0))
  );
})([
  function (e, t, r) {
    "use strict";
    r.r(t);
    t.default = class {
      constructor(
        e,
        t,
        {
          typeSpeed: r = 150,
          deleteSpeed: n = 150,
          waitBeforeDelete: i = 1e3,
          waitBetweenWords: o = 1e3,
          writeWhole: l = !1,
        } = {}
      ) {
        (this.selector = e),
          (this.text = t),
          (this.typeSpeed = r),
          (this.deleteSpeed = n),
          (this.waitBeforeDelete = i),
          (this.waitBetweenWords = o),
          (this.writeWhole = l),
          (this.el = document.querySelector(e));
      }
      async start() {
        this.el;
        for (let e = 0; e < this.text.length; e++) {
          const t = this.text[e];
          let r = t.split("");
          this.writeWhole && (r = [t]),
            await this.writeText(r),
            e == this.text.length - 1 && (e = -1);
        }
      }
      writeText(e) {
        let t = this;
        return new Promise((r) => {
          const n = this.el;
          let i = !1,
            o = setInterval(() => {
              let l = e.shift();
              i && ((i = !1), (l = " " + l)),
                (i = " " == l),
                (n.innerText += l),
                0 == e.length &&
                  (clearInterval(o),
                  setTimeout(() => {
                    let e = setInterval(() => {
                      const i = n.innerText;
                      t.writeWhole
                        ? (n.innerText = "")
                        : (n.innerText = i.substr(0, i.length - 1)),
                        0 == n.innerText.length &&
                          (clearInterval(e),
                          setTimeout(() => r(), this.waitBetweenWords));
                    }, this.deleteSpeed);
                  }, this.waitBeforeDelete));
            }, this.typeSpeed);
        });
      }
    };
  },
]).default;

const exampleText = ["Frontend Developer"];
const exampleTyping = new AutoTyping("#job", exampleText, {
  typeSpeed: 100,
  deleteSpeed: 100,
  waitBeforeDelete: 2000,
  waitBetweenWords: 500,
});
exampleTyping.start();
// });

AOS.init({
  duration: 1000,
  once: true
});