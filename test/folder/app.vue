<style lang="less">
.title {
    font-size: 18px;
    margin: 0;
    margin-top: 5px;
}

.tpl-list-ctn {
    padding-top: 10px;
    .tpl-header {
        border-bottom: 1px solid #eee;
        padding: 10px 0;
    }
    .filter-nav {
        margin-left: 10px;
    }
    .btns {
        .fa-mobile {
            font-size: 18px;
        }
    }
    .tpl-list {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .pages {
        text-align: center;
    }
    .title-search-ctn {
        margin-left: 10px;
    }
}
</style>
<template>
    <common-header></common-header>
    <div class="container-fluid tpl-list-ctn">
        <div class="tpl-header clearfix">
            <div class="pull-right title-search-ctn"></div>
            <ul class="filter-nav nav nav-pills nav-sm pull-right"></ul>
        </div>
        <ul class="tpl-list">
            <tpl v-for="tpl in tpls" :tpl="tpl"></tpl>
        </ul>
        <div class="pages">
            <paging :page="pageTpls.pageNo" :count="pageTpls.totalCount" :page-size="pageTpls.pageSize"></paging>
        </div>
    </div>
</template>
<script>
import Tpl from './tpl';
import {
    status,
    statusDesc
} from '../store/constants';

import {
    getUser,
    getTpls
} from '../store/actions'

export default {
    vuex: {
        getters: {
            tpls: state => state.tpls
        },
        actions: {
            getUser,
            getTpls
        }
    },

    data() {
        return {
            filterTypes: [
                'all',
            ]
        }
    },

    components: {
        CommonHeader,
        Tpl,
        Paging
    },

    ready: function() {
        this.getUser((user) => {
            this.getTpls(this.filterType);
        });
    },

    events: {
        pageChange: function(page) {
            this._getTpls(page);
        }
    },

    methods: {
        _getTpls(page) {

        },

        filterByType(filter) {
            this.filterType = filter;
            // 重新获取数据
            this._getTpls(1);
        },
        search(e) {
            this.keyWords = e.target.value;
            this._getTpls(1);
        }
    }
}
</script>