const cloudinaryCore = require("cloudinary-core"); // If your code is for ES5

module.exports = {
    data(){
        return _.extend({
            sdk:''
        } , window.$cloudinary)
    },

    created(){
        this.sdk = new cloudinaryCore.Cloudinary(this.config.api);
    },

    methods:{
        showImage(path , options){
            return this.sdk.url(path , options);
        }
    }
}