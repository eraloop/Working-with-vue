<template>
  <div class="form-api-section centered-content">
    <div class="move-up">
      <section class="form-section">
        <form action="">
          <input
            type="text"
            name="urlDetails"
            value="value"
            v-model="original_link"
            placeholder="Please enter your url to shorten"
          />
          <button
            class="url-btn btn btn-fill"
            v-on:click.prevent="makeApiRequest(original_link)"
          >
            shorten
          </button>
        </form>
      </section>
    </div>

    <p class="error not-visible">
      Please fill in the url you wish to shorten !!!!
    </p>

    <section class="review-short-link">
      <div v-if="fetching" class="waiting">
        <p>Hang on a moment.... Fetching</p>
      </div>
      <div class="display-url">
        <!-- api results display here after the request
                    is resolved -->
        <ul v-bind="links">
          <!-- <li>{{links.original_link}}, {{links.short_link}}</li> -->
          <li class="url" v-if="show_link">
            <p class="original-link">{{ links.original_link }}</p>
            <section class="translated-link">
              <p class="shortened-link">{{ links.short_link }}</p>
              <button v-model="btn_text" :key="btn_text" class="btn copy-btn" name="button" @click="changeText" >
                {{btn_text}}
              </button>
            </section>
          </li>
        </ul>
      </div>
      <h4 v-if="show_error" class="error" v-bind="error">{{ error }}</h4>
    </section>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      original_link: "",
      short_link: "",
      links: [],
      fetching: "",
      show_link: "",
      error: "",
      show_error :"",
      btn_text: "copy"
    };
  },

  methods: {
    makeApiRequest: function (link) {

        // try{
        //     base = `https://api.shrtco.de/v2/shorten`
        //     query = `?url=${link}`

        //     axios
        //         .get(base+query)
        //         .then(res =>{
        //             console.log(res)
        //             return res
        //         })
        //     console.log(res)
        //     return res
            
        // }
        // catch(error){
        //     throw new Error("Resource fetch failed... Invalid url provided or probably network error")
        // }

      const base = `https://api.shrtco.de/v2/shorten`;
      const query = `?url=${link}`;

      if (link == "") {
        this.show_error = true
        this.error = "Url field can't be empty!!!. Please fill in your Url.";
      } else {

        this.fetching = true;
        this.show_link = false;

        fetch(base + query)
          .then((res) => {
            res = res.json();
            return res;
          })
          .then((data) => {
            console.log("Response", data);
            this.fetching = false;
            this.show_link = true;
            this.show_error = false;

            this.short_link = data.result.short_link;
            this.links = {
              original_link: this.original_link,
              short_link: this.short_link,
            };
            console.log(this.links);
          })
          .catch((err) => {
            console.log("Error : ", err);
          });
      }
    },

    
    changeText:function(){
      this.btn_text = "copied.!!!"
    }
  },
};
</script>


<style scoped>

.move-up {
  position: relative;
  left: 0;
  top: -80px;
  margin-bottom: -30px;
}

.form-section {
  width: 100%;
  height: 130px;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;
  background: hsl(257, 27%, 26%);
  background-size: cover;
  border-radius: 10px;
}

.form-section:before {
  content: "";
  width: 100%;
  height: 130px;
  background-image: url(../assets/images/bg-shorten-desktop.svg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  /* z-index: 1; */
}

.form-section form {
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.waiting p {
  color: red;
}

li {
  text-transform: lowercase;
}

.error {
  z-index: 99;
  color: hsl(0, 87%, 75%);
  position: absolute;
  top: 30px;
  left: 320px;
  font-size: 20px;
  padding: 10px 0;
  font-weight: 300;
  font-size: 16px;
}

.not-visible {
  display: none;
}
.visible {
  display: "" !important;
}

.form-section form input {
  display: inline-block;
  width: 60%;
  padding: 13px;
  border: none;
  color: #555;
  border-radius: 10px;
  margin: 0 10px 0;
  outline: 0;
  font-size: 16px;
}

.form-section form button {
  padding: 13px 25px;
  border-radius: 10px;
}
.display-url {
  margin-top: -60px;
  margin-bottom: 60px;
}
.url {
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  color: #444;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.translated-link {
  display: flex;
  align-items: center;
}
.translated-link button {
  color: #fff;
  background: hsl(180, 66%, 49%);
  padding: 8px 20px;
  border-radius: 10px;
  margin: 0 0 0 20px;
}

.translated-link .shortened-link {
  color: hsl(180, 66%, 49%);
}
.shortened-link {
  padding: 0 10px 0;
}
</style>
