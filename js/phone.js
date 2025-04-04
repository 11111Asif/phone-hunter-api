const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    // console.log(phones)
    displayPhone(phones)
}


const displayPhone = (phones) => {

    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = '';


    const showAllContainer = document.getElementById('show-all-container')
    if(phones.length > 12){
      showAllContainer.classList.remove('hidden')
    }
    else{
      showAllContainer.classList.add('hidden')
    }


    phones = phones.slice(0,12);
    // console.log(phones)
    phones.forEach(phone => {
        console.log(phone)

        const phoneCard = document.createElement('div')
        phoneCard.classList = `card bg-gray-400 p-2 m-2 shadow-sm`
        phoneCard.innerHTML = `
            <figure class="px-10 pt-10">
                      <img
                        src="${phone.image}"
                        alt="Shoes"
                        class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                      <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                      </div>
                    </div>

        `
        phoneContainer.appendChild(phoneCard)
    });
}


const handleSearch = ()=> {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText)
}

const handleSearch2 = ()=> {
  const searchField = document.getElementById('search-field2')
  const searchText = searchField.value;
  // console.log(searchText)
  loadPhone(searchText)
}

// loadPhone();