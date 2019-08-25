<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="text--secondary mb-4">Create new ad</h1>
					<v-form  v-model="valid" ref="form" validation>
	          <v-text-field
	            label="Ad title"
	            name="title"
	            type="text"
	            v-model="title"
	            required
	            :rules="[v => !!v || 'Title is required']"

	          ></v-text-field>

	          <v-textarea
	            label="Ad description"
	            name="description"
	            type="text"
	            required
	            no-resize
	            :rules="[v => !!v || 'Description is required']"
	            v-model="description"
	          ></v-textarea>
	        </v-form>
          <v-layout>
          	<v-flex row justify-space-between>
					    <v-btn
					      class="warning mt-3 mb-3"
					    >
					      Upload
					      <v-icon right dark>mdi-upload</v-icon>
					    </v-btn>

					    <v-switch
					      v-model="promo"
					      label="Show on main page"
					    ></v-switch>
          	</v-flex>
          </v-layout>
          <v-layout>
          	<v-flex row>
					    <img src="" height="100" alt="">
          	</v-flex>
          </v-layout>
          <v-layout>
          	<v-flex row>
          		<v-spacer></v-spacer>
          		<v-btn :disabled="!valid" class=success @click="createAd">Create Ad</v-btn>
          	</v-flex>
          </v-layout>
			</v-flex>
		</v-layout>
	</v-container>
</template>


<script>
	export default {
	data() {
		return {
			title: '',
			description: '',
			valid: false,
			promo: false
		}
	},
	methods: {
		createAd() {
			if(this.$refs.form.validate()) {
				const ad = {
					title: this.title,
					description: this.description,
					promo: this.promo
				}
				console.log(ad);
			}
		}
	}
}
</script>