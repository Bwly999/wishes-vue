<script setup lang="ts">
import { onMounted } from '@vue/runtime-core'
import { reactive, toRef, toRefs } from '@vue/reactivity'
import { listTask } from '~/api/task'
// function showTextRight(tmpId, tmpString, tmpLocal, tmpMoney, tmpClass) {
//   const c = document.getElementById(tmpId)
//   const money = tmpMoney
//   const userLocation = tmpLocal
//   const wishClass = tmpClass
//   const ctx = c.getContext('2d')
//   ctx.fillStyle = '#ffffff' // 框整体颜色
//   ctx.strokeStyle = '#66ffff'

//   ctx.beginPath()
//   ctx.moveTo(0, 20)
//   ctx.lineTo(0, 5)
//   ctx.arc(5, 5, 5, 1 * Math.PI, 1.5 * Math.PI)
//   ctx.lineTo(195, 0)
//   ctx.arc(195, 5, 5, 1.5 * Math.PI, 2 * Math.PI)
//   ctx.lineTo(200, 20)
//   ctx.lineTo(0, 20)
//   ctx.closePath()
//   if (wishClass == '解答')
//     ctx.fillStyle = '#ccf5ff'

//   else if (wishClass == '跑腿')
//     ctx.fillStyle = '#66ff99'

//   else if (wishClass == '交易')
//     ctx.fillStyle = '#ffcc33'

//   ctx.fill()
//   ctx.beginPath()
//   ctx.moveTo(0, 20)
//   ctx.lineTo(200, 20)
//   ctx.lineTo(200, 80)
//   ctx.arc(195, 80, 5, 0 * Math.PI, 0.5 * Math.PI)
//   ctx.lineTo(175, 85)
//   ctx.lineTo(160, 100)
//   ctx.lineTo(100, 85)
//   ctx.lineTo(5, 85)
//   ctx.arc(5, 80, 5, 0.5 * Math.PI, 1 * Math.PI)
//   ctx.closePath()
//   ctx.fillStyle = '#ffffff'
//   ctx.fill()

//   ctx.moveTo(0, 20)
//   ctx.lineTo(200, 20)
//   ctx.strokeStyle = '#000000'
//   ctx.stroke()

//   ctx.font = '10px WenQuanYi Micro Hei'
//   ctx.fillStyle = '#000000'
//   ctx.fillText(`Money: ${String(money)}`, 5, 16)
//   ctx.fillText(`Location: ${String(userLocation)}`, 70, 16)
//   ctx.fillText(`Class: ${String(wishClass)}`, 150, 16)
//   ctx.font = '15px WenQuanYi Micro Hei'
//   ctx.fillStyle = '#000000' // 下面字体
//   const testText = tmpString
//   var i = 0
//   const len = testText.length
//   const shortLength = 13
//   let pstart = 40
//   for (var i = 0; i < len; i = i + shortLength) {
//     const startl = i
//     let endl = i + shortLength
//     if (endl >= len)
//       endl = len

//     const tmpStr = testText.substring(startl, endl)
//     ctx.fillText(tmpStr, 2.5, pstart)
//     pstart = pstart + 16
//   }
// }
// function showTextLeft(tmpId, tmpString, tmpLocal, tmpMoney, tmpClass) {
//   const c = document.getElementById(tmpId)
//   const money = tmpMoney
//   const userLocation = tmpLocal
//   const wishClass = tmpClass
//   const ctx = c.getContext('2d')
//   ctx.fillStyle = '#ffffff' // 框整体颜色
//   ctx.strokeStyle = '#66ffff'

//   ctx.beginPath()
//   ctx.moveTo(0, 20)
//   ctx.lineTo(0, 5)
//   ctx.arc(5, 5, 5, 1 * Math.PI, 1.5 * Math.PI)
//   ctx.lineTo(195, 0)
//   ctx.arc(195, 5, 5, 1.5 * Math.PI, 2 * Math.PI)
//   ctx.lineTo(200, 20)
//   ctx.lineTo(0, 20)
//   ctx.closePath()
//   if (wishClass == '解答')
//     ctx.fillStyle = '#ccf5ff'

//   else if (wishClass == '跑腿')
//     ctx.fillStyle = '#66ff99'

//   else if (wishClass == '交易')
//     ctx.fillStyle = '#ffcc33'

//   ctx.fill()
//   ctx.beginPath()
//   ctx.moveTo(0, 20)
//   ctx.lineTo(200, 20)
//   ctx.lineTo(200, 80)
//   ctx.arc(195, 80, 5, 0 * Math.PI, 0.5 * Math.PI)
//   ctx.lineTo(100, 85)
//   ctx.lineTo(50, 100)
//   ctx.lineTo(25, 85)
//   ctx.lineTo(5, 85)
//   ctx.arc(5, 80, 5, 0.5 * Math.PI, 1 * Math.PI)
//   ctx.closePath()
//   ctx.fillStyle = '#ffffff'
//   ctx.fill()

//   ctx.moveTo(0, 20)
//   ctx.lineTo(200, 20)
//   ctx.strokeStyle = '#000000'
//   ctx.stroke()

//   ctx.font = '10px WenQuanYi Micro Hei'
//   ctx.fillStyle = '#000000'
//   ctx.fillText(`Money: ${String(money)}`, 5, 16)
//   ctx.fillText(`Location: ${String(userLocation)}`, 70, 16)
//   ctx.fillText(`Class: ${String(wishClass)}`, 150, 16)
//   ctx.font = '15px WenQuanYi Micro Hei'
//   ctx.fillStyle = '#000000' // 下面字体
//   const testText = tmpString
//   //	ctx.fillText(testText, 0, 50);
//   var i = 0
//   const len = testText.length
//   const shortLength = 13
//   let pstart = 40
//   for (var i = 0; i < len; i = i + shortLength) {
//     const startl = i
//     let endl = i + shortLength
//     if (endl >= len)
//       endl = len

//     const tmpStr = testText.substring(startl, endl)
//     ctx.fillText(tmpStr, 2.5, pstart)
//     pstart = pstart + 16
//   }
// }
// function init() {
//   const c = document.getElementById('userCanvas')
//   const ctx = c.getContext('2d')
//   ctx.fillStyle = '#ffffff'
//   ctx.beginPath()
//   ctx.arc(30, 30, 30, 0 * Math.PI, 2 * Math.PI)
//   ctx.closePath()
//   ctx.fill()
//   ctx.font = '20px WenQuanYi Micro Hei'
//   ctx.fillStyle = '#000000'
//   ctx.fillText('帐号', 10, 40)
// }
// export default {
//   setup() {
const taskData = reactive({
  list: [],
  total: 0,
  listQuery: {
    page: 1,
    limit: 20,
    bookinfoId: undefined,
    bookname: undefined,
    authorname: undefined,
    press: undefined,
    isbn: undefined,
    sort: 'add_time',
    order: 'desc',
  },
  getTask: () => {
    listTask(taskData.listQuery).then((res) => {
      taskData.list = res.data.data.list
      taskData.total = res.data.data.total
      let task
      for (let i = 0; i < taskData.list.length; i++)
        task = taskData.list[i]
      console.log(task)
      // showTextLeft(`myCanvas${i}`, task.description, task.location, task.price, task.type)
    })
  },
})
onMounted(() => {
  // init()
  taskData.getTask()
})

const router = useRouter()

const toAccount = () => {
  router.push({
    path: '/user',
  })
}
// },
// }
</script>
<template>
  <div id="wish">
    <!-- <WishTask :task-list="taskData.list/"> -->
    <WishTask :task-list="taskData.list" />
    <!-- <a>adad</a>
    <div id="stars" />
    <div id="stars2" />
    <div id="stars3" />
    <div id="mydiv" name="mydiv" style="position: absolute; left: 234px; top: 43px; width: 200px; height: 100px">
      <canvas id="myCanvas0" width="200" height="100" style="border:0px solid #c3c3c3;" />
    </div>

    <div id="userdiv" class="dialog" name="user" style="position:absolute;right:10px; top: 20px; width: 60px; height: 60px" @click="toAccount">
      <canvas id="userCanvas" width="60" height="60" style="border:0px solid #c3c3c3;" />
    </div>

    <div id="mydiv1" name="mydiv1" style="position: absolute; left: 458px; top: 424px; width: 200px; height: 100px">
      <canvas id="myCanvas1" width="200" height="100" style="border:0px solid #c3c3c3;" />
    </div>

    <div id="mydiv2" name="mydiv2" style="position: absolute; left: 828px; top: 415px; width: 200px; height: 100px">
      <canvas id="myCanvas2" width="200" height="100" style="border:0px solid #c3c3c3;" />
    </div>
    <span style="position: absolute; left: 75px; top: 327px; width: 200px; height: 100px">
      <canvas id="myCanvas3" width="200" height="100" style="border:0px solid #c3c3c3;" />
    </span>

    <span style="position: absolute; left: 175px; top: 527px; width: 200px; height: 100px">
      <canvas id="myCanvas8" width="200" height="100" style="border:0px solid #c3c3c3;" />
    </span>

    <span style="position: absolute; left: 593px; top: 190px; width: 200px; height: 100px">
      <canvas id="myCanvas4" width="200" height="100" style="border:0px solid #c3c3c3;" />
    </span>
    <div id="mydiv3" name="mydiv1" style="position: absolute; left: 902px; top: 120px; width: 200px; height: 100px">
      <canvas id="myCanvas5" width="200" height="100" style="border:0px solid #c3c3c3;" />
    </div>
    <div id="mydiv6" name="mydiv6" style="position: absolute; left: 1200px; top: 320px; width: 200px; height: 100px">
      <canvas id="myCanvas6" width="200" height="100" style="border:0px solid #c3c3c3;" />
    </div>
    <div id="mydiv7" name="mydiv7" style="position: absolute; left: 1080px; top: 620px; width: 200px; height: 100px">
      <canvas id="myCanvas7" width="200" height="100" style="border:0px solid #c3c3c3;" />
    </div> -->
  </div>
</template>
