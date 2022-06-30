<template>  
    <div class="product">  
      <h1>Quản Lý Sinh Viên</h1>
      <FormView :itemEdit="sinhvien" @save = "clickSave" />

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th> 
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
            <th scope="col">Xóa</th>
            <th scope="col">Sửa</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in students" :key="item.id">
            <th>{{ item.id }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
            <td>{{ item.address }}</td>
             <td><button @click = "()=>clickDelete(item)" >Xóa</button></td>
            <td><button v-b-modal.modal-prevent-closing  @click = "()=>clickEdit(item)" >Sửa</button></td>
          </tr>   
        </tbody>
      </table>
    </div>
</template>

<script>
// import StudentCreate from "./StudentCreate"
  import FormView from "./FormView"
      export default ({
        components:{
          FormView
        }, 
       methods:{
          clickSave(itemSave){
            let index = this.students.findIndex((c)=>c.id === itemSave.id)
            if(index >= 0){ 
              this.students.splice(index, 1, itemSave)
            }else{ 
              this.students.push(itemSave)
            }
            return
          },
          
          clickDelete(itemDelete){
              // for(let i=0; i<this.student.length; i++){
              //     if(itemDelete.id == this.student[i].id){
              //       this.student.splice(i,1)
              //     }
              // }
              this.students = this.students.filter(item => item.id !== itemDelete.id );
          },
          clickEdit(itemEdit){
             //console.log(itemEdit)
             this.sinhvien = itemEdit
          }
        },
        data() {
          return{
            sinhvien:{},
            students: [
              {
                id:1,
                name: "Le Van Hoang",
                age: 22,
                address: "Quynh Van"
              },
               {
                id:2,
                name: "Nguyen Ba Luong",
                age: 22,
                address: "Quynh Vinh"
              },
               {
                id:3,
                name: "Tran Van Hop",
                age: 22,
                address: "Nam Dan"
              },
               {
                id:4,
                name: "Bui Van Quang",
                age: 22,
                address: "Mai Hung"
              },
            ]
          }    
        },
      })
</script>