export default {
    state: {
        ads: [
            {
                title: 'First ad',
                description: 'some description',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                id: '1'
            },
            {
                title: 'Second ad',
                description: 'some description',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                id: '2'
            },
            {
                title: 'Third ad',
                description: 'some description',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
                id: '3'
            },
            {
                title: 'Fourth ad',
                description: 'some description',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                id: '4'
            }
        ]
    },
    mutations: {
			createAd (state, payload) {
				state.ads.push(payload)
			}
    },
    actions: {
			createAd ({commit}, payload) {
				payload.id = 'ffdd'
				commit('createAd', payload)
			}
    },
    getters: {
			ads (state) {
				return state.ads
			},
			promoAds (state) {
				return state.ads.filter(ad => {
					return ad.promo
				})
			},
			myAds (state) {
				return state.ads
			},
			adById (state) {
				return adId => {
					return state.ads.find(ad => ad.id === adId)
				}
			}
    }
}