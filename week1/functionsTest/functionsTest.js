const content = [];
content.push('true');
content.push(1 === 1);

const fun1 = () => 1;
const fun2 = (args) => args;
const fun3 = (args) => args === undefined;

content.push(fun1() === 1);
content.push(fun1(42) === 42);
content.push(fun2(42) === 42);
content.push(fun3(undefined) === true);

// Write results to page
content.forEach((e, i) => {
	document.writeln(`#${i}: ${e}`);
	document.write('<br/>');
});
