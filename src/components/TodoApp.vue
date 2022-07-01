<template>  
    <div class="product">  
      <h1>TodoApp</h1>
      <FormView :edit="itemEdit" @closeForm="itemEdit = null" /> <br>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th> 
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Address</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="todo in allTodos" :key="todo.id">
            <th>{{ todo.id }}</th>
            <td>{{ todo.name }}</td>
            <td>{{ todo.age }}</td>
            <td>{{ todo.address }}</td>
             <td><button v-on:click="deleteTodo(todo.id)">Delete</button></td>
            <td><button @click = "()=>clickEdit(todo)" >Edit</button></td>
          </tr>   
        </tbody>
      </table>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FormView from "./FormView"

export default {
   components:{
    FormView,
   },
  name: "TodoApp",
  methods:{
    ...mapActions(["fetchTodos","deleteTodo","editTodo"]),

    clickEdit(item) {
      this.$bvModal.show("modal-prevent-closing");
      this.itemEdit = item;
    }
  },
  data(){
    return{
      itemEdit:null
    }
  },
  computed: {
    ...mapGetters(["allTodos"])
  },
  created() {
    this.fetchTodos();
  }
};
// import StudentCreate from "./StudentCreate"
  // import FormView from "./FormView"
  //     export default ({
  //       components:{
  //         FormView
  //       }, 
  //      methods:{
  //         clickSave(itemSave){
  //           let index = this.students.findIndex((c)=>c.id === itemSave.id)
  //           if(index >= 0){ 
  //             this.students.splice(index, 1, itemSave)
  //           }else{ 
  //             this.students.push(itemSave)
  //           }
  //           return
  //         },
          
  //         clickDelete(itemDelete){
  //             // for(let i=0; i<this.student.length; i++){
  //             //     if(itemDelete.id == this.student[i].id){
  //             //       this.student.splice(i,1)
  //             //     }
  //             // }
  //             this.students = this.students.filter(item => item.id !== itemDelete.id );
  //         },
  //         clickEdit(itemEdit){
  //            //console.log(itemEdit)
  //            this.sinhvien = itemEdit
  //         }
  //       },
  //       data() {
  //         return{
  //           sinhvien:{},
  //           students: [
  //             {
  //               id:1,
  //               name: "Le Van Hoang",
  //               age: 22,
  //               address: "Quynh Van"
  //             },
  //              {
  //               id:2,
  //               name: "Nguyen Ba Luong",
  //               age: 22,
  //               address: "Quynh Vinh"
  //             },
  //              {
  //               id:3,
  //               name: "Tran Van Hop",
  //               age: 22,
  //               address: "Nam Dan"
  //             },
  //              {
  //               id:4,
  //               name: "Bui Van Quang",
  //               age: 22,
  //               address: "Mai Hung"
  //             },
  //           ]
  //         }    
  //       },
  //     })
</script>