<template>
 <div id="app">
   <div class="container">
     <div class="card">
       <p class=title>Todo List</p>
       <div class=todo>
         <div class="flex">
           <input type="text" class="input-add" v-model="text" />
           <button data class="button-add" @click="add">追加</button>
         </div>
         <div class="flex">
           <input type="text" class="input-update" />
           <div data>
             <button class="button-update">更新</button>
             <button class="button-delete">削除</button>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    };
  },
  methods: {
   add() {
     this.list.push({
      text: this.text
     });
   }
  }
};
</script>

<style scoped>
.container{
  background-color:#2d197c ;
  height: 100vh;
  width: 100vw;
  position: relative;
}

.card{
  background-color: #fff;
  width: 50vw;
  padding: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}
.title {
  font-weight: bold;
  font-size: 24px;
}
.input-add{
  width: 80%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  font-size: 14px;
  outline: none;
}
.input-update{
  width: 30%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  font-size: 14px;
  outline: none;
}
.button-add{
  text-align: left;
  border: 2px solid #dc70fa;
  font-size: 12px;
  color: #dc70fa;
  background-color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s;
  outline: none;
}
.button-add:hover {
  background-color: #dc70fa;
  border-color: #dc70fa;
  color: #fff;
}
.button-update{
  text-align: left;
  border: 2px solid #fa9770;
  font-size: 12px;
  color: #fa9770;
  background-color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s;
  outline: none;
}
.button-update:hover {
  background-color: #fa9770;
  border-color: #fa9770;
  color: #fff;
}
.button-delete{
  text-align: left;
  border: 2px solid #71fadc;
  font-size: 12px;
  color: #71fadc;
  background-color: #fff;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.4s;
  outline: none;
}
.button-delete:hover {
  background-color: #71fadc;
  border-color: #71fadc;
  color: #fff;
} 
.flex{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px; 
}
.button-update{
  margin-right: 5px;
}
</style>