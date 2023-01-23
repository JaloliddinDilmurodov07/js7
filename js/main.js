let elInput = document.querySelector('input')
let elBtn = document.querySelector('.btn')
let elList = document.querySelector('.list')

let data = []

elBtn.addEventListener('click', (e) => {
    let getData = window.localStorage.getItem('btn')

    e.preventDefault()
    const input = elInput.value
    data.push(input)
    const local = localStorage.setItem('btn', JSON.stringify(data))

    console.log(data);
    i.textContent = "Qo'shildi:" + data

})
let i = document.createElement('li')
elList.appendChild(i)



i.classList.add('newli')