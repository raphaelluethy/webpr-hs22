const content = [];
content.push('true');
content.push(1 === 1);

const fun1 = () => 1;
const fun2 = (args) => args;
const fun3 = (args) => args === undefined;
function doit(whatToDo) {
	return function bla(arg) {
		return whatToDo(arg);
	};
}

const doit2 = (callback) => (args) => callback(args);
const doFun2 = doit2(fun2);

content.push(doFun2(10));

content.push(doit2(fun2)('doit2'));

content.push(doit(fun2)('doit1'));

content.push(fun1() === 1);
content.push(fun1(42) === 42);
content.push(fun2(42) === 42);
content.push(fun3(undefined) === true);

// Write results to page
content.forEach((e, i) => {
	document.writeln(`#${i}: ${e}`);
	document.write('<br/>');
});
