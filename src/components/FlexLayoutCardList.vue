<template>
  <div class="flex-list">
    <EllipsisCard />
    <EllipsisCard />
    <EllipsisCard />
    <EllipsisCard />
    <EllipsisCard />
    <EllipsisCard />
    <EllipsisCard />
  </div>
</template>
<script>
import EllipsisCard from './items/EllipsisCard'
export default {
  name: 'FlexLayoutBasicCardList',
  data () {
    return {
    }
  },
  components: {
    EllipsisCard
  }
}
</script>
<style lang="scss" scoped>
.flex-list {
  display: flex;
  flex-wrap: wrap;
  margin: -0.5% auto;
  /deep/ .card-wrap {
    width: 49%;
    margin: 0.5%;
    flex: 0 0 49%;
  }
}
@media screen and (min-width: 568px) and (max-width: 768px) {
  .flex-list {
    /deep/ .card-wrap {
      width: 32%;
      flex: 0 0 32%;
    }
  }
}
@media screen and (min-width: 769px) {
  .flex-list {
    max-width: 960px;
    /deep/ .card-wrap {
      width: 24%;
      flex: 0 0 24%;
    }
  }
}
</style>
