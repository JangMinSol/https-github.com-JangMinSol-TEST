<template>
  <div class="profile">
    <div class="open_page">
      <div class="open img">
        <img src="../assets/images/pink_profile.png" width="278px" height="270px" style="border-radius: 200px; margin-bottom: 40px; margin-top: 17px;">
      </div>
      <div class="open name">
        <p>JangMinSol___Profile</p>
      </div>
      <div class="open text">
        <a href="https://github.com/JangMinSol" target="_blank">
          <img src="../assets/images/github.png" width="50px" height="50px" alt="이미지 클릭 시 링크로 연결.">
        </a>
      </div>
    </div>
  <div class="container">
     <div class="item item1">
       <div class="profile_1">
        <img src="../assets/images/mint_profile.png" width="240px" height="235px" style="border-radius: 200px; margin-bottom: 40px; margin-top: 17px;">
       </div>
        <div id="table1">
         <div class="row">
           <span class="cell col1">이름</span>
           <span class="cell col2">장민솔</span>
         </div>
         <div class="row">
           <span class="cell col1">생년월일</span>
           <span class="cell col2">2001.03.26 (21세)</span>
         </div>
         <div class="row">
           <span class="cell col1">이메일</span>
           <span class="cell col2">sol03260@naver.com</span>
         </div>
         <div class="row">
           <span class="cell col1">연락처</span>
           <span class="cell col2">010 4085 7665</span>
         </div>
         <div class="row">
           <span class="cell col1">주소</span>
           <span class="cell col2">경기도 안양시 안양동</span>
         </div>
       </div>
     </div>
     <div class="item item2">
        <div id="table1">
          <div class="row">
           <ul>
            <p style="font-size: 17px; font-weight: bold;">학력</p>
            <li style="font-size: 15px; ">2020.02 &nbsp; &nbsp; **고등학교 졸업</li>
            <li style="font-size: 15px;">2024.02 &nbsp; &nbsp; **대학교 졸업 예정</li>
           </ul>
         <div class="row">
           <ul>
             <p style="font-size: 17px; font-weight: bold;">경력</p>
             <li style="font-size: 15px; text-align: left;">2021.07 &nbsp; &nbsp; (주)필드유 인턴</li>
           </ul>
         </div>
         <div class="row">
           <ul>
             <p style="font-size: 17px; font-weight: bold;">희망 취득 자격증</p>
             <li style="font-size: 15px;">정보처리기사</li>
             <li style="font-size: 15px;">GTQ(그래픽기술자격)</li>
           </ul>
         </div>
         <div class="row">
           <ul>
             <p style="font-size: 17px; font-weight: bold;">희망 직종</p>
             <li style="font-size: 15px;">프론트엔드 개발</li>
           </ul>
         </div>
       </div>
     </div>
   </div>
    <div class="item item3">
         <ul>
           <li style="font-size: 17px; font-weight: bold; list-style: none;">희망 스킬</li>
           <li style="font-size: 15px;">HTML5</li>
           <img src="../assets/images/html5.png" style="width: 58px; height: 55px; padding: 10%; margin-bottom: 10px;">
           <li style="font-size: 15px;">Vue.js</li>
           <img src="../assets/images/vuejs.png" style="width: 62px; height: 60px; padding: 10%; margin-bottom: 10px;">
           <li style="font-size: 15px;">JAVA</li>
           <img src="../assets/images/java.png" style="width: 66px; height: 65px; padding: 10%; margin-bottom: 10px;">
           <li style="font-size: 15px;">파이썬</li>
           <img src="../assets/images/python.png" style="width: 61px; height: 61px; padding: 10%; margin-bottom: 10px;">
         </ul>
     </div>
   </div>
   <div class="last_line">
     <img src="" style="width: 70px; height: 60px; text-align: left; padding-left: 40px;">
   </div>
 </div>
</template>

<style>
.open_page{
  display: flex;
  margin-left: 14%;
  margin-right: 14%;
  margin-top: 4%;
  margin-bottom: 8%;
  padding-top: 7%;
  padding-bottom: 1%;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  border-radius: 0 20px 0 20px;
  border: solid;
  border-width: 2px;
  border-color: #727272;
}

.open{
  width: 100px auto;
  height: 100px auto;
}

.img{
  flex-basis: 50%;
  text-align: center;
}

.name{
  flex-basis: 30%;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 45px;
  font-size: 30px;
  font-weight: bold;
  color: #3A3A3A;
}

.text{
  flex-basis: 40%;
  text-align: right;
  margin-right: 20px;
  margin-top: 30px;
}

.container{
  padding-left: 10%;
  padding-right: 7.5%;
  padding-top: 10%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  font-family: 'Noto Sans KR', sans-serif;
  color: #3A3A3A;
  margin-bottom: 3%;
}

.item{
  padding: 15px;
  width: 100px auto;
  height: 400px auto;
}

.item1{
  text-align: center;
  flex-basis: 40%;
  border-right-style: groove;
}

#table1 {display: table; width: 100%; float: center; margin-left: 60px}

.row {display: table-row;}
.cell {display: table-cell; padding: 10px;}
.col1 {width: 10%; font-weight: bold; color: #3A3A3A; text-align: left; padding-left: 45px;}
.col2 {width: 15%; color: #3A3A3A; text-align: left; padding-left: 50px;}

.item2{
  text-align: left;
  flex-basis: 28%;
}

.item3{
  margin-left: 70px;
  flex-basis: 22%;
}

ul{
 list-style: none;
 display: table;
 padding: 20px;
}

li{
  padding: 10px;
  list-style: square;
 }

 .last_line{
   display: flex;
   margin-top: 10%;
   background: #262626;
   width:120%;
   height: 90px;
 }
</style>
