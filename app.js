function hash(input, dictionary) 
{
	//  TODO: implementați funcția
	if (typeof input !== 'string')
		throw new Error("Input should be a string");
	
	dictionary.forEach(element => {
		if (typeof element !== 'string')
			throw new Error("Invalid dictionary format");
	});

	dictionary.forEach(element => 
		dictionary.push(element.replace(element.charAt(0), element.charAt(0).toUpperCase())));

	dictionary.forEach(element => {
		if (input.includes(element)) 
		{
			const newString = element;
			let helpString = '';
			let i;
			for (i = 1 ; i < element.length-1 ; i++) 
			{
				helpString = helpString + '#';
			}
			element = element[0] + helpString + element[element.length - 1];
			input = input.replace(newString, element);
		}

	});

	return input;
}



const app = {
	hash
};

module.exports = app;

