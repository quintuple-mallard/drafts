# Introduction

Many programs need (apparently) random values to simulate real-world events.

Common, familiar examples include:

  - A coin toss: a random value from ('H', 'T').
  - The roll of a die: a random integer from 1 to 6.
  - Shuffling a deck of cards: a random ordering of a card list.
  - The creation of trees and bushes in a 3-D graphics simulation.

Generating truly random values with a computer is a [surprisingly difficult technical challenge][why-randomness-is-hard], so you may see these results referred to as "pseudorandom".

In Javascript, you can generate psuedorandom numbers using the [`Math.random()`][Math.random] function.
It will return a random floating-point number between 0 (inclusive), and 1 (exclusive).
To generate a random number within a different range, you can use the snippet `Math.random() * max` to generate a random number between 0 and `max`.
To generate a random integer, you can use the `Math.floor()` or `Math.ceil()` functions to round a randomly generated number.

~~~~exercism/caution

The random module should NOT be used for security and cryptographic applications!!

Instead, you can use the Web Crypto API, which provides various cryptographic methods.
~~~~

[why-randomness-is-hard]: https://www.malwarebytes.com/blog/news/2013/09/in-computers-are-random-numbers-really-random
[Math.random]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
