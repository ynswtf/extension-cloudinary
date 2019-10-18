<template>
    <div class="uk-form uk-form-stacked uk-form-horizontal">

        <div class="uk-clearfix">
            <button class="uk-button uk-button-primary uk-align-right" @click="save">{{'Save' | trans}}</button>
            <h3 class="uk-margin-remove">{{'Cloudinary Settings' | trans}}</h3>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{'Cloud Name' | trans}}</label>
            <div class="uk-form-controls">
                <input class="uk-width-1-1" type="text" v-model="config.api.cloud_name">
            </div>
        </div>
        
        <div class="uk-form-row">
            <label class="uk-form-label">{{'Api Key' | trans}}</label>
            <div class="uk-form-controls">
                <input class="uk-width-1-1" type="text" v-model="config.api.key">
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{'Api Secret' | trans}}</label>
            <div class="uk-form-controls">
                <input class="uk-width-1-1" type="text" v-model="config.api.secret">
            </div>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label"><input type="checkbox" v-model="config.api.secure"> {{'Secure' | trans}}</label>
        </div>

        <div class="uk-form-row">
            <label class="uk-form-label">{{'Folder Name' | trans}}</label>
            <div class="uk-form-controls">
                <input class="uk-width-1-1" type="text" v-model="config.options.folder_name">
            </div>
        </div>

    </div>
</template>

<script>
    module.exports = {

        name: 'cloudinarySettings',

        settings: true,

        data(){
            return _.merge({
                
            } , window.$cloudinary)
        },

        methods:{
            save(){
                this.$http.post('admin/system/settings/config', {name: 'cloudinary', config: this.config})
                .then((res) => {
                    this.$notify(this.$trans('Saved'));
                })
                .catch( (err) => {
                    this.$notify(err.data, 'danger');
                });
            }
        }
    }
    window.Extensions.components['cloudinary-settings'] = module.exports;
</script>