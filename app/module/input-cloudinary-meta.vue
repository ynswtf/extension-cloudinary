<template>

    <a class="uk-placeholder uk-text-center uk-display-block uk-margin-remove" v-if="!image.src" @click.prevent="pick">
        <img width="60" height="60" :alt="'Placeholder Image' | trans" :src="$url('app/system/assets/images/placeholder-image.svg')">

        <p class="uk-text-muted uk-margin-small-top">{{ 'Add Image' | trans }}</p>
    </a>

    <div class="uk-overlay uk-overlay-hover uk-visible-hover" v-else>

        <img :src="$url(image.src)">

        <div class="uk-overlay-panel uk-overlay-background uk-overlay-fade"></div>

        <a class="uk-position-cover" @click.prevent="pick"></a>

        <div class="uk-panel-badge pk-panel-badge uk-hidden">
            <ul class="uk-subnav pk-subnav-icon">
                <li>
                    <a class="pk-icon-delete pk-icon-hover" :title="'Delete' | trans" data-uk-tooltip="{delay: 500}" @click.prevent="remove"></a>
                </li>
            </ul>
        </div>

    </div>

    <v-modal v-ref:modal>
        <form class="uk-form uk-form-stacked" @submit.prevent="update">

            <div class="uk-modal-header">
                <h2>{{ 'Add cloudinary' | trans }}</h2>
            </div>

            <div class="cms-container">

            </div>

            <div class="uk-form-row" v-show="img.id">
                <img :src="showImage(img.id)" width="100%" class="pk-height-max-height">
            </div>

            <div class="uk-form-row">
                <label for="form-src" class="uk-form-label">{{ 'Image Id' | trans }}</label>
                <div class="uk-form-controls">
                    <input id="form-src" class="uk-width-1-1" type="text" v-model="img.id" lazy>
                </div>
            </div>

            <div class="uk-form-row">
                <label for="form-alt" class="uk-form-label">{{ 'Alt' | trans }}</label>
                <div class="uk-form-controls">
                    <input id="form-alt" class="uk-width-1-1" type="text" v-model="img.alt">
                </div>
            </div>

            <div class="uk-grid uk-grid-small uk-grid-width-1-4 uk-form-row">
                <div>
                    <div class="uk-form-row">
                        <label for="form-alt" class="uk-form-label">{{ 'Format' | trans }}</label>
                        <div class="uk-form-controls">
                            <select class="uk-width-1-1" v-model="img.cl.format">
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
                            <input class="uk-width-1-1" type="text" min="0" max="99" v-model="img.cl.quality">
                        </div>
                    </div>
                </div>
                <div>
                    <div class="uk-form-row">
                        <label for="form-alt" class="uk-form-label">{{ 'Width' | trans }}</label>
                        <div class="uk-width-1-1 uk-form-controls">
                            <input class="uk-width-1-1" type="text" v-model="img.cl.width">
                        </div>
                    </div>
                </div>
                <div>
                    <div class="uk-form-row">
                        <label for="form-alt" class="uk-form-label">{{ 'Height' | trans }}</label>
                        <div class="uk-width-1-1 uk-form-controls">
                            <input class="uk-width-1-1" type="text" v-model="img.cl.height">
                        </div>
                    </div>
                </div>
            </div>

            <div class="uk-form-row" v-show="img.data.id">
                <pre><code>{{showImage(img.id , img.cl)}}</code></pre>
            </div>

            <div class="uk-modal-footer uk-text-right">
                <button class="uk-button uk-button-link uk-modal-close" type="button">{{ 'Cancel' | trans }}</button>
                <button class="uk-button uk-button-link" type="submit">{{ 'Update' | trans }}</button>
            </div>

        </form>
    </v-modal>

</template>

<script>

    module.exports = {

        props: {
            class: {
                type: String,
                default: ''
            },
            image: Object
        },

        mixins: [
            require('../lib/cloudinary-core')
        ],

        data: function () {
            return _.merge({img: {}}, $pagekit);
        },

        ready: function () {

            this.$set('image', this.image || {
                src: '', 
                alt: '',
                id: '',
                cl: {
                    format: 'webp', 
                    quality: 20, 
                    width:null, 
                    height:null, 
                    crop: 'fit'
                }
            });

            this.$set('img', _.extend({}, this.image));

            this.$on('image-selected', function (path) {

                if (path && !this.img.alt) {

                    var alt = path.split('/').slice(-1)[0].replace(/\.(jpeg|jpg|png|svg|gif)$/i, '').replace(/(_|-)/g, ' ').trim(),
                        first = alt.charAt(0).toUpperCase();

                    this.img.alt = first + alt.substr(1);
                }
            });

        },

        methods: {

            pick: function () {
                this.img = this.image;
                this.$refs.modal.open();
            },

            update: function () {
                this.img.src = this.showImage(this.img.id , this.img.cl);
                this.image = this.img;
                this.$refs.modal.close();
            },

            remove: function () {
                this.img.src = '';
                this.image.src = '';

                this.img.id = '';
                this.image.id = '';
            }
        }

    };

    Vue.component('input-image-meta', function (resolve, reject) {
        Vue.asset({
            js: [
                'app/assets/uikit/js/components/upload.min.js',
                'app/system/modules/finder/app/bundle/panel-finder.js'
            ]
        }).then(function () {
            resolve(module.exports);
        })
    });

</script>
