<template lang="html">
    <div>
        <div class="uk-grid uk-grid-small uk-grid-width-1-4 uk-form-row">
            <div>
                <div class="uk-form-row">
                    <label for="form-alt" class="uk-form-label">{{ 'Format' | trans }}</label>
                    <div class="uk-form-controls">
                        <select class="uk-width-1-1" v-model="widget.data.cloudinary.format">
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
                        <input class="uk-width-1-1" type="text" min="0" max="99" v-model="widget.data.cloudinary.quality">
                    </div>
                </div>
            </div>
            <div>
                <div class="uk-form-row">
                    <label for="form-alt" class="uk-form-label">{{ 'Width' | trans }}</label>
                    <div class="uk-width-1-1 uk-form-controls">
                        <input class="uk-width-1-1" type="text" v-model="widget.data.cloudinary.width">
                    </div>
                </div>
            </div>
            <div>
                <div class="uk-form-row">
                    <label for="form-alt" class="uk-form-label">{{ 'Height' | trans }}</label>
                    <div class="uk-width-1-1 uk-form-controls">
                        <input class="uk-width-1-1" type="text" v-model="widget.data.cloudinary.height">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        props:['config' , 'widget' , 'form'],

        section:{
            label:'Cloudinary',
            priority:30
        },

        created(){
            if( !this.widget.data['cloudinary'] ){
                this.$set('widget.data' , _.merge({
                    cloudinary:{
                        height:null,
                        width:null,
                        quality:30,
                        format:'jpg'
                    }
                } , this.widget.data))
            }
        }
    }
    window.Widgets.components['news-widgets-kit:cloudinary'] = module.exports
</script>