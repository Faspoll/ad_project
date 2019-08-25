<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="text--secondary mb-3">Orders</h1>
		    <v-list
		      subheader
		      two-line
		      flat
		    >

		      <v-list-item-group
		        v-model="settings"
		        multiple
		        v-for="order in orders"
		        :key="order.id"
		      >
		        <v-list-item>
		          <template>
		            <v-list-item-action>
		              <v-checkbox
										:input.value="order.done"
		                color="success"
		                @change="markDone(order)"
		              ></v-checkbox>
		            </v-list-item-action>

		            <v-list-item-content >
		              <v-list-item-title>{{ order.name }}</v-list-item-title>
		              <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
		            </v-list-item-content>
		            <v-list-tile-action>
									<v-btn :to="'/ad' + order.adId" class='primary'>open</v-btn>
		            </v-list-tile-action>
		          </template>
		        </v-list-item>

		      </v-list-item-group>
		    </v-list>
			</v-flex>
		</v-layout>
	</v-container>
</template>


<script>
	export default {
	data() {
		return {
			orders: [
				{
					id: '1',
					name: 'Glad',
					phone: '1-25-25',
					adId: '12',
					done: false
				}
			]
		}
	},
	methods: {
		markDone() {
			orders.done == true
		}
	}
}
</script>