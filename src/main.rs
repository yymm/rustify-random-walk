mod xorshift;

use xorshift::XorShift;

fn main() {
    let mut rand = XorShift::new();
    for _ in 0..20 {
        println!("{}", rand.gen_norm());
    }
}
