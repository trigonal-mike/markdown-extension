# KATEX
npm: **[markdown-it-katex](https://www.npmjs.com/package/markdown-it-katex)**

## Gleichung 1
$$
  \label{eq:four}
  y_d = \sum_{i} a_i\,\cos(k_i\,x_d) \qquad \text{für ungerade } k=1,3,5,\ldots,k_\text{max}  \;.
$$

**Funktioniert nicht, Problem: label und Umlaut bei text**

**Funktioniert:**
$$
  y_d = \sum_{i} a_i\,\cos(k_i\,x_d) \qquad \text{fuer ungerade } k=1,3,5,\ldots,k_\text{max}  \;.
$$

## Gleichung 2

$$
  y_d = \left\{
    \begin{array}{rcl}
      1 & \text{fuer} & |x_d| < g \\
      -1 & \text{fuer} & |x_d| \geq g
    \end{array}\right.
$$

## Gleichung 3
$$
err = \sqrt{\frac{1}{N-1}\sum_{d=1}^{N}(f(x_d,a) - y_d)^2},
$$

## Gleichung 4
$$
  f(x) = \sum_{i} a_i\,\cos(k_i\,x) \;
$$

## Gleichung 5
  $$ 
    u=\sum_{k=1}^{\infty} x^{k-1}  =
      \left\{
       \begin{matrix}
        1/(1-x)         & \forall\; |x| <    1 \\
        \infty           & \forall\; x   \geq 1 \\
        NaN             & \forall\; x   \leq -1 
      \end{matrix} 
     \right. \; ,
  $$

## Gleichung 6
  $$ 
    u=\sum_{k=1}^{\infty} x^{k-1}  =
      \left\{
       \begin{matrix*}[l]
        1/(1-x)         & \forall\; |x| <    1 \\
        \infty           & \forall\; x   \geq 1 \\
        NaN             & \forall\; x   \leq -1 
      \end{matrix*} 
     \right. \; ,
  $$
