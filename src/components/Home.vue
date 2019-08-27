<template>
	<div class="">
		<v-container fluid>
			<v-layout row>
				<v-flex xs12>
					<v-carousel>
						<v-carousel-item
							v-for="ad in ads"
							:key="ad.id"
							:src="ad.imageSrc"
						>
							<div class="carousel-link">
								<v-btn class="error" :to="'/ad' + ad.id">{{ ad.title }}</v-btn>
							</div>
						</v-carousel-item>
						</v-carousel>
				</v-flex>
			</v-layout>
		</v-container>
		<v-container grid-list-lg>
			<v-layout row wrap>
				<v-flex xs12 sm6 md4 xl3 
							v-for="ad in ads"
							:key="ad.id">
					<v-card
				    class="mx-auto"
				    max-width="400"
				  >
				    <v-img
				      class="white--text"
				      height="200px"
				      :src="ad.imageSrc"
				    >
				      <v-card-title  class="align-end fill-height">{{ ad.title}}</v-card-title>
				    </v-img>

				    <v-card-text>
				      <span class="text--primary">
				        <span>{{ ad.description }}</span>
				      </span>
				    </v-card-text>

				    <v-card-actions>
				    	<v-spacer></v-spacer>
				      <v-btn :to="'/ad' + ad.id"  flat>Open</v-btn>
				      <v-btn class="primary" raised >By</v-btn>
				    </v-card-actions>
				  </v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>


<script>
 export default {
    data () {
      return {
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
      }
    }
  }
</script>

<style scoped>
	.carousel-link{
		position: absolute;
		bottom: 50px;
		left: 50%;
		background: rgba(0, 0, 0, .3);
		transform: translate(-50%, 0);
		padding: 10px 20px;
		border-top-right-radius: 5px;
		border-top-left-radius: 5px;
	}

</style>
