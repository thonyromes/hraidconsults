<template lang="pug">
.wrapper
header.header
  //- LOGO AND ACOUNT
  #navbar
    .border-bottom.bg-success
      nav.navbar.navbar-expand.navbar-light.col-12.col-sm-10.mx-auto.justify-content-between.py-1
        a.navbar-brand(href='#') HR Aid Consults

        ul.navbar-nav
          li.nav-item.mx-2
            a.nav-link.text-center.f-w--6(href='#') MY ACCOUNT

//- CAROUSEL
section
  .home-carousel
    #carouselBanner.carousel.slide.carousel-fade(data-ride='carousel')
      ol.carousel-indicators.justify-content-start
        li.active(data-target='#carouselBanner', data-slide-to='0')
        li(data-target='#carouselBanner', data-slide-to='1')
      .carousel-inner
        .carousel-item.active(data-interval='5000')
          img.d-block.w-100.object-cover(
            src='../assets/images/slides/img1.jpg',
            alt='room'
          )
        .carousel-item(data-interval='5000')
          img.d-block.w-100.object-cover(
            src='../assets/images/slides/img2.jpg',
            alt='room'
          )

//- MAIN CONTENT
main.bg-white.py-5
  .col-12.col-sm-10.mx-auto
    section.my-5.shadow
      .d-flex.flex-wrap.justify-content-between.align-items-center.border-bottom.px-3.pt-3.pb-1
        h6.f-w--6.f-s--sm.mb-2.text-capitalize {{ title }}
        .form-inline
          .form-group.mb-2
            label.d-inline-block.f-w--6.mr-2.sr-only(for='search') Search
            input.form-control.f-s--sm(
              type='text',
              placeholder='Filter merchants',
              @keyup='useMerchantsByFilter'
            )
        .form-inline
          .form-group.mb-2
            label.d-inline-block.f-w--6.mr-2.sr-only(for='category') Category
            select#category.custom-select.f-s--sm(@change='useMerchantsByType')
              option.disabled(disabled='', selected='') Choose category:
              option(value='all') All
              option(value='service') Service merchants
              option(value='product') Product merchants

      .products.container-fluid.px-4.py-2
        .row.row-cols-1.row-cols-sm-2.row-cols-md-3.row-cols-xl-4(
          v-if='merchants.length > 0'
        )
          .col.p-2(v-for='merchant in merchants', :key='merchant.id')
            MerchantCard(:merchant-details='merchant')
        p.m-0(v-else) No merchant found
</template>

<script>
import { mapGetters } from 'vuex';

import MerchantCard from '../components/MerchantCard.vue';

export default {
  name: 'Home',
  components: { MerchantCard },

  data() {
    return {
      merchants: [],
      title: 'all merchants',
    };
  },

  computed: {
    ...mapGetters([
      'getMerchants',
      'getMerchantsByType',
      'getMerchantsByFilter',
    ]),
  },

  methods: {
    useMerchants() {
      this.merchants = this.getMerchants;
    },
    useMerchantsByType(e) {
      const category = e.target.value;
      this.merchants = this.getMerchantsByType(category);
      this.title = `${category} merchants`;
    },
    useMerchantsByFilter(e) {
      const query = e.target.value;
      this.merchants = this.getMerchantsByFilter(query);
      this.title = query ? `Looking for '${query}'` : 'all merchants';
    },
  },

  mounted() {
    this.useMerchants();
  },
};
</script>
