 <template>
  <div>
    <div class="mainHeader">
      <div class="fontHeader">
       <span>Jang Min Sol</span>
      </div>
     <div class="cate1">
      <span>Dream it. Wish it. Do it.</span>
     </div>
    </div>
    <router-view />
  </div>
</template>

<style>
.mainHeader{
  background: #262626;
  width:120%;
  height: 90px;
}

.fontHeader{
  font-weight: bold;
  font-size: 23px;
  display: inline-block;
  margin-top: 30px;
  margin-left: 12%;
  margin-right: 30%;
  color: #ffffff;
}

.cate1{
  font-weight: bold;
  font-size: 18px;
  display: inline-block;
  margin-left: 14%;
  color: GOLD;
}
</style>
