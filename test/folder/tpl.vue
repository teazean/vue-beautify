<style lang="less">
.tpl-item {
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    margin-bottom: 5px;
}

.tpl-type {
    float: left;
    margin-right: 5px;
}

.token-ctn {
    margin-left: 10px;
    .token {
        background: #eee;
        display: inline-block;
        padding: 0 3px;
        border-radius: 3px;
    }
}

.tpl-status {
    float: left;
}

.tpl-ops {
    float: right;
    margin-top: -5px;
}

.label {
    text-shadow: none;
}

.publish-modal .alert {
    margin-bottom: 5px;
}
</style>
<template>
    <li class="tpl-item clearfix">
        <div class="tpl-status"> <span class="label bg-info label-status-{{tpl.status}}">{{tpl.status | statusDesc}}</span>

        </div>
        <div class="tpl-type"> <span>[{{tpl.materialType == 'MOBILE' ? '手机' : 'PC'}}]</span>

        </div>
        <div class="pull-left preview-link"> <a target="_blank" href="{{tpl.previewUrl}}">{{tpl.previewUrl}}</a>

            <Qrcode :qrcode-show="tpl.previewUrl && tpl.materialType == 'MOBILE'" :url="tpl.previewUrl"></Qrcode>
        </div>
        <div class="tpl-ops"></div>
    </li>
</template>
<script>
import modal from '../components/modal';
import Qrcode from '../components/qrcode';

export default {
    props: ['tpl'],

    components: {
        modal,
        Qrcode
    },

    vuex: {
        getters: {
            others: state => state.others // 可以的
        },
        actions: {
            editTplName,
            applyReview,
            cancelReview,
            copyTpl,
            deleteTpl,
            publishTpl
        }
    },
    data() {
        return {
            editing: false,
            isValid: false,
            status: status
        }
    },
    directives: {
        focus(value) {
            if (value) {
                this.vm.$nextTick(() => {
                    this.el.focus()
                })
            }
        }
    },
    ready() {},

    methods: {
        reviewCode() {
            location.href = '/editor.html?admin=1&id=' + this.tpl.mid;
        }
    }
}
</script>