<template lang="pug">
.card.h-100(v-if='isDataLoaded')
  img.card-img-top(
    v-if='isImageExist',
    :src='cardInfo.image',
    alt='merchant',
    loading='lazy'
  )
  img.card-img-top(
    v-else,
    :src='useImagePlaceholder',
    alt='merchant',
    loading='lazy'
  )
  .card-body.p-2
    p.card-text.mb-2.f-w--5.f-s--sm {{ cardInfo.title }}
    a.card-link.stretched-link(href='#')
</template>

<script>
// import PlaceholderImage from "../assets/images/merchants/img1.jpg";

const placeholderImg = 'https://via.placeholder.com/300x300?text=Placeholder';

export default {
  name: 'MerchantCard',
  props: {
    merchantDetails: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      cardInfo: {},
      isDataLoaded: false,
    };
  },
  computed: {
    isImageExist() {
      return this.cardInfo.image;
    },
    useImagePlaceholder() {
      return placeholderImg;
    },
  },
  methods: {
    usenormalizedList() {
      Object.assign(this.cardInfo, this.merchantDetails);
    },

    async useloadedData() {
      try {
        await this.usenormalizedList();
      } catch (err) {
        console.log(err);
      } finally {
        this.isDataLoaded = true;
      }
    },
  },
  mounted() {
    this.useloadedData();
  },
};
</script>
