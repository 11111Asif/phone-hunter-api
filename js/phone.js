const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    // console.log(phones)
    displayPhone(phones, isShowAll)
}


const displayPhone = (phones, isShowAll) => {

    const phoneContainer = document.getElementById('phone-container')
    phoneContainer.textContent = '';


    const showAllContainer = document.getElementById('show-all-container')
    if(phones.length > 12 && !isShowAll){
      showAllContainer.classList.remove('hidden')
    }
    else{
      showAllContainer.classList.add('hidden')
    }

    console.log('is show all', isShowAll)
   if(!isShowAll){
    phones = phones.slice(0,12);
   }
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
                        <button onclick = "handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
                      </div>
                    </div>

        `
        phoneContainer.appendChild(phoneCard)
    });
    toggleLoadingSpinner(false)
}

const handleShowDetails = async(id)=> {
  console.log('show details', id)
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const data = await res.json()
  const phone = data.data
  console.log(phone)
  phoneShowDetails(phone)
}

const phoneShowDetails = (phone) => {
  console.log(phone)
  const phoneName = document.getElementById('show-details-phone-name')
  phoneName.innerText = phone.name;


  const showDetailsContainer = document.getElementById('show-details-container')
  showDetailsContainer.innerHTML = `
      <img class = "flex text-center justify-center items-center" src= "${phone.image}" alt="" />
      <p class = "font-bold"><span>Storage: ${phone.mainFeatures.storage}</span></p>
      <p>Display Size: ${phone.mainFeatures.displaySize}</p>
      <p>ChipSet: ${phone.mainFeatures.chipSet}</p>
      <p>Memory: ${phone.mainFeatures.memory}</p>
      <p>Slug: ${phone.slug}</p>
      <p>ReleaseDate: ${phone.releaseDate}</p>
      <p>Brand: ${phone.brand}</p>
  `


  show_details_modal.showModal()
}


const handleSearch = (isShowAll)=> {
  toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    console.log(searchText)
    loadPhone(searchText, isShowAll)
}

// const handleSearch2 = ()=> {
//   toggleLoadingSpinner(true);
//   const searchField = document.getElementById('search-field2')
//   const searchText = searchField.value;
//   // console.log(searchText)
//   loadPhone(searchText)
// }

const toggleLoadingSpinner = (isLoading)=> {
  const loadingSpinner = document.getElementById('loading-spinner')
  if(isLoading){
    loadingSpinner.classList.remove('hidden')
  }
  else{
    loadingSpinner.classList.add('hidden')
  }

}

const handleShowAll = ()=> {
  handleSearch(true)
}

// loadPhone();