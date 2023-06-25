
\# Flächeninhalt eines Bereiches zwischen zwei
  Polynomen

Schreiben Sie eine \matlab-\matref{Funktion}{function}

		[A] = poly_area(x1,x2,p1,p2),

die auf dem Intervall $[x_1,x_2]$ den Flächeninhalt zwischen 
°p1° und °p2° berechnet.

\default 
Werden nur 3 Inputargumente, oder `das` vierte leer (°p2 = []°), übergeben, 
dann setzen Sie °p2° auf Null (#matrefe{nargin},#matrefe{isempty}). In 
diesem Fall wird die Fläche zwischen °p1° und der Nulllinie berechnet.

Der Flächeninhalt °A° ist gegeben durch:
$$
  A = \left|\int_{x_1}^{x_2} (p_1(x)-p_2(x))dx \right|
$$

\hw
Polynome können mit der Funktion \matrefe{polyint} integriert
werden. In das resultierende Polynom setzt man anschließend Ober- und
Untergrenze ein und erhält somit den Wert des bestimmten Integrals.

\hw
Verwenden Sie auch die Funktion °polyadd°.
[ghgfhfg](http://www.mathworks.com/help/matlab/ref/functionname.html)
[tjfzjfjh](http://www.mathworks.com/help/matlab/ref/gdhhdh.html)

