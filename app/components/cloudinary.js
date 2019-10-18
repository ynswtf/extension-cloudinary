/**
 * Editor CloudInary plugin.
 */
module.exports = {

    plugin: true,

    data: function () {
        return {
            
        };
    },

    created: function () {
        var vm = this, editor = this.$parent.editor;

        if (!editor || !editor.htmleditor) {
            return;
        }

        this.cloudinarys = [];

        editor.addButton('cloudinary', {
            title: this.$trans('Cloudinary'),
            label: '<i class="uk-icon-cloud"></i>'
        });

        editor.options.toolbar.push('cloudinary');

        editor
            .on('action.cloudinary', function (e, editor) {
                vm.openModal(_.find(vm.cloudinarys, function (cloudinary) {
                    return cloudinary.inRange(editor.getCursor());
                }));
            })
            .on('render', function () {
                var regexp = editor.getMode() != 'gfm' ? /<img(.+?)>/gi : /(?:<img(.+?)>|!(?:\[([^\n\]]*)])(?:\(([^\n\]]*?)\))?)/gi;
                vm.cloudinary = editor.replaceInPreview(regexp, vm.replaceInPreview);
            })
            .on('renderLate', function () {
                while (vm.$children.length) {
                    vm.$children[0].$destroy();
                }

                Vue.nextTick(function () {
                    editor.preview.find('cloudinary-preview').each(function () {
                        vm.$compile(this);
                    });
                });
            });

        editor.debouncedRedraw();
    },

    methods: {

        openModal: function (cloudinary) {

            var parser = new DOMParser(), editor = this.$parent.editor, cursor = editor.editor.getCursor();

            if (!cloudinary) {
                cloudinary = {
                    replace: function (value) {
                        editor.editor.replaceRange(value, cursor);
                    }
                };
            }

            new this.$parent.$options.utils['cloudinary-picker']({
                parent: this,
                data: {
                    cloudinary: cloudinary
                }
            }).$mount()
                .$appendTo('body')
                .$on('select', function (cloudinary) {

                    var content;

                    if ((cloudinary.tag || editor.getCursorMode()) == 'html') {

                        if (!cloudinary.anchor) {
                            cloudinary.anchor = parser.parseFromString('<img>', "text/html").body.childNodes[0];;
                        }

                        cloudinary.anchor.setAttribute('src', cloudinary.data.src);
                        cloudinary.anchor.setAttribute('alt', cloudinary.data.alt);

                        content = cloudinary.anchor.outerHTML;

                    } else {
                        content = '![' + cloudinary.data.alt + '](' + cloudinary.data.src + ')';
                    }

                    cloudinary.replace(content);
                });
        },

        replaceInPreview: function (data, index) {
            var parser = new DOMParser();

            data.data = {};
            if (data.matches[0][0] == '<') {
                data.anchor = parser.parseFromString(data.matches[0], "text/html").body.childNodes[0];
                data.data.src = data.anchor.attributes.src ? data.anchor.attributes.src.nodeValue : '';
                data.data.alt = data.anchor.attributes.alt ? data.anchor.attributes.alt.nodeValue : '';
                data.tag = 'html';
            } else {
                data.data.src = data.matches[3];
                data.data.alt = data.matches[2];
                data.tag = 'gfm';
            }

            return '<cloudinary-preview index="' + index + '"></cloudinary-preview>';
        }

    },

    components: {
        'cloudinary-preview': require('./cloudinary-preview.vue')
    }

};

window.Editor.components['plugin-cloudinary'] = module.exports;
window.Editor.utils['cloudinary-picker'] = Vue.extend(require('./cloudinary-picker.vue'));
