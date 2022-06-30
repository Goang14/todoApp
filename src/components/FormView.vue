<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing >Add</b-button>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="Tên">
          <b-form-input v-model="students.name"></b-form-input>
        </b-form-group>
        
         <b-form-group label="Tuổi">
          <b-form-input  v-model="students.age"></b-form-input>
        </b-form-group>
        
         <b-form-group label="Địa Chỉ">
          <b-form-input  v-model="students.address"></b-form-input>
        </b-form-group>
        
      </form>
    </b-modal>
  </div>
</template>

<script>
  export default {
    props:{
      itemEdit: {
        type: Object,
        default: null,
        }
      },

      watch:{
        itemEdit() {
          if(this.itemEdit){
            this.students = Object.assign({}, this.itemEdit)
          }else{
            this.students = {}
          }
        }
      },

    data() {
      return {
         students: {
            id: Math.floor(Math.random()*10000),
            name:"",
            age: "",
            address: "",
            },
         }
    },
    methods: {
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.age = ''
        this.address = ''
      },
      handleOk(bvModalEvent) {
        this.$emit("save", this.students)
        bvModalEvent.preventDefault()
        // Trigger submit handler
        this.handleSubmit();
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
          this.students= {
            id: Math.floor(Math.random()*10000),
            name:"",
            age: "",
            address: "",
            }
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      },
    }
  }
</script>