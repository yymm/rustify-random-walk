let rust = require('rustify')

let wasm = rust('../src/xorshift.rs')

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
