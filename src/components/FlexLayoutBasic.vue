<template>
  <div class="flex-container">
    <header class="flex-item" id="header">
      header
    </header>
    <section id="contents">
      Fusce suscipit diam egestas dui pharetra accumsan. Praesent et sodales nisi, eget gravida magna. Sed ac pulvinar erat. Maecenas quis orci non libero interdum interdum. Donec blandit dictum fermentum. Maecenas malesuada elit tincidunt dui sagittis condimentum. Vestibulum molestie, ante in aliquet tristique, lorem nunc blandit tortor, id scelerisque eros mauris nec turpis. Quisque metus lectus, mattis vel luctus vel, elementum et metus. Sed vitae luctus ligula, at elementum ex. Maecenas ac orci ipsum. Pellentesque non magna cursus lacus pretium sodales nec sed quam. Cras vel tortor non dui semper consectetur a non leo. Mauris id ipsum elementum augue pellentesque eleifend ut ut velit. In ac tincidunt arcu. Suspendisse consequat tempus orci, in varius ex dapibus dignissim.

      Aliquam erat volutpat. Donec commodo sem orci, et aliquam urna viverra mollis. Nullam maximus nec magna ac cursus. Nam interdum vulputate diam, eu sollicitudin lacus elementum vel. Ut imperdiet aliquam augue, non ultricies tellus euismod ut. Integer venenatis, nibh a gravida convallis, risus eros feugiat nulla, sed aliquam nulla urna ac enim. Phasellus eu consectetur urna, nec bibendum magna. Fusce vel sem eget est commodo rhoncus in id nulla. Vivamus iaculis nibh eget blandit vulputate. Suspendisse mollis ipsum sapien, et vulputate augue imperdiet et. Sed tristique pharetra sagittis. Donec elementum ante et arcu placerat volutpat. Quisque pulvinar elit pharetra augue luctus, tristique pharetra nisl fringilla. Nunc ornare massa id diam tincidunt consectetur. Etiam sollicitudin imperdiet quam, vitae varius dolor. Ut nisl ante, ornare vel commodo at, aliquet ut dui.

      Donec bibendum metus ante. Maecenas aliquam metus nec sollicitudin pretium. Etiam vehicula mi vitae tellus dictum eleifend. Curabitur iaculis eu ipsum eu tincidunt. Aliquam eget sem vitae libero fermentum posuere eu nec arcu. Donec aliquet vitae massa id rhoncus. Quisque rhoncus metus ante, ac molestie dolor vehicula ac. Integer consequat feugiat accumsan. Proin convallis sem eget justo efficitur, in fringilla sapien tincidunt. Integer sed est felis. In hac habitasse platea dictumst. Etiam at mattis magna, sed posuere turpis. Vivamus bibendum sapien accumsan metus fringilla, sit amet posuere magna suscipit. Nulla dictum elementum convallis. Aenean vehicula elementum magna a fringilla.
    </section>
    <footer class="flex-item" id="footer">
      footer
    </footer>
  </div>
</template>
<script>
export default {
  name: 'FlexLayoutBasic',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.flex-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  #header {
    flex-shrink: 0;
  }
  #footer {
    flex-shrink: 0;
    /* 모바일 notch 대응 */
    padding-bottom: calc(constant(safe-area-inset-bottom) + 10px);
    padding-bottom: calc(env(safe-area-inset-bottom) + 10px);
  }
  #contents {
    flex: 1 0 auto;
  }
}
/* IE 10, IE 11 대응 (해당 브라우저에서는 flex 항목에 min-height 값이 적용되지 않음) */
@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
  .flex-container {
    min-height: auto;
    height: 100vh;
  }
}
</style>
