<template>
  <div class="card-wrap">
    <a href="">
      <span class="thumb"
            style="background: url('http://thumbnail.10x10.co.kr/webimage/image/basic600/240/B002400326.jpg?cmd=thumb&w=500&h=500&fit=true&ws=false') center center no-repeat;background-size: cover;"></span>
      <div class="product-info">
        <span class="product-seller">Donec blandit dictum fermentum. Maecenas malesuada elit tincidunt dui sagittis condimentum. Vestibulum molestie, ante in aliquet tristique, lorem nunc blandit tortor</span>
        <strong class="product-name">Fusce suscipit diam egestas dui pharetra accumsan. Praesent et sodales nisi, eget gravida magna. Sed ac pulvinar erat. Maecenas quis orci non libero interdum interdum.</strong>
      </div>
      <div class="price-info">
        <strong class="sale-percent">90%</strong>
        <em class="current">100,000,000원</em>
        <del class="origin">1,000,000,000원</del>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: 'EllipsisCard'
}
</script>
<style lang="scss" scoped>
@mixin ellipsis() {
  overflow: hidden;
  display: block;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.card-wrap {
  a {
    display: block;
    .thumb {
      display: block;
      padding-bottom: 100%;
    }
    .product-info {
      margin-top: 5px;
      .product-seller {
        @include ellipsis();
        font-size: 12px;
        color: #808893;
        line-height: 16px;
      }
      .product-name {
        @include ellipsis();
        font-size: 13px;
        color: #202429;
        line-height: 18px;
      }
    }
    .price-info {
      overflow: hidden;
      @include ellipsis();
      margin-top: 5px;
      .sale-percent,
      .current {
        margin-right: 4px;
        font-style: normal;
        font-size: 15px;
        color: #202429;
        line-height: 19px;
      }
      .sale-percent {
        font-weight: 700;
      }
      .origin {
        font-size: 13px;
        color: #808893;
        line-height: 19px;
      }
    }
  }
}
</style>
