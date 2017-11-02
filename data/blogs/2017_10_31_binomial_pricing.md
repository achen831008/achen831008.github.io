Generalization
================

$$S_0 u \delta - f_u = S_0 d \delta - f_d$$

$$\implies \delta = \frac {f_u - f_d} {S_0u - S_0d}$$

At the end, we can derive the following equation:

$$f = e^{-rT} (p f_u + (1 - p) f_d)$$

where

$$p = \frac {e^{rT} - d} {u - d}$$


Example
------

Put option with $K = 52, S_0 = 50, u = 1.2, d=0.8, \delta t = 1, r = 0.05$

```
Binomial Tree

           $72
           ╱
          ╱
       $60 (B)
        ╱ ╲
       ╱   ╲
   $50(A)  $48
       ╲   ╱
        ╲ ╱
        $40 (C)
          ╲
           ╲
           $32

```


$$p = \frac {e^{0.05 \times 1} - 0.8}{ 1.2 - 0.8} = 0.6282$$

Payoff for put is: $$max(K - S, 0)$$

$B = e^{-0.05 \times 1} (0.6282 \times 0 + (1-0.6282) \times 4) = 1.4147$

$C = e^{-0.05 \times 1} (0.6282 \times 4 + (1-0.6282) \times 20) = 9.4636$

$A = e^{-0.05 \times 1} (0.6282 \times 1.4147 + (1-0.6282) \times 9.4636) = 4.1923$

So, the value of the put is 4.1923.


