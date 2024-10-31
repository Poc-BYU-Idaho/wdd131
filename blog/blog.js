// This array was provided with the assignment. I didn't make it. The book title and cover don't match for the 2nd book.
const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his \"Aunt Pol\" and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
		}
]




// Select the books section so we can put articles in it later.
const booksSection = document.querySelector(".books")


// Iterate over every article object in the articles array above.
articles.forEach((article) => {
	// Create an article element for each article using the createArticle function.
	const articleElement = createArticle(article)

	// Add the article element to the books section in our HTML.
	booksSection.append(articleElement)
})





// Takes an article object, then creates and returns an HTML article element for the object.
function createArticle(article) {
		// Create an article element.
		const articleElement = document.createElement("article")
		articleElement.classList.add("book")
	
		// Create the content for the article element by accessing the article's properties/member variables.
		const stringLiteral = `<div class="book-info">
							<p>${article.date}</p>
							<p>${article.ages}</p>
							<p>${article.genre}</p>
							<p>${article.stars}</p>
						</div>
						<div class="book-main">
							<h2>${article.title}</h2>
							<img src="${article.imgSrc}" alt="${article.imgAlt}">
							<p>${article.description} <a href="">Read More...</a></p>
						</div>`
	
		// Add the article content to the article element.
		articleElement.innerHTML = stringLiteral

		// Return the article element.
		return articleElement
}