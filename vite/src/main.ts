let activeEffect; // 当前正在执行的 effect 函数
let allDepend = new WeakMap(); // 保存所有的依赖关系

function reactive(obj) {
  return new Proxy(obj, {
    get(target, key,receiver) {
      track(target, key)
      return Reflect.get(target, key,receiver)
    },
    set(target, key, value) {
      const result = Reflect.set(target, key, value)
      trigger(target, key)
      return result
    }
  })
}

function ref(value) {
  const refObject = {
    get value() {
      track(refObject, "value");
      return value;
    },
    set value(newValue) {
      value = newValue;
      trigger(refObject, "value");
    },
  };
  return refObject;
}


function track(target, key) {
  if (activeEffect) {
    const effects = getSubscribersForProperty(target, key);
    effects.add(activeEffect);
  }
}

function trigger(target, key) {
  const effects = getSubscribersForProperty(target, key);
  effects.forEach((effect) => effect());
}

function getSubscribersForProperty(target, key): Set<Function> {
  const map: Map<string, Set<Function>> = allDepend.has(target) ? allDepend.get(target) : new Map();
  if (map.has(key)) {
    return map.get(key) as Set<Function>;
  }
  const set = new Set<Function>();
  map.set(key, set);
  allDepend.set(target, map);
  return set;
}


function watchEffect(update) {
  activeEffect = () => {
    update();
    activeEffect = null;
  };
  activeEffect();
}

function computed(getter) {
  let cachedValue; // 缓存的值
  let dirty = true;

  activeEffect = () => {
    computedRef.update();
    activeEffect = null;
  };

  const computedRef = {
    get value() {
      if (dirty) {
        cachedValue = getter(); // 重新计算
        dirty = false; // 清除脏标记
      }
      return cachedValue;
    },
    update() {
      dirty = true; // 标记为脏
    },
  };

  return computedRef;
}


const v1 = ref(1);
const v2 = ref(0);

const test = reactive({
  a: 4,
  b: 2
})

watchEffect(() => {
  const total = v1.value * v2.value;
  // const total = test.a * test.b;
  
  console.log( `${total}`);
});


const total = computed(() => v1.value + v2.value);
// const total = computed(() => test.a + test.b);
console.log( `${total.value}`);


setTimeout(() => {
  v2.value = 2
  // test.b = 5;
  console.log( `${total.value}`);
}, 1000);
