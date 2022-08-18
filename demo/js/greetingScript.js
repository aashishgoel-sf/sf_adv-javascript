function writeOutput()
{
	alert('Hello - Alert');
	console.log('Hello - Console Log');
	// writes data in a new page if document is already loaded
	// document.write('Hello - Document Write');
	document.getElementById('jsWriteDemo').innerHTML = 'Hello - Dynamic Write';
}