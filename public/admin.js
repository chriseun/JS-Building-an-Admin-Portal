// const { text } = require("body-parser")

async function main() {

  let response = await fetch('http://localhost:3001/listBooks')
  let books = await response.json()

  books.forEach(renderBook)
  // books.forEach((book) =>{

  //   let input = document.createElement('input')
  //   root.appendChild(input)


}
// Your Code Here



function renderBook(book) {
  let bookContainer = document.querySelector('#root')

  let title = document.createElement('h5')
  title.textContent = book.title;

  let input = document.createElement('input')
  input.value = book.quantity

  let submit = document.createElement('button')
  submit.textContent = 'Save'


  submit.addEventListener('click', () => {
    fetch('http://localhost:3001/updateBook', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: book.id,
        quantity: input.value
      })
    })
  })

  title.append(input, submit)


      bookContainer.append(title)
}

main()



// async function update(book){
//   let responseOne = await fetch('http://localhost:3001/updateBook', {
//     method: 'PATCH',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//       "id": book.id,
//       quantity: txtName.value
//     }),
//   })
//   let updatedBook = await responseOne.json();
// }
