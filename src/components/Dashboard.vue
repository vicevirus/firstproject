<template>
  <div class="attend">
      <b-jumbotron>
  <template slot="header">
    Sudahkah anda menanda kedatangan anda?
  </template>
</b-jumbotron>
      <el-card class="box-card"><p><b>Nama pekerja</b></p>
      <b-form-input v-model="name"
                  type="text"
                  placeholder="Nama disini">
        </b-form-input>

      <p><b>ID Pekerja</b></p>
        <b-form-input v-model="code"
                  type="text"
                  placeholder="ID disini">
        </b-form-input>

      <p><b>Sektor Pekerja</b></p>
      <b-form-input v-model="sector"
                  type="text"
                  placeholder="Sektor disini">
      </b-form-input>
      </el-card>
      
      <el-button @click="open();AddAttendance();"><b>Submit</b></el-button>
      <h1>Yang telah checkin</h1>
      <div align="center">
          <table border="1">
          <tr>
      <th v-for="attend in table" :key="attend.id">
          <tr><h2>Name</h2></tr>
          <td>{{attend.name}}</td>
          <tr><h2>User ID</h2></tr>
          <td>{{attend.code}}</td>
          <tr><h2>Sector</h2></tr>
          <td> {{attend.sector}}</td> 
          </th>
      </tr>
      </table>
      </div>
      </div>
</template>

<script>
import { AddAttendance, GetAttendance } from "../services/attend"

export default {
  name: 'attend',
  data () {
        return {
            name: "",
            code: "",
            sector: "",
            table: []
        }
    },
    created() {
        this.GetAttendance();
    },
    methods: {
       open() {
        this.$message('Anda telah berjaya memasukkan kedatangan untuk hari ini');
      },
        AddAttendance() {
            return AddAttendance({
                name: this.name,
                code: this.code,
                sector: this.sector
            }).then((res) => {
                return this.GetAttendance();
            }).catch((err) => {
                alert('failed');
            })
        },
        GetAttendance() {
            GetAttendance().then((res) => {
                this.table = res;
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

td, th {
    border: 1px solid black;
    text-align: center;
    height: 50px;
    padding: 15px;
}

td {
    background-color: coral;
}

</style>
