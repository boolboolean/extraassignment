const message = document.getElementById("message")

const wordnumber = (text) => {
	return text.split(" ").length;
}

function mostFrequentWord(array)
{
	if (array.length == 0)
		return null;
	var modeMap = {};
	var mostfrequent = array[0], maxCount = 1;
	for (var i = 0; i < array.length; i++) {
		var element = array[i];
		if (modeMap[element] == null)
			modeMap[element] = 1;
		else
			modeMap[element]++;
		if (modeMap[element] > maxCount) {
			mostfrequent = element;
			maxCount = modeMap[element];
		}
	}
	return mostfrequent;
}

const randomPhrasesAndPictures = [
	{
		phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
		imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
	},
	{
		phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
		imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
	},
	{
		phrase: "You are a wizard, Harry (c) Hagrid",
		imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
	}
]

const func = () => {
	if (message.value == "" || message.value.length<20) {
		alert("You didn't entered a message, please fill the box below")
	} else {
		let messageWords = [];
		let theMostFrequentWord;
		let numberOfWordsInTheMessage = 0;

		messageWords = message.value;
		numberOfWordsInTheMessage = wordnumber(messageWords);
		theMostFrequentWord = mostFrequentWord(messageWords.toLowerCase().split(" "));

		console.log(The most frequent word of the message is "${theMostFrequentWord}")
		console.log(The number of words in the message is ${numberOfWordsInTheMessage})

		let randomNumber = Math.floor(Math.random() * randomPhrasesAndPictures.length);
		document.getElementById("phrase").innerHTML = randomPhrasesAndPictures[randomNumber].phrase;
		document.getElementById("picture").innerHTML = '<img style="width: 300px; height: 180px;" alt="Random photo" src="' + randomPhrasesAndPictures[randomNumber].imageURL + '" />';
	}
}
document.querySelector("button").addEventListener("click", func);