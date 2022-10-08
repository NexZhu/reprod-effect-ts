import * as T from '@effect/core/io/Effect'

const ef = T.gen(function* ($) {
  const res = yield* $(
    T.tryCatchPromise(
      () => Promise.resolve({ str: 'test' }),
      (e) => e,
    ),
  )

  return res.str
})

void T.unsafeRunPromise(ef).then(console.log)
