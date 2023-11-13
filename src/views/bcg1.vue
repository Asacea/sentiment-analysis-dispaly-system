<template>
    <canvas ref="canvas" ></canvas>
</template>
<script>
export default{
    props: {
      colors: {
        type: Array,
        default: () => ['#0f6464', '#0f0f4a','#010214', '#0f0f4a','#0f6464']
        // default: () => ['#0b0b04','#66a12b','#bae33f','#66a12b','#0b0b04']
      },
      triangleSize: {
        type: Number,
        default: 20
      },
      particles:{
        count:{
          countMin:0,
          countMax:1
        },
        opacity:{
          opacityMax:1
        }
      }
    },
    mounted() {
      const canvas = this.$refs.canvas;
      const settings = {
        colors: this.colors,
        triangleSize: this.triangleSize,
      };
      ThpaceGL.create(canvas, settings);
    }
}
import { ThpaceGL } from 'thpace';

</script>
