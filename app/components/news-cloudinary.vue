<template lang="html">
    <div>
        <div>
            <input-cloudinary-meta :image.sync="post.data.style.image" width="100%" class="pk-max-height"></input-cloudinary-meta>
        </div>
        <div v-if="post.style == 1">
            <div class="uk-form-row">
                <label class="uk-form-label">{{'Youtube ID' | trans}}</label>
                <div class="uk-form-controls">
                    <input type="text" class="uk-width-1-1" v-model="post.data.style.video">
                </div>
            </div>

            <div class="uk-form-row" v-if="post.data.style.video">
                <iframe width="100%" height="auto" :src="`https://www.youtube-nocookie.com/embed/${post.data.style.video}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        props:['post' , 'data'],
        
        sidebar:{
            label:"Image",
            priority:15,
            options:{
                panel:'',
                title:false,
            }
        },

        components:{
            inputCloudinaryMeta: require('../module/input-cloudinary-meta.vue')
        }
    }

    window.Posts.components['sidebarImages'] = module.exports;
</script>