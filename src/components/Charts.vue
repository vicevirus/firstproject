<template>
  <div>
      <b-jumbotron>
  <template slot="header">
    Carta Pengguna Bulan Ini
  </template>
</b-jumbotron>
   <pie-chart :data="[['Pengguna Tetap', 44], ['Pengguna Sambilan', 23], ['Pengguna Jarang', 12]]" width="1500px"></pie-chart>
   <center><b-alert show variant="danger" style="width:700px">Informasi diatas mungkin tidak tepat kerana bergantung sepenuhnya kepada tracker</b-alert></center>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
