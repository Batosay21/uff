/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>
int ValorGlobal;

int main ()
{
    int ValorLocal=2;
    ValorGlobal=5;
   
    printf("Numero Global: %d\n", ValorGlobal);
        printf("Numero Local: %d",ValorLocal);
    return 0;
}
