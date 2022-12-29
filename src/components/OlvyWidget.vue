<template>
    <div>    
          <slot></slot>
    </div>
  </template>
  <script lang="js">
  export default {
    data :()=>({
        
    }),
    props:{
        config:{
            type:Object,
            default:()=>({})
        }
    },
    mounted(){
        let olvyScript=document.createElement('script')
        olvyScript.setAttribute('src','https://app.olvy.co/scriptV2.js')
       document.head.appendChild(olvyScript)
       window.addEventListener('load',()=>{
       window.OlvyConfig=this.config
       })     
    }
  }
  </script>