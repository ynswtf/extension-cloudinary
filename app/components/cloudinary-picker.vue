<template>

    <div>
        <v-modal v-ref:modal :closed="close">
            <form class="uk-form uk-form-stacked" @submit.prevent="update">

                <div class="uk-modal-header">
                    <h2>{{ 'Add cloudinary' | trans }}</h2>
                </div>

                <div class="uk-form-row" v-show="cloudinary.data.id">
                    <img :src="showImage(cloudinary.data.id)" width="100%" class="pk-height-max-height">
                </div>

                <div class="uk-form-row">
                    <label for="form-src" class="uk-form-label">{{ 'Image Id' | trans }}</label>
                    <div class="uk-form-controls">
                        <input id="form-src" class="uk-width-1-1" type="text" v-model="cloudinary.data.id" lazy>
                    </div>
                </div>

                <div class="uk-form-row">
                    <label for="form-alt" class="uk-form-label">{{ 'Alt' | trans }}</label>
                    <div class="uk-form-controls">
                        <input id="form-alt" class="uk-width-1-1" type="text" v-model="cloudinary.data.alt">
                    </div>
                </div>

                <div class="uk-grid uk-grid-small uk-grid-width-1-4 uk-form-row">
                    <div>
                        <div class="uk-form-row">
                            <label for="form-alt" class="uk-form-label">{{ 'Format' | trans }}</label>
                            <div class="uk-form-controls">
                                <select class="uk-width-1-1" v-model="cloudinary.cl.format">
                                    <option value="webp">Webp</option>
                                    <option value="jpg">Jpg</option>
                                    <option value="png">Png</option>
                                    <option value="gif">Gif</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="uk-form-row">
                            <label for="form-alt" class="uk-form-label">{{ 'Quality' | trans }}</label>
                            <div class="uk-width-1-1 uk-form-controls">
                                <input class="uk-width-1-1" type="text" min="0" max="99" v-model="cloudinary.cl.quality">
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="uk-form-row">
                            <label for="form-alt" class="uk-form-label">{{ 'Width' | trans }}</label>
                            <div class="uk-width-1-1 uk-form-controls">
                                <input class="uk-width-1-1" type="text" v-model="cloudinary.cl.width">
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="uk-form-row">
                            <label for="form-alt" class="uk-form-label">{{ 'Height' | trans }}</label>
                            <div class="uk-width-1-1 uk-form-controls">
                                <input class="uk-width-1-1" type="text" v-model="cloudinary.cl.height">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="uk-form-row" v-show="cloudinary.data.id">
                    <pre><code>{{showImage(cloudinary.data.id , cloudinary.cl)}}</code></pre>
                </div>

                <div class="uk-modal-footer uk-text-right">
                    <button class="uk-button uk-button-link uk-modal-close" type="button">{{ 'Cancel' | trans }}</button>
                    <button class="uk-button uk-button-link" type="submit">{{ 'Update' | trans }}</button>
                </div>

            </form>
        </v-modal>
    </div>

</template>

<script>

    module.exports = {
        name: 'CloudInary',

        mixins: [
            require('../lib/cloudinary-core')
        ],

        data: function () {
            return {
                cloudinary: {data: {src:'', id: '', alt: ''} , cl:{format: 'webp', quality: 20, width:null, height:null, crop: 'fit'}}
            }
        },

        ready: function () {

            this.$refs.modal.open();

            this.$on('image-selected', function(path) {

                if (path && !this.cloudinary.data.alt) {

                    var alt   = path.split('/').slice(-1)[0].replace(/\.(jpeg|jpg|png|svg|gif)$/i, '').replace(/(_|-)/g, ' ').trim(),
                        first = alt.charAt(0).toUpperCase();

                    this.cloudinary.data.alt = first + alt.substr(1);
                }
            })
        },

        methods: {

            close: function() {
                this.$destroy(true);
            },

            update: function () {
                this.$refs.modal.close();
                this.cloudinary.data.src = this.showImage(this.cloudinary.data.id , this.cloudinary.cl);
                this.$emit('select', this.cloudinary);
            }

        },

        components:{
            inputCloudinary:require('../module/input-cloudinary.vue')
        }

    };

</script>
