`specifiers-and-qualifiers declarators[-and-initializers]`
- `specifiers`:
	- `type-sepcifiers`: `int`, `double` etc.
	- zero or one `storage-class specifiers`: `auto`, `static`, `register` etc.
	- zeor or more `function specifiers`: `inline`(only when declaring function)
	
- `qualifiers`:
	- zero or more `type qualifiers`: `const`, `volatile`, `restrict` etc.
# declarator
```C
int a = 1, *p = NULL, f(void), (*pf)(double);
// the type specifier is "int"
// declarator "a" defines an object of type int
//   initializer "=1" provides its initial value
// declarator "*p" defines an object of type pointer to int
//   initializer "=NULL" provides its initial value
// declarator "f(void)" declares a function named f taking void and returning int(sepecifier)
// declarator "(*pf)(double)" defines an object of type pointer
//   to function taking double and returning int
```

# storage duration and linkage
## storage duration
- `automatic`:
- `static`:
- `allocated`: The storage is allocated and deallocated on request, by using dynamic memory allocation functions.
- `thread`: