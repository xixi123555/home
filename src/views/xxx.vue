<template>
  <div class="about">
    <div id="stock" style="width:1000px;height:400px"></div>
    <FloatLabel>
      <input placeholder="xixiixi"/>
    </FloatLabel>
  </div>
</template>
<script>
import * as echarts from "echarts";
import FloatLabel from '../components/FloatLabel/FloatLabel'
export default {
  name: "xxx",
  data() {
    return {
      date: [],
      num: []
    };
  },
  components: {
    FloatLabel
  },
  mounted() {
    this.http
      .get(
        "CN_MarketData.getKLineData?symbol=sz002049&scale=5&ma=5&datalen=1023"
      )
      .then(res => {
        res.data.forEach(element => {
            this.date.push(element.day);
            this.num.push(parseInt(element.open));
        });
        this.draw();
      });
    

    
  },
  methods: {
    draw() {
      let myChart = echarts.init(document.getElementById("stock"));
      myChart.setOption({
        title: { text: "stock" },
        tooltip: {},
        xAxis: {
          type: "category",
          data: this.date
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: this.num,
            type: "line",
            smooth: true
          }
        ]
        // xAxis: {
        //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        // },
        // yAxis: {},
        // series: [{
        //     name: '销量',
        //     type: 'bar',
        //     data: [820, 932, 901, 934, 1290, 1330, 1320]
        // }]
      });
    }
  }
};
</script>