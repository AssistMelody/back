import { createMachine, createActor } from 'xstate';

const promiseMachine = createMachine({
  id: 'promise',
  initial: 'pending',
  context: {
    count: 0
  },
  states: {
    pending: {
      on: {
        RESOLVE: { target: 'active' },
        REJECT: { target: 'rejected' }
      }
    },
    active: {
        on: {
            RESOLVE: { target: 'resolved' },
            REJECT: { target: 'rejected' }
          },
        after: {
          3000: 'inactive', // 3 秒后自动切换到 inactive
        },
      },
      inactive: {
        on: {
            RESOLVE: { target: 'resolved' },
            REJECT: { target: 'rejected' }
          },
        after: {
          2000: 'active', // 2 秒后切换回 active
        },
      },
    resolved: {
      type: 'final'
    },
    rejected: {
      type: 'final'
    }
  }
});
const promiseService = createActor(promiseMachine)
promiseService.subscribe((state) => {
    console.log(state);
})

promiseService.start();
promiseService.send({ type: 'RESOLVE' });

setTimeout(() => {
    promiseService.send({ type: 'REJECT' });
}, 10_000);