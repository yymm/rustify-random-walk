use std::u32;

pub struct XorShift {
    x: u32,
    y: u32,
    z: u32,
    w: u32,
}

impl XorShift {
    pub fn new() -> XorShift {
        return XorShift {
            x: 123456789,
            y: 362436069,
            z: 521288629,
            w: 88675123,
        };
    }

    pub fn gen(&mut self) -> u32 {
        let _x = self.x;
        let t = _x ^ (_x << 11);
        self.x = self.y;
        self.y = self.z;
        self.z = self.w;
        let _w = self.w;
        self.w = (_w ^ (_w >> 19)) ^ (t ^ (t >> 8));
        self.w
    }

    pub fn gen_norm(&mut self) -> f64 {
        self.gen() as f64 / u32::MAX as f64
    }
}

static mut XORSHIFT: XorShift = XorShift {
    x: 123456789,
    y: 362436069,
    z: 521288629,
    w: 88675123,
};

#[no_mangle]
pub fn rand() -> f64 {
    unsafe { XORSHIFT.gen_norm() }
}


#[test]
fn test_default_seed() {
    let mut rand = XorShift::new();
    assert_eq!(rand.gen(), 3701687786);
    assert_eq!(rand.gen(), 458299110);
    assert_eq!(rand.gen(), 2500872618);
    assert_eq!(rand.gen(), 3633119408);
    assert_eq!(rand.gen(), 516391518);
}

#[test]
fn test_default_seed_norm() {
    let mut rand = XorShift::new();
    assert_eq!(rand.gen_norm(), 0.8618663500207165);
    assert_eq!(rand.gen_norm(), 0.10670607679214004);
    assert_eq!(rand.gen_norm(), 0.5822797814808506);
    assert_eq!(rand.gen_norm(), 0.8459015304329576);
    assert_eq!(rand.gen_norm(), 0.12023176954133244);
}
