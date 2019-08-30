<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="text--secondary mb-3">My ads</h1>

				<v-card v-for="ad in ads" :key="ad.id" evelation-10 class="mb-3">
					<v-layout>
						<v-flex sm4>
							<v-img
								:src="ad.imageSrc"
								height="145px"
							></v-img>
						</v-flex>
						<v-flex sm8>
							<v-card-text>
								<h2 class="text--primary">{{ ad.title }}</h2>
								<p>{{ ad.description }}</p>
							</v-card-text>

							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn :to="'/ad' + ad.id" class="info">Open</v-btn>
							</v-card-actions>
						</v-flex>
					</v-layout>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>


<script>
	export default {
	data() {
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
    			title: 'First ad',
    			description: 'some description',
    			promo: false,
    			imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    			id: '2'
      	},
      	{
    			title: 'First ad',
    			description: 'some description',
    			promo: false,
    			imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    			id: '3'
      	},
    	]
		}
	}
}
</script>