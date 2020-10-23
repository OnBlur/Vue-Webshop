let steak = "https://media1.s-nbcnews.com/i/newscms/2018_07/1318715/grilled-steak-today-tease-180216_89508b219dd455b4d43311782841f938.jpg";
let oester = "https://static.ah.nl/static/recepten/img_011318_890x594_JPG.jpg"

export const state = () => ({
  data: [
    {
      id: 1,
      title: 'Cote de Boeuf',
      price: '9.99',
      image:
        steak,
    },
    {
      id: 2,
      title: 'Cote de Boeuf',
      price: '9.99',
      image:
        steak,
    },
    {
      id: 3,
      title: 'Cote de Boeuf',
      price: '9.99',
      image:
        steak,
    },
    {
      id: 4,
      title: 'Cote de Boeuf',
      price: '9.99',
      image:
        steak,
    },
    {
      id: 5,
      title: 'Cote de Boeuf',
      price: '9.99',
      image:
        steak,
    },
    {
      id: 6,
      title: 'Cote de Boeuf',
      price: '9.99',
      image:
        steak,
    },
    {
      id: 7,
      title: 'Cote de Boeuf',
      price: '9.99',
      image:
        steak,
    },
    {
      id: 8,
      title: 'Oesters',
      price: '9.99',
      image: oester,
    },
    {
      id: 9,
      title: 'Oesters',
      price: '9.99',
      image: oester,
    },
  ],
})

export const mutations = {}

export const actions = {}

export const getters = {
  allData(state) {
    return state.data
  },
  getProducts: (state) => (value) => {
    let newArray = [];

    for (let i = 0; i < state.data.length; i++) {
      for (let y = 0; y < value.length; y++) {
        if (state.data[i].id === value[y].productId) {
          newArray.push(state.data[i])
        }
      }
    }
    return newArray
  },
}
