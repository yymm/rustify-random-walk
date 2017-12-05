(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
let rust = 0

let wasm = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,124,3,2,1,0,4,4,1,112,0,0,5,3,1,0,17,7,17,2,6,109,101,109,111,114,121,2,0,4,114,97,110,100,0,0,9,1,0,10,90,1,88,1,2,127,65,0,40,2,12,33,0,65,0,65,0,40,2,16,54,2,12,65,0,65,0,40,2,20,54,2,16,65,0,65,0,40,2,24,34,1,54,2,20,65,0,32,1,32,0,32,0,65,11,116,115,34,0,65,8,118,32,0,115,115,32,1,65,19,118,115,34,0,54,2,24,32,0,184,68,0,0,224,255,255,255,239,65,163,11,11,31,2,0,65,4,11,4,32,0,16,0,0,65,12,11,16,21,205,91,7,229,85,154,21,181,59,18,31,51,19,73,5])

WebAssembly.instantiate(wasm, {})
  .then(function (res) {
    let rand = res.instance.exports.rand
    let canvas = document.getElementById("canvas")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    let ctx = canvas.getContext("2d")
    // start from center
    let x = ~~canvas.width / 2
    let y = ~~canvas.height / 2
    // unit of step
    const us = 2;
    function render() {
      const r = rand()
      if (r < 0.25) x += us
      else if (r < 0.5) x -= us
      else if (r < 0.75) y += us
      else y -= us
      ctx.fillRect(x, y, us, us)
    }
    setInterval(render, 5)
  }).catch(function (e) {
    console.error('Creating WASM module failed', e)
  })

},{}]},{},[1]);
