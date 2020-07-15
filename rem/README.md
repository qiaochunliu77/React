em 相对于自己的font-size （相对于父元素的font-size）
rem html的font-size
1. font-sizeduos
2. 如何由设计稿快速还原
DPR device piex ratio设备真实的像素 / 1px =2
css 1px 在不同的设备上面渲染出来的像素不一样 2px（ip6） 3px（ipx）

想要1px边框 
1. meta init-scale 所有元素缩小两倍（0.5倍）
    我写元素宽高 就按扩大两倍之后的写
    一个元素本来20*20 
    必须写成40*40
    所以设计稿就需要扩大两倍，这样量取的时候 尺寸就是扩大两倍之后的尺寸
2. 缩放 等比缩放 
    屏幕划分成10等分
    ip6: 750 / 10 = 75px = 1rem  initscale  0.5
    ipX: 1125 / 10 = 112.5px = 1rem  initscale 0.333
    一份就是1rem
    html font-size设置为一份 75/112.5