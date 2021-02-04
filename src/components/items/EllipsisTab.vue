<template>
  <button role="tab" type="button" class="item-tab">
    <span>{{remakeTabName}}</span>
  </button>
</template>

<script>
export default {
  name: 'EllipsisTab',
  props: {
    tabName: String
  },
  computed: {
    remakeTabName: function () {
      return this.tabName ? this.tabName : '기본탭'
    }
  }
}
</script>
