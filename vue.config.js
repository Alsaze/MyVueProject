const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @use "@/assets/variables/colors.scss" as *;
        @use "@/assets/mixins/typography.scss" as *;
        `
      }
    }
  }
})