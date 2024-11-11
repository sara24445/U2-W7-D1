class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.location = location
  }

  compareAge(other) {
    if (this.age > other.age) {
      return `${this.firstName} ${this.lastName} è più vecchio di ${other.firstName} ${other.lastName}.`
    } else if (this.age < other.age) {
      return `${this.firstName} ${this.lastName} è più giovane di ${other.firstName} ${other.lastName}.`
    } else {
      return `${this.firstName} ${this.lastName} e ${other.firstName} ${other.lastName} hanno la stessa età.`
    }
  }
}

// Creazione di oggetti utente
const utente1 = new User('Marco', 'Rossi', 30, 'Milano')
const utente2 = new User('Giulia', 'Verdi', 25, 'Roma')
const utente3 = new User('Luca', 'Bianchi', 30, 'Torino')

// Verifica del confronto tra le età
console.log(utente1.compareAge(utente2)) // Marco è più vecchio di Giulia.
console.log(utente2.compareAge(utente1)) // Giulia è più giovane di Marco.
console.log(utente1.compareAge(utente3)) // Marco e Luca hanno la stessa età.
console.log(utente2.compareAge(utente3)) // Giulia è più giovane di Luca.

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName
    this.ownerName = ownerName
    this.species = species
    this.breed = breed
  }

  sharesOwner(other) {
    return this.ownerName === other.ownerName
  }
}

const petForm = document.getElementById('pet-form')
const petList = document.getElementById('pet-list')
const pets = []

petForm.addEventListener('submit', function (event) {
  event.preventDefault()

  const petName = document.getElementById('petName').value
  const ownerName = document.getElementById('ownerName').value
  const species = document.getElementById('species').value
  const breed = document.getElementById('breed').value

  const newPet = new Pet(petName, ownerName, species, breed)
  pets.push(newPet)
  displayPets()

  petForm.reset() // Reset del modulo
})

function displayPets() {
  petList.innerHTML = '' // Pulisce la lista esistente

  pets.forEach((pet) => {
    const listItem = document.createElement('li')
    listItem.textContent = `${pet.petName} (${pet.species} - ${pet.breed}), Proprietario: ${pet.ownerName}`
    petList.appendChild(listItem)
  })
}
