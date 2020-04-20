// Every test file (you can create as many as you want) should start like this
// Please, do NOT touch. They will be automatically removed for browser tests -->


// <--

const numbers = [
  {
    value: BigInt(1),
    prime: false,
    iterations: 16,
    workers: false
  },
  {
    value: BigInt(2),
    prime: true,
    iterations: 16,
    workers: false
  },
  {
    value: 3,
    prime: true,
    iterations: 16,
    workers: false
  },
  {
    value: BigInt(15),
    prime: false,
    iterations: 32,
    workers: false
  },
  {
    value: 29,
    prime: true,
    iterations: 16,
    workers: false
  },
  {
    value: BigInt('669483106578092405936560831017556154622901950048903016651289'),
    prime: true,
    iterations: 24,
    workers: false
  },
  {
    value: BigInt('2074722246773485207821695222107608587480996474721117292752992589912196684750549658310084416732550077'),
    prime: true,
    iterations: 16,
    workers: false
  },
  {
    value: BigInt('2074722246773485207821695222107608587480996474721117292752992589912196684750549658310084416732550079'),
    prime: false,
    iterations: 16,
    workers: false
  },
  {
    value: BigInt('115922179551495973383410176342643722334557255682879605864838806293659619625004303206250384392546855063844106965156287951749387634112551089284595541103692716528774876311641700929986988023197242224581099872580798960693521778607396791006450968430359009613295725905514216842343121690916290236558767890728449777'),
    prime: true,
    iterations: 24,
    workers: true
  },
  {
    value: BigInt('168694196579467171180863939518634764192343817610869919231900537093664715354591592262546800497540343203057121816378265655992490621138321114570420047522219942818258345349322155251835677199539229050711145144861404607171419723967136221126986330819362088262358855325306938646602003059377699727688477555163239222109') * BigInt('144678545212641449725111562354371812236197961234111744040227045242578772124779004756249085154188369039159690638725821245974978963371615699005072473649705367893567309027634121825164880046600125480885803891136149601797439273507802533807541605261215613891134865916295914192271736572001975016089773532547481638243'),
    prime: false,
    iterations: 16,
    workers: true
  },
  {
    value: BigInt('918145944120889203205646923554374144932845997937845799234617798611046542304088105084854788397071323714642587188481158334265864050544813693415594035822877094557870151480865568334936301231664228940480803192289508235412296324312748621874408067955753620604885023289655277704554716080844406284392300643321715285709865081125252390440327650852470312931679380011885102491340191287595160450544053114365852338670819405357496612993587404998677760882578064637552397840566752638770525765833183986360029736508910848408875329873614164495552615086579144675027852136994842529623698055210822311666048300438808691619782893307972452223713060928388502843564836966586109748062827799521852219158489504529458627699284110902303538160168376473182639384638674469114371472053977558648090155686345760457454061117853710619580819749222459422610617170567016772342291486643520567969321969827786373531753524990712622940069883277763528926899970596407140603912036918433859986491820017690762751824769335720368488097262208835708414085501930989486498185503469986946236128468697606998536541209764920494156326791142098506801288127033229779646920082892258428128572765585196779698362187479280520327053508580551167899837393726371144977951402741307021389967382422805567365901203'),
    prime: true,
    iterations: 16,
    workers: true
  },
  {
    value: BigInt('940719693126280825126763871881743336375040232953039527942717290104060740215493004508206768342926022549956464101136893240409560470269654765366248516968645294076406953865805712688760371102637642013723011744011617678651884521901163090779813242269935310225049805992299292275574585773507915278612311449919050091057023179541184986547995894821648553256021675133997240195429424258757033557367142630663053464438840832073753440939208165158795269598771598124509831433327480118038278887538430675994497384283550890544882369140852048496460551123626856255619494025370171790720106325655890348475483349150258338517508459674722099347335608814922179633411167540545786247819334838979610017735984374883325689517847175539632896026875016305529321705457954181425405794479825617747354596485074451489940385640535898876551301296003465792117006135339109817937663957519031436646579178503423889430062127572272773511424424297800355292430651838502733756881154935252456036638082486459287411002911323257940893413982671660332662880068976408321968046549017547143836993553556640198884769590214676797037397502067035957959952990027503148987727895561468097917730167320715053689862847457761993196945361244822787209076446259359976421264285658106819879849052247546957718175231'),
    prime: false,
    iterations: 16,
    workers: true
  }
];

describe('isProbablyPrime', function () {
  this.timeout(90000);
  for (const num of numbers) {
    describe(`isProbablyPrime(${num.value}, ${num.iterations}, ${!num.workers})`, function () {
      it(`should return ${num.prime}`, async function () {
        let ret;
        if (num.iterations === 16 && num.workers) ret = await _pkg.isProbablyPrime(num.value);
        else ret = await _pkg.isProbablyPrime(num.value, num.iterations, !num.workers);
        chai.expect(ret).to.equal(num.prime);
      });
    });
  }
});

// Every test file (you can create as many as you want) should start like this
// Please, do NOT touch. They will be automatically removed for browser tests -->


// <--

const bitLengths = [
  0,
  8,
  255,
  256,
  258,
  512,
  1024,
  2048,
  3072
];

describe('prime', function () {
  this.timeout(120000);
  for (const bitLength of bitLengths) {
    describe(`prime(${bitLength})`, function () {
      it(`should return a random ${bitLength}-bits probable prime`, async function () {
        let primeBitLength = bitLength;
        try {
          const prime = await _pkg.prime(bitLength);
          primeBitLength = _pkg.bitLength(prime);
        } catch {}
        chai.expect(primeBitLength).to.equal(bitLength);
      });
    });
  }
  describe('Testing sync (NOT-RECOMMENDED) version: primeSync()', function () {
    it('should return a random 1024-bits probable prime', function () {
      const prime = _pkg.primeSync(1024, 16);
      const primeBitLength = _pkg.bitLength(prime);
      chai.expect(primeBitLength).to.equal(1024);
      try {
        _pkg.primeSync(0);
      } catch (error) {
        chai.expect(true).to.equal(true);
      }
    });
  });
});

// Every test file (you can create as many as you want) should start like this
// Please, do NOT touch. They will be automatically removed for browser tests -->


// <--

const numbers$1 = [
  {
    min: BigInt(1),
    max: BigInt(2) ** BigInt(234),
    iterations: 100,
    error: false,
    errorMax: false
  },
  {
    min: BigInt('122461641436345153'),
    max: BigInt(2) ** BigInt(234),
    iterations: 100,
    error: false,
    errorMax: false
  },
  {
    min: BigInt(146347),
    max: BigInt(2),
    iterations: 1,
    error: true,
    errorMax: false
  },
  {
    min: BigInt(2),
    max: BigInt(2),
    iterations: 1,
    error: true,
    errorMax: false
  },
  {
    min: BigInt(-4),
    max: BigInt(2),
    iterations: 1,
    error: true,
    errorMax: false
  },
  {
    min: BigInt(1),
    max: BigInt(-1),
    iterations: 1,
    error: true,
    errorMax: true
  }
];

describe('randBetween', function () {
  this.timeout(90000);
  for (const num of numbers$1) {
    describe(`randBetween(${num.max}, ${num.min})`, function () {
      if (!num.error) {
        it(`[${num.iterations} iterations] should return x such that min < x < max`, function () {
          let ret = true;
          for (let i = 0; i < num.iterations; i++) {
            const x = _pkg.randBetween(num.max, num.min);
            ret = ret && x > num.min && x < num.max;
          }
          chai.expect(ret).to.equal(true);
        });
      } else {
        it('should return error (max <=0 || min <0 || min>=max)', function () {
          try {
            _pkg.randBetween(num.max, num.min);
            chai.expect(num.error).to.equal(false);
          } catch (error) {
            chai.expect(num.error).to.equal(true);
          }
        });
      }
    });
    describe(`randBetween(${num.max})`, function () {
      if (!num.errorMax) {
        it(`[${num.iterations} iterations] should return x such that 1 <= x <= max`, function () {
          let ret = true;
          for (let i = 0; i < num.iterations; i++) {
            const x = _pkg.randBetween(num.max);
            ret = ret && x >= BigInt(1) && x <= num.max;
          }
          chai.expect(ret).to.equal(true);
        });
      } else {
        it('should return error (max <=0)', function () {
          try {
            _pkg.randBetween(num.max);
            chai.expect(num.errorMax).to.equal(false);
          } catch (error) {
            chai.expect(num.errorMax).to.equal(true);
          }
        });
      }
    });
  }
});

// Every test file (you can create as many as you want) should start like this
// Please, do NOT touch. They will be automatically removed for browser tests -->


// <--

const iterations = 10;
const bitLengths$1 = [0, 3, 8, 16, 511, 2048];
const byteLengths = [0, 1, 8, 33, 40];

describe('testing randBits', async function () {
  for (const bitLength of bitLengths$1) {
    describe(`${iterations} of randBitsSync(${bitLength})`, function () {
      for (let i = 0; i < iterations; i++) {
        it('should return a buffer', function () {
          try {
            const randbits = _pkg.randBitsSync(bitLength);
            // console.log(JSON.stringify(randbits))
            if (randbits instanceof Uint8Array) chai.expect(randbits).to.be.an.instanceOf(Uint8Array);
            else chai.expect(randbits).to.be.an.instanceOf(Buffer);
            const randbits2 = _pkg.randBitsSync(bitLength, true);
            // console.log(JSON.stringify(randbits2))
            if (randbits2 instanceof Uint8Array) chai.expect(randbits2).to.be.an.instanceOf(Uint8Array);
            else chai.expect(randbits2).to.be.an.instanceOf(Buffer);
          } catch (error) {
            chai.expect(bitLength).to.be.lte(0);
          }
        });
      }
    });
    describe(`${iterations} of randBits(${bitLength})`, async function () {
      for (let i = 0; i < iterations; i++) {
        it('should return a buffer', async function () {
          try {
            const randbits = await _pkg.randBits(bitLength);
            // console.log(JSON.stringify(randbits))
            if (randbits instanceof Uint8Array) chai.expect(randbits).to.be.an.instanceOf(Uint8Array);
            else chai.expect(randbits).to.be.an.instanceOf(Buffer);
            const randbits2 = await _pkg.randBits(bitLength, true);
            // console.log(JSON.stringify(randbits2))
            if (randbits2 instanceof Uint8Array) chai.expect(randbits2).to.be.an.instanceOf(Uint8Array);
            else chai.expect(randbits2).to.be.an.instanceOf(Buffer);
          } catch (error) {
            chai.expect(bitLength).to.be.lte(0);
          }
        });
      }
    });
  }
});

describe('testing randBytes', async function () {
  for (const byteLength of byteLengths) {
    describe(`${iterations} of randBytesSync(${byteLength})`, function () {
      for (let i = 0; i < iterations; i++) {
        it('should return a buffer', function () {
          try {
            const randbits = _pkg.randBytesSync(byteLength);
            console.log(JSON.stringify(randbits));
            if (randbits instanceof Uint8Array) chai.expect(randbits).to.be.an.instanceOf(Uint8Array);
            else chai.expect(randbits).to.be.an.instanceOf(Buffer);
            const randbits2 = _pkg.randBytesSync(byteLength, true);
            console.log(JSON.stringify(randbits2));
            if (randbits2 instanceof Uint8Array) chai.expect(randbits2).to.be.an.instanceOf(Uint8Array);
            else chai.expect(randbits2).to.be.an.instanceOf(Buffer);
          } catch (error) {
            chai.expect(byteLength).to.be.lte(0);
          }
        });
      }
    });
    describe(`${iterations} of randBytes(${byteLength})`, async function () {
      for (let i = 0; i < iterations; i++) {
        it('should return a buffer', async function () {
          try {
            const randbits = await _pkg.randBytes(byteLength);
            console.log(JSON.stringify(randbits));
            if (randbits instanceof Uint8Array) chai.expect(randbits).to.be.an.instanceOf(Uint8Array);
            else chai.expect(randbits).to.be.an.instanceOf(Buffer);
            const randbits2 = await _pkg.randBytes(byteLength, true);
            console.log(JSON.stringify(randbits2));
            if (randbits2 instanceof Uint8Array) chai.expect(randbits2).to.be.an.instanceOf(Uint8Array);
            else chai.expect(randbits2).to.be.an.instanceOf(Buffer);
          } catch (error) {
            chai.expect(byteLength).to.be.lte(0);
          }
        });
      }
    });
  }
});
