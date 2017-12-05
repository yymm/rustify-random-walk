# WASM's Random Walk with rustify

![random walk](https://gyazo.com/5667e89638de43bb3825fc5eab2581ac.png)

rustify? => https://github.com/browserify/rustify

```shell
% git clone https://github.com/yymm/rustify-random-walk
% cd rustify-random-walk
% nvm install --lts
% rustup update nightly
% rustup target add wasm32-unknown-unknown --toolchain nightly
% cargo install --git https://github.com/alexcrichton/wasm-gc
% cd view
% npm install
% ./node_modules/.bin/browserify -t rustify random_walk.js > build.js
% ./node_modules/.bin/electron .
```

https://muunyblue.github.io/8eec1a372e8a99076315db9ea4d24b2c.html
