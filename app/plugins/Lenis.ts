import Lenis from 'lenis'

//这玩意是几把为了添加Lenis的,因为没main.ts,所以只能搞到plugin里面去了
export default defineNuxtPlugin({
  async setup () {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
    })

    function raf(time :number) {
    lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }
})