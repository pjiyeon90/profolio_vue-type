<template>
  <div class="home">
  <div class="contents s_intro">
    <h2><span>RESUME -</span>TAKEOUT?</h2>
    <b>Who ordered a resume? 이력서 시키신 분?</b>
    <div class="introgif">
      <img src="../assets/mainwheel.gif" alt="움직이는 gif"> 
    </div>

    <!-- <div style="padding-bottom:100%;position:relative;">
      <iframe src="https://giphy.com/embed/KGhpQ5NMoWKQurlHwI" width="20%" height="20%" style="position:absolute" top="100px" left= "-70%" frameBorder="none" class="giphy-embed" allowFullScreen></iframe></div> -->
  </div>
  <div class="section s_cart">
    <p>어떤 인재를 주문하시겠습니까?<br> 메뉴에서 골라<br> 테이크 아웃하세요 !</p>
    <figure><img src="../assets/cart.png" alt="움직이는 gif"></figure>
  </div>
  <div class="section s_service">
    <div class="text-wrap">
      <h5>주문하고 싶은 서비스가 있나요?</h5>
      <h3>WHAT MY SERVICE</h3>
    </div>
    <ul>
      <li class="scrolling-text" >
        <div><span>#성실함</span><span class="icon icon_h"><img src="../assets/harmony.svg" alt="융화 움직이는 아이콘">#융화</span><span>#자기개발</span><span>#지구력</span><span class="icon icon_e"><img src="../assets/effort.svg" alt="노력 움직이는 아이콘">#노력파</span><span>#창의력</span></div>
        <div><span>#성실함</span><span class="icon icon_h"><img src="../assets/harmony.svg" alt="융화 움직이는 아이콘">#융화</span><span>#자기개발</span><span>#지구력</span><span class="icon icon_e"><img src="../assets/effort.svg" alt="노력 움직이는 아이콘">#노력파</span><span>#창의력</span></div>  
        <div><span>#성실함</span><span class="icon icon_h"><img src="../assets/harmony.svg" alt="융화 움직이는 아이콘">#융화</span><span>#자기개발</span><span>#지구력</span><span class="icon icon_e"><img src="../assets/effort.svg" alt="노력 움직이는 아이콘">#노력파</span><span>#창의력</span></div>  
      </li>
      <li class="scrolling-text">
        <div><span class="icon icon_j"><img src="../assets/database.svg" alt="자바 움직이는 아이콘">#JAVASCRIPT</span><span>#REACT, VUE</span><span>#전역상태관리</span><span class="icon icon_f"><img src="../assets/folder.svg" alt="자바 움직이는 아이콘">#폴더구조</span><span>#TYPESCRIPT</span><span>#NEXT</span></div>
        <div><span class="icon icon_j"><img src="../assets/database.svg" alt="자바 움직이는 아이콘">#JAVASCRIPT</span><span>#REACT, VUE</span><span>#전역상태관리</span><span class="icon icon_f"><img src="../assets/folder.svg" alt="자바 움직이는 아이콘">#폴더구조</span><span>#TYPESCRIPT</span><span>#NEXT</span></div>
        <div><span class="icon icon_j"><img src="../assets/database.svg" alt="자바 움직이는 아이콘">#JAVASCRIPT</span><span>#REACT, VUE</span><span>#전역상태관리</span><span class="icon icon_f"><img src="../assets/folder.svg" alt="자바 움직이는 아이콘">#폴더구조</span><span>#TYPESCRIPT</span><span>#NEXT</span></div>
      </li>
      <li class="scrolling-text">
        <div><span>#REST API</span><span class="icon icon_c"><img src="../assets/crud.svg" alt="crud 움직이는 아이콘">#CRUD 구현</span><span>#UI,UX 개선</span><span>#데이터 베이스</span><span class="icon icon_d"><img src="../assets/datalaptop.svg" alt="데이터 움직이는 아이콘">#데이터 분석</span><span>#JSON</span></div>
        <div><span>#REST API</span><span class="icon icon_c"><img src="../assets/crud.svg" alt="crud 움직이는 아이콘">#CRUD 구현</span><span>#UI,UX 개선</span><span>#데이터 베이스</span><span class="icon icon_d"><img src="../assets/datalaptop.svg" alt="데이터 움직이는 아이콘">#데이터 분석</span><span>#JSON</span></div>
        <div><span>#REST API</span><span class="icon icon_c"><img src="../assets/crud.svg" alt="crud 움직이는 아이콘">#CRUD 구현</span><span>#UI,UX 개선</span><span>#데이터 베이스</span><span class="icon icon_d"><img src="../assets/datalaptop.svg" alt="데이터 움직이는 아이콘">#데이터 분석</span><span>#JSON</span></div>
      </li>
    </ul>
  </div>
  <div class="section s_project">
    <div class="text-wrap">
      <h5>주문하신 메뉴 나왔습니다!</h5>
      <h3>PROJECT</h3>
    </div>
    <div class="btnsection">
      <button class="albumbtn"></button>
      <span>|</span>
      <button class="slidebtn"></button>
    </div>
    <Swiper ref="{swiperRef}" :slidesPerView="3" class="mySwiper" >
    <swiper-slide v-for="(project,i) in projects" :key="i">
      <ProjectList :project="project"/>
    </swiper-slide>
    
  
  </Swiper>
  </div><!-- s_project -->

  <div class="section s_about">
      <div class="text-wrap">
        <h5>자기 소개 및 관련 사항</h5>
        <h3>About Me</h3>
      </div>
      <div class="canvas"><img src="../assets/about.png" alt="나의 이모지"></div>
      <p>안녕하세요! 생각의 경계를 넘어서는 <strong>유연한 사고</strong>와 <strong>혁신적인 발상</strong>으로 <strong>무한한 가능성</strong>을 만들어내고 싶은 <strong>프론트엔드 개발자 박지연</strong> 입니다.<br>
         작은 단위의 <Strong>컴포넌트를 재사용</Strong>하고 <Strong>확장성을 고려</Strong>해 개발하는 것을 좋아하며 새롭게 배운 기술을 업무에 적용해 더 나은 서비스를<br>
         구축하는 것을 목표로 정진합니다.
      </p>
      <button @click="goToAbout">더보기</button>
    
  </div>

  <div class="section s_interview">
      <div class="text-wrap">
        <h5>질문과 답변</h5>
        <h3>Interview</h3>
      </div>
      <ul>
        <li>
          <h4>Q) 디자이너에서 프론트 엔드로 전향한 이유?</h4>
          <p>첫 시작은 퍼블리싱이였습니다.<br>
               퍼블리싱에 관심이 있어 혼자 독학으로 유튜브를 공부하다 화면을 내가 디자인한데로 구현해내는 것에 매료되었고 더 나아가 개발까지
               진행한다면 내가 기획한데로 디자인과 기능까지 모두 화면에 출력할 수 있겠다라는 생각에 전향을 결심하고 도전하게 되었습니다.
          </p>
        </li>
        <li>
          <h4>Q) 프로젝트를 하면서 가장 힘들었던 것은?</h4>
          <p>팀 작업을 할때는 모두의 의견을 조율하고 내가 맡은 부분을 시간 안에 끝내야 하는 책임감에 힘들었습니다. 하지만 서로의 지식을 나누고
               공유할 수 있어 더욱 성장하는 기회가 된 것 같습니다. 개인 작업시에는 설계를 혼자서 다 해내야 한다는 점이 어려웠던 것 같습니다.
               작업 전 미리 효율적인 로직과 구조를 짠다면 훨씬 빠르고 깔끔한 작업물이 나온다는 것을 몇번의 작업을 거치고 습득할 수 있었던 것 같습니다.
          </p>
        </li>
      </ul>
    
  </div>

  <div class="section s_career">
      <div class="text-wrap">
        <h5>경력 사항 및 교육</h5>
        <div class="c_row">
          <h3>CAREER</h3>
          <button class="morebtn" @click="goToCareer">더보기</button>
        </div>
      </div>
      <ul>
        <li>
          <div class="c_front">
                <span>2024. 12. 01 ~</span>
                <h3>무궁무진한 발전을 기약, 미래의 회사</h3>
          </div>
        </li>
        <li class="spreadsection" :class="{ active: isOpen(1) }" @mouseenter="onHover(1)" >
          <div class="c_front">
                <span>2018-09-10 ~ 2023-12-01 </span>
                <h3>(주)베스트해피라인 / (주)금오H라인</h3>
          </div>
          <div class="c_back" v-if="isOpen(1)">
                <span>2018-09-10 ~ 2023-12-01 </span>
                <h3>(주)베스트해피라인 / (주)금오H라인</h3>
                <p>병ㆍ의원 운영 시스템을 갖춘 마케팅 컨설팅 회사로
                   오프라인 및 온라인 홍보 및 마케팅, 경영 관리를 지원하는 회사입니다.
                   온라인 마케팅 팀에 귀속되어 웹디자이너로 근무하였습니다.
                </p>
          </div>
        </li>
        <li class="spreadsection" :class="{ active: isOpen(2) }" @mouseenter="onHover(2)" >
          <div class="c_front" >
                <span>2015.3.23 ~ 2017.11.06</span>
                <h3>(주)토다이 평촌점</h3>
          </div>
          <div class="c_back" v-if="isOpen(2)">
                <span>2015.3.23 ~ 2017.11.06</span>
                <h3>(주)토다이평촌점</h3>
                <p>미국, 중국, 일본, 한국 등의 지점이 있는 씨푸드 레스토랑으로
                   일식, 중식, 한식, 양식, 패스츄리가 제공되는 패밀리 레스토랑입니다.
                                   
                   한식 & 패스츄리 파트에서 쿡으로 1년 8개월 근무,
                   양식파트에서 헤드쉐프로 1년 근무하였습니다. 
                </p>
          </div>
        </li>
        <li class="spreadsection" :class="{ active: isOpen(3) }" @mouseenter="onHover(3)" >
          <div class="c_front">
                <span>2013.2.15~2015.01.28</span>
                <h3>호주 워킹홀리데이</h3>
          </div>
          <div class="c_back" v-if="isOpen(3)">
                <span>2013.2.15~2015.01.28</span>
                <h3>호주 워킹홀리데이</h3>
                <p>학교에서 2011년 1월 경 5주 호주 연수 프로그램에 선발되어
                   어학 연수를 다녀왔던 경험을 토대로 워킹홀리데이에
                   도전하여 2년동안 스시 롤러, 딸기 농장, 청소 등 다양한 직업을 경험하고
                   글로벌 역량을 강화해 돌아왔습니다. 
                </p>
          </div>
        </li>
        <li class="spreadsection" :class="{ active: isOpen(4) }" @mouseenter="onHover(4)">
          <div class="c_front">
                <span>2011.5.13 ~ 2012.07.29</span>
                <h3>(주)호반호텔앤리조트</h3>
          </div>
          <div class="c_back" v-if="isOpen(4)">
                <span>2011.5.13 ~ 2012.07.29</span>
                <h3>(주)호반호텔앤리조트</h3>
                <p>(주)리솜리조트라는 이름으로 설립된 리조트 운영 기업으로
                   제천, 안면도, 덕산, 제주에 지점들이 있으며 학동에 위치한
                   본사의 판촉팀에서 연회장 예약 및 관리를 담당하였습니다.
                </p>
          </div>
        </li>
        <li>
          <div class="c_front">
                <span>2008.03 ~ 2011.02</span>
                <h3>대림대 졸업</h3>
          </div>
        </li>
        <li>
          <div class="c_front">
                <span>2005.03 ~ 2008.02</span>
                <h3>산본고 졸업</h3>
          </div>
        </li>
        
      </ul>
    
  </div>
  <SubSection/>
  </div> <!-- 홈 -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import ProjectList from "@/components/ProjectList.vue";
import SubSection from "@/components/SubSection.vue";
import { useRouter } from 'vue-router'; // useRouter 훅 사용
import projectsData from '../data/project.json'; // JSON 파일 import

console.log(projectsData);
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default defineComponent({
  name: "HomeView",
  components: {
    Swiper,
    SwiperSlide,
    ProjectList,
    SubSection
  },
  data(){
    return{
      projects: projectsData.project, // 프로젝트 데이터를 저장할 배열
      activeIndex: 1 as (number | null),
   
    }
  },
  methods:{
    // 호버 시 활성화된 항목을 관리
    onHover(index: number):void {
      this.activeIndex = index; // 해당 인덱스의 항목을 활성화
    },

    // 호버에서 벗어났을 때 상태를 초기화
    onLeave() {
      // activeIndex가 1 ~ 4 사이의 값일 경우에만 비활성화
      if (![1, 2, 3, 4].includes(this.activeIndex as number)) return;
      this.activeIndex = null;
    },

    // activeIndex 상태에 따라서 각 항목의 열림/닫힘 상태를 반환
    isOpen(index: number) { return this.activeIndex === index;  }
  },
  mounted() {
    // 서버에서 데이터를 fetch
    fetch('/api/projects')
      .then((response) => response.json())
      .then((data) => {
        this.projects = data.projects; // 프로젝트 데이터를 컴포넌트에 저장
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
  },
  setup() {
    const router = useRouter(); // useRouter 훅을 사용하여 router 객체를 가져옵니다.
    const goToAbout = () => {
      router.push({ name: 'about' }); // router.push로 이동
    };
    const goToCareer = () => {
      router.push({ name: 'career' }); // router.push로 이동
    };

    return {
      goToAbout, goToCareer
    };
  }
});

</script>


<style lang="scss">
:root {
  --primary-color: #2546B4;  
  --width-size: 82%;
  --serve-color: #2D2D2D;
}
.home{
  .s_intro{margin-bottom: 70px;
  h2{
    line-height: 10rem;
    font-size: 9rem;
    color: var(--primary-color);
    margin: 60px 0 50px;
  }
  b{
    display: inline-block;
    color: var(--primary-color);
    font-size: 2rem;
    font-weight: 200;
    padding: 20px 30px;
    border: 1px solid var(--primary-color);
    border-radius: 99px;
  }
  .introgif{
    margin-top: 60px;
  }
}
//섹션마다 공통으로 쓰는 것들
.section{
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  .text-wrap{
    h5{
      font-weight: 400;
      font-size: 1.8rem;
    }
    h3{
      
      font-size: 4rem;
    }
  }
}
.s_cart{
  padding: 0 160px;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  p{
    margin: 0;
    text-align: left;
    width: 55%;
    font-weight: 400;
    font-size: 4.1rem;
    color: white;
    letter-spacing: -3%;
  }
  figure{
    padding-left: 60px;
    margin: 0;
    width: 45%;
    text-align: left;
    img{
      filter: drop-shadow(5px 5px 5px rgba(0,0,0,.1));
       
    }
  }
}
.s_service{
  display: flex;
  flex-direction: column;              
  justify-content: center;     /* 가로 방향으로 중앙 정렬 */
  height: 100vh;               /* 섹션 높이를 화면 높이로 설정 (뷰포트의 100%) */
  
  .text-wrap{
    margin: 0 0 50px 10%;
    text-align: left;
  }
  ul{
    li{
      padding: 60px 0;
      border-top: 1px solid #ddd;
      border-bottom: 1px solid #ddd;
      display: flex;
      align-items: center;
      overflow: hidden; /* 텍스트가 밖으로 나가지 않게 설정 */
      position: relative;
      // white-space: nowrap;
      // animation: flow-txt 10s infinite linear;
      &:nth-child(2){
        border: none;
        div{
          flex:0 0 2200px;
          align-items: center;
          white-space: nowrap;
          animation: flow-txt-reverse 50s infinite linear;
          }
        }
      &:nth-child(3){
        div{
        flex:0 0 2000px;
        align-items: center;
        white-space: nowrap;
        animation: flow-txt 40s infinite linear;
        }
      }
      
      div{
        flex:0 0 1400px;
        align-items: center;
        white-space: nowrap;
        animation: flow-txt 35s infinite linear;
          span{
            vertical-align: middle;
            white-space: nowrap;
            padding-right: 7%;
            font-size: 2rem;
            display: inline-block;
          }
          .icon {
            display: inline-flex;
            align-items: center; /* 아이콘과 텍스트가 세로로 정렬되게 */
            img{
              margin-right: 10px;
              width: 70px; 
              height: auto;
              object-fit: contain;
              // vertical-align: middle;
            }
          }
      }
      
    }
  }
}
@keyframes flow-txt{
    100%{transform: translateX(-100%);}
}
@keyframes flow-txt-reverse{
    100%{transform: translateX(0%);}
    0%{transform: translate(-100%);}
}
.s_project{
  background-color: var(--serve-color);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;              
  align-items: center;
  height: 100vh;  
  .text-wrap{
    color: white;
    margin-bottom: 35px;
  }
 .btnsection{
  position: absolute;
  top:15%;
  right: 16%;
  z-index: 10; //위로 올려주니 커서 포인트가 됨
  display: flex;
  gap: 25px;
  button{
    border: none;
    width: 54px;
    height: 54px;
    border-radius: 10px;
    background-size: cover;
  }
  .albumbtn{
    background: #3E3E3E url('../assets/albumbtn.svg') center no-repeat;
  }
  .slidebtn{
    background: #2546B4 url('../assets/slidebtn.svg') center no-repeat;
  }
  span{
    background-color: #3E3E3E;
    font-size: 3px;  
  }
 }
 .swiper{
  width: 83%;
  color: white;}
}

.s_about{
  display: flex;
  flex-direction: column;              
  justify-content: center;    
  height: 100vh;
  .text-wrap{
    margin: 0 0 50px 10%;
    text-align: left;
    h5{margin-bottom: -13px;}
  }
  .canvas{
    margin-top: -60px;
    img{
      width:700px;
      height: auto;
      object-fit: cover;
    }
  }
  p{
    margin: 50px 10% 30px;
    font-size: 1.6rem;
    text-align: left;
  }
  button{
    font-size: 1rem;
    margin: 0 auto;
    border-radius: 10px;
    display: block;
    color: white;
    width: 200px;
    height: 50px;
    background-color: var(--serve-color);
  }
}
}
.s_interview{
  background-color: var(--primary-color);
  color: white;
  display: flex;
  flex-direction: column;              
  justify-content: center;    
  height: 100vh;
  .text-wrap{
    margin: 0 0 50px 10%;
    text-align: left;
    h5{margin-bottom: -13px;}
    }
  ul{ margin: 0 10%;
    li{
      background-color: white;
      width:100%;
      color: var(--serve-color);
      margin-bottom: 25px;
      border-radius: 10px;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 4% 3%;
      h4{
        font-weight: 700;
        font-size: 2rem;
        color: var(--primary-color);
        margin-bottom: 20px
      }
      p{
        word-break: break-all;
        margin: 0 40px;
        font-size: 1.2rem;
        color: #7A7A7A;
      }
    }
  }  
}
.s_career{
  background-color: #E2E2E2;
  display: flex;
  flex-direction: column;              
  justify-content: center;    
  height: 100vh;
  .text-wrap{
    margin: 0 0 50px 10%;
    text-align: left;
    h5{margin-bottom: -13px;}
    .c_row{
      display: flex;
      align-items: center;
      button{
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        border-radius: 99px;
        color: white;
        font-size: 1.2rem;
        margin-left: 40px;
        width: 15%;
        padding: 1% 2%;
        background-color: var(--serve-color);
        &::after{
          margin: 3px 0 0 10px;
          cursor: pointer;
          content: url('../assets/arrowright.svg') ;
          display: block;
        }
      }
    }
  }
  ul{
    display: flex;
    justify-content: space-between;
    gap:20px;
    width:83%;
    margin:0 auto;
    li{
      flex-grow: 1;
      height: 550px;
      position: relative;
      transition: 0.3s ease;
      border-radius: 10px;
      background-color: white;
      overflow: hidden;
      .c_front{
      position: absolute;
      left:0; top:0;
      width: 100%;
      // height: 100%;
      // display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      // padding-top: 30px;
      border-radius: 10px;
      // writing-mode: vertical-rl;
      transform-origin: 0% 0%;
      transform: translate(76%,50px) rotate(90deg) ;
      
      text-align: start;
      background-color: white;
      z-index: 10;
      font-size: 1.3rem;
      letter-spacing: 3px;
      transition: opacity 0.3s ease; /* 부드럽게 사라지도록 설정 */
      h3{
        font-weight: 400;
        white-space: nowrap;
      }
      span{
        display: block;
        white-space: nowrap;
      }
      }
      .c_back{
        background-color: var(--serve-color);
        width:760px;
        height: 100%;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: 5;
        top:0;
        left:0;
        z-index: 5;
        transition: opacity 0.3s ease; /* 부드럽게 나타나도록 설정 */
        text-align: left;
        padding: 30px;
        opacity: 0%; 
        span{
          font-size: 1.4rem;
          font-weight: 100;
          color: rgb(116, 116, 116);
        }
        h3{
          font-size: 2rem;
          margin-bottom: 15%;
        }
        p{
          word-break: keep-all;  //단어를 유지하면서
          font-size: 1.3rem;
          font-weight: 200;
        }

      }
    /* li가 hover 되었을 때 */
      &.active{
        flex-grow: 6;
        height: 100%;
        color: white;
        transition: flex-grow 0.8s ease;;
        .c_front{
          opacity: 0;
          z-index: 1;
        }
        .c_back{
        background-color: var(--serve-color);
        opacity: 100%; 
        z-index: 20;
        }
      }
    }
   
  }
}




</style>