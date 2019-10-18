module.exports = [{
    entry: {
        "cloudinary-settings": "./app/components/cloudinary-settings.vue",
        "cloudinary-editor": "./app/components/cloudinary",
        "news-cloudinary": "./app/components/news-cloudinary.vue"
    },
    output: {
        filename: "./app/bundle/[name].js"
    },
    module: {
        loaders: [{ test: /\.vue$/, loader: "vue" }]
    }
}];