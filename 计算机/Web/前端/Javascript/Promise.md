`Promise` 是为了解决回调地狱问题提出的，使回调函数的嵌套调用变为链式调用。

- 同步：任务各阶段必须连续执行，知道该任务完成
- 异步：任务各阶段不必连续执行，可以执行到某一个阶段挂起任务，转而执行另一个任务。

只有异步操作的结果，才能够改变Promise对象的状态。
- `promise` 对象的三种状态：
	- `pending`
	- `fullfilled`
	- `rejected`

`promise = new Promise((resolve, reject) => { asynchonrons operation;})`

`Promise` 构造函数接收一个异步函数作为参数，该异步函数又可以接收两个参数作为返回值，分别为promise`fullfilled`时的返回值和`rejected`时的返回值，一般将这两个参数命名为：`resolve` `reject`. 返回方法为：`resolve(<return value>)`. 这两个参数名称可以随便起，但位置是固定的，第一个参数是成功时的返回值，第二个参数是失败时的返回值。 可见，要么成功、失败时的返回值都具备，要么只具备成功时的返回值，不可能出现只有失败时的返回值而没有成功时的返回值。

`promise.then(function(success){success handler})` 
`promise.catch(function(error){error handler})`
`promise`  对象的`then`方法接收成功时的返回值作为参数，进行成功后的处理。`catch`方法则接收失败时的返回值，进行失败后的处理。
还可以这样写：
```Javascript
promise.then((success) => {
	success handler;
}).catch((error) => {
	error handler;
})
```


# async await
异步函数总是返回一个 Promise.

