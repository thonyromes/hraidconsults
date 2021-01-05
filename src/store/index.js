import { createStore } from 'vuex';

// prettier-ignore
const filter = (item, query) => item.toLowerCase().includes(query.toLowerCase());

const Store = createStore({
  state: {
    merchants: [
      {
        id: 1,
        type: 'service',
        title: 'A fine product here',
        image: '/src/assets/images/merchants/img1.jpg',
      },
      {
        id: 2,
        type: 'product',
        title: 'The best affordable price',
        image: '/src/assets/images/merchants/img2.jpg',
      },
      {
        id: 3,
        type: 'service',
        title: 'We suggest you use GitHub',
        image: null,
      },
      {
        id: 4,
        type: 'service',
        title: 'You may choose to use any form of payment',
        image: '/src/assets/images/merchants/img3.jpg',
      },
      {
        id: 5,
        type: 'product',
        title: 'You are equally allowed to buy on credit, yes!',
        image: null,
      },
    ],
  },

  getters: {
    getMerchants(state) {
      const tmpMerchants = state.merchants;

      return tmpMerchants;
    },

    getMerchantsByType: (state) => (type) => {
      const tmpMerchants = state.merchants;

      if (type === 'all') return tmpMerchants;

      return tmpMerchants.filter((merchant) => merchant.type === type);
    },
    getMerchantsByFilter: (state) => (query) => {
      const tmpMerchants = state.merchants;

      return tmpMerchants.filter((merchant) => filter(merchant.title, query));
    },
  },
});

export default Store;
