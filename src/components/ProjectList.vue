<template>
    <div class="list_item">
      <div class="list_body">
        <figure v-if="project.project_thumnail">
          <img :src="require(`../assets/${project.project_thumnail}`)" :alt="project.project_name">
        </figure>
          <div class="list_txt">
            <div class="btn_section">
             <h2>{{ project.project_name }}</h2>
            <div class="btn_wrap">
               <a href="#"><img src="../assets/git_icon.svg" alt="깃허브 바로가기"></a> 
               <a href="#"><img src="../assets/site_icon.svg" alt="사이트 바로가기"></a> 
            </div>   
            </div>
            <p>{{ project.project_description.overview }}</p>
            <ul>
                <li>
                    <em>개발 환경</em>
                    <span>HTTP / SCSS / JAVASCRIPT / jquery</span>
                </li>
                <li>
                    <em>개발 기간</em>
                    <span>2024.07.08(월) - 2024.08 (약3주)</span>
                </li>
            </ul>
        </div>
      </div>
      <div class="taptit">
      <i>반응형 웹</i>
      </div>   
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  props: {
    project: {
      type: Object as () => {  // 프로퍼티 타입 정의 (객체)
        project_thumnail: string;
        project_name: string;
        project_description: { overview: string };
      },
      required: true,  // 필수 prop으로 설정
    },
  }
  // `msg`와 `project` prop을 받아서 사용
  // msg!: string;
  // project!: {
  //   project_thumnail: string;
  //   project_name: string;
  //   project_description: { overview: string };
  // };
})
</script>
<style lang="scss">
    .list_item{
        margin-top: 70px;
        margin-left: 20px;
        position: relative;
        .list_body{
            padding: 25px ;
            border-radius: 10px;
            background-color: white;
            width: 100%;
            color: var(--serve-color);
            .list_txt{
              text-align: left;
              margin-left: 4px;
              .btn_section{
                margin: 15px 0 20px;
                display: flex;
                justify-content: space-between;
                h2{
                    font-size: 1.5rem;
                  }
                .btn_wrap{
                    a{
                        display: inline-block;
                        &:last-child{
                            margin-left: 15px;
                        }
                        img{
                            scale: 90%;
                        }  
                      } 
                    }
                 }
                 p{font-size: 1.1rem; margin-bottom: 20px;}
                 ul{
                    li{
                        em,span{
                            display: inline-block;
                        }
                        em{ margin: 0 10px 10px 0;
                            border:1px solid var(--serve-color);
                            padding: 0 10px;
                            border-radius: 99px;
                            font-style: normal;
                        }
                    }
                 }

           }
        }
        .taptit{
            position: absolute;
            z-index: -1;
            top:-50px;
            left:0;
            width: 40%;
            padding: 17px 0;
            border-radius: 10px;
            background-color: #5B5B5B;
            i{
                font-style: normal;
            }
        }
    }
</style>