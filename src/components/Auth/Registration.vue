<template>
	    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="6"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Registration form</v-toolbar-title>

              </v-toolbar>
              <v-card-text>
                <v-form  v-model="valid" ref="form" lazy-validation>
                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="mdi-account"
                    type="email"
                    v-model="email"
                    :rules="emailRules"

                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    :rules="passRules"
                    :counter="20"
                    v-model="password"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Confirm Password"
                    name="confirm-password"
                    prepend-icon="mdi-lock-open"
                    type="password"
                    :rules="confirmPassRules"
                    :counter="20"
                    v-model="confirmPassword"
                  ></v-text-field>

                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary"
                	:disabled="!valid"
									@click="onSubmit"
                >Create account</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
</template>


<script>
  export default {
   data() {
   	return {
   		valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/.test(v) || 'E-mail must be valid',
      ],
      passRules: [
        v => !!v || 'Password is required',
        v => (v && v.length>=6 && v.length <= 30) || 'Password must be lonher than 6 and less then 30 characters',
      ],
      confirmPassRules:  [
        v => !!v || 'Password is required',
         v => v === this.password || 'Password doesn\'t match'
      ],
   		email: '',
   		password: '',
   		confirmPassword: ''
   	}
   },
   methods: {
   	onSubmit () {
		 if (this.$refs.form.validate()) {
         const user = {
         	email: this.email,
         	password: this.password
         }
         console.log(user);
        }
   	}
   }
  }
</script>