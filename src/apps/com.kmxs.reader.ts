进口 { 默认应用配置 }从&#39;/类型&#39; ;

出口违约 默认应用配置 ( {
身份证件 : “com.kmxs.reader” ,
名称 : &#39;Seven Cats Free Novel&#39; ,
组 : [
 {
钥匙 : - one ,
名称 : &#39;Open screen advertisement&#39; ,
 活动ID :“com.kmxs.reader.home.ui.HomeActivity” ,
规则 : ['[id="com.kmxs.reader:id/tv_count_down_text"][text^="跳过"]' ] ,
 快照URL : [ &#39; https://gkd-kit.gite.io/import/12640282 &#39; ] ,
 } ,
 {
钥匙 : zero ,
名称 : &#39;Teenager mode pop-up&#39; ,
 活动ID :“com.kmxs.reader.home.ui.HomeActivity” ,
规则 :'[id="com.kmxs.reader:id/young_dialog_close"]' ,
 } ,
 {
钥匙 : - two ,
名称 : &#39;Update pop-up&#39; ,
 活动ID :“com.km.app.update.UpdateVersionV2Activity” ,
规则 :'[id="com.kmxs.reader:id/tv_update_cancel"]' ,
 快照URL : &#39; https://gkd-kit.gite.io/import/12641338 &#39; ,
 } ,
 {
钥匙 : two ,
名称 : &#39;Read the ads at the bottom of the page&#39; ,
 活动ID : &#39;org.geometriterplus.android.fbread.FBReader&#39; ,
规则 :
'[id="com.kmxs.reader:id/ll_ad_native_banner"] > [id="com.kmxs.reader:id/iv_ad_direct_close"]' ,
 快照URL : [ &#39; https://gkd-kit.gite.io/import/12640296 &#39; ] ,
 } ,
 {
钥匙 : three ,
名称 : &#39;Ads displayed after reading&#39; ,
 活动ID : &#39;org.geometriterplus.android.fbread.FBReader&#39; ,
规则 :
'[text$="广告"] - ImageView[id="com.kmxs.reader:id/logo_icon"][id="com.kmxs.reader:id/ad_direct_close"]' ,
 快照URL : [ &#39; https://gkd-kit.gite.io/import/12640303 &#39; ] ,
 } ,
 {
使可能 :假 ,
钥匙 : four ,
名称 : &#39;Sign in pop-up&#39; ,
 活动ID : &#39;org.geometriterplus.android.fbread.FBReader&#39; ,
规则 :
'@TextView[id=null] < View +(2) TextView[text^="已连签"&&text*="天"]' ,
 快照URL : [ &#39; https://gkd-kit.gite.io/import/12640320 &#39; ] ,
 } ,
 {
使可能 :假 ,
钥匙 : ninety-nine ,
名称 : &#39;Right suspended red packet&#39; ,
 活动ID :“com.kmxs.reader.home.ui.HomeActivity” ,
规则 : {
比赛 :
'[id="com.kmxs.reader:id/red_packet_img"] + [id="com.kmxs.reader:id/close_red_packet"]' ,
行动 : &#39;单击中心&#39; ,
 } ,
 快照URL : [ &#39; https://gkd-kit.gite.io/import/12640287 &#39; ] ,
 } ,
 ] ,
 } ) ;
