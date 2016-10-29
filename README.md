http://nrabinowitz.github.io/pjscrape/



## Check balance

https://balance.breezecard.com/breezeWeb/jsp/web/cardnumberweb.jsp

```html
<input type="text" name="cardnumber" maxlength="24" value="" id="cardnumber">

<input type="image" name="submitButton" src="/breezeWeb/images_2/btn_submit.jpg;jsessionid=n74kYTfK6bKSBhtpZ9BNGGVtCr4vvmD9n9l72yRk5FhvYnv3KBJn!1241563839" border="0" alt="Submit Information">
```


RESULT:

```html
    <table width="40%" border="0" cellspacing="1" cellpadding="3"> 
          <tbody><tr>       
           <td width="15%" class="Content_bold">Product Name</td>
           <td width="15%" class="Content_bold">Product Expire Date</td>
           <td width="15%" class="Content_bold">Remaining Rides</td> 
          </tr>     
          
            <tr>
              <td class="Content_normal_black">20 Trip </td>
              <td class="Content_normal_black"> </td>
              <td class="Content_normal_black"><div align="center">9</div> </td>
            </tr>
                        
            
            <tr>
              <td height="4" colspan="3" class="normaltext"><hr class="PageHeader"></td>
            </tr>
            <tr class="Content_bold">
              <td height="22">Stored Value : </td>
              <td>$0.00</td>
            </tr>
            <tr>
      </tr><tr>
              <td height="4" colspan="3" class="normaltext"><hr class="PageHeader"></td>
            </tr>            
      <tr>
              <td height="4" colspan="3" class="Content_bold">Pending Autoload Transactions</td>
            </tr>
           
            
            <tr>  
            <td class="Content_normal_black">No Pending Transactions</td>
            </tr>
        
    <tr>     
        <td width="35%">&nbsp;</td><td width="25%">
        <input type="image" name="backButton" src="/breezeWeb/images_2/btn_back.jpg" border="0" alt="back button">
        </td>
        </tr>
        </tbody></table>
```



After you have an account and you've registered your breeze card:


https://is.breezecard.com/marta/linkExistingBreezeCard.do?dispatchTo=linkExistingBreezeCard&action=addExitingCard

```html
<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" id="breezeCardListTable">
                                          <tbody><tr>
                                            <td width="15%" class="table_grid_main">
                                              Nickname
                                            </td>
                                            <td width="28%" class="table_grid_main">
                                              Card Serial Number
                                            </td>
                                            
                                            <td width="2%" class="table_grid_main">
                                              &nbsp;
                                            </td>
                                            <td width="2%" class="table_grid_main">
                                              &nbsp;
                                            </td>
                                            <td width="2%" class="table_grid_main">
                                              &nbsp;
                                            </td>
                                          </tr>
                                        
                                          
                                          <tr>
                                            
                                            <td class="table_grid_even">
                                              <!--
                                              
                                              
                                              
                                                <a href="javascript:changeViewEditCardDiv('editBreezeCardDiv','346636','MyCard','0160 0275 7057 4995 ');">
                                                  MyCard
                                                </a>
                                              
                                              -->
                                              MyCard&nbsp;
                                            </td>
                                            
                                            <td class="table_grid_even">
                                              <a href="javascript:getCardDetails('0160 0275 7057 4995 ');">
                                                0160 0275 7057 4995 
                                              </a>&nbsp;&nbsp;
                                                <img src="images/lock_icon.gif" width="15" title="This card is registered for Balance Protection.">
                                            
                                            </td>
                                            
                                            <td class="table_grid_even">
                                              <script> 
                                                document.write("<a  href='#' onclick='javascript:addTripsToBreezeCard(\"346636\",\"0160 0275 7057 4995 \")'><img src='"+
                                                    imageUrl+"add_trips.gif' border='0' alt='Add Trips' title='Add Trips'/></a>");
                                              </script><a href="#" onclick="javascript:addTripsToBreezeCard(&quot;346636&quot;,&quot;0160 0275 7057 4995 &quot;)"><img src="images/buttons/add_trips.gif" border="0" alt="Add Trips" title="Add Trips"></a>
                                            </td>
                                            <td class="table_grid_even">
                                              <script> 
                                                document.write("<a href='#' onclick='javascript:changeViewEditCardDiv(\"editBreezeCardDiv\",\"346636\",\"MyCard\",\"0160 0275 7057 4995 \");'><img src='"+
                                                    imageUrl+"edit.gif' border='0' alt='Edit Breeze Card Nick Name' title='Edit'/></a>");
                                              </script><a href="#" onclick="javascript:changeViewEditCardDiv(&quot;editBreezeCardDiv&quot;,&quot;346636&quot;,&quot;MyCard&quot;,&quot;0160 0275 7057 4995 &quot;);"><img src="images/buttons/edit.gif" border="0" alt="Edit Breeze Card Nick Name" title="Edit"></a>
                                            </td>
                                            <td class="table_grid_even">
                                              <script> 
                                                document.write("<a href='#' onclick='javascript:removeBreezeCard(\"346636\",\"0160 0275 7057 4995 \",\"MyCard\");'><img src='"+
                                                    imageUrl+"remove.gif' border='0' alt='Remove' title='Remove'/></a>");
                                              </script><a href="#" onclick="javascript:removeBreezeCard(&quot;346636&quot;,&quot;0160 0275 7057 4995 &quot;,&quot;MyCard&quot;);"><img src="images/buttons/remove.gif" border="0" alt="Remove" title="Remove"></a>
                                            </td>
                                            <!--
                                            <td class="table_grid_even" align="center">
                                              <table width="50%" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                  <td align="center">
                                                    <SCRIPT> 
                                                      document.write("<a href='#' onclick='javascript:changeViewEditCardDiv(\"editBreezeCardDiv\",\"346636\",\"MyCard\",\"0160 0275 7057 4995 \");'><img src='"+
                                                          imageUrl+"edit.gif' border='0' alt='Edit Breeze Card Nick Name' title='Edit'/></a>");
                                                    </SCRIPT>
                                                  </td>
                                                  <td align="center">
                                                    <SCRIPT> 
                                                      document.write("<a href='#' onclick='javascript:removeBreezeCard(\"346636\",\"0160 0275 7057 4995 \",\"MyCard\");'><img src='"+
                                                          imageUrl+"remove.gif' border='0' alt='Delete' title='Delete'/></a>");
                                                    </SCRIPT>
                                                  </td>
                                                  
                                                </tr>
                                              </table>
                                            </td>
                                            -->
                                          </tr>
                                          
                                        </tbody></table>
```

https://is.breezecard.com/marta/breezeCardAction.do?dispatchTo=purchaseCard&cardAction=reloadCard&breezeCardIdForAddTrips=346636&cardAction=reloadCard


```
<table width="98%" border="0" align="right" cellpadding="0" cellspacing="0">
                                                  
                                                  
                                                    
                                                    <tbody><tr>
                                                     <td> 
                                                       &nbsp;
                                                    </td>
                                                    <td class="blue_strip" colspan="2">
                                                       MARTA
                                                       
                                                       Bus and Rail Service 
                                                       
                                                       <img src="images/help_icon_new.gif" align="right" title="You can select the region related products under the corresponding region.">
                                                    </td>
                                                    </tr>
                                                     <tr height="25">
                                                        <td colspan="3" class="table_text">
                                                                                                         
                                                        
                                                          <font color="#FF0000">Added Funds and Products may not be available for immediate use; allow up to 24 hours.</font>
                                                      
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                    <td width="5%" height="25">
                                                      &nbsp;
                                                    </td>
                                                    
                                                    
                                                    
                                                    <td width="85%" class="table_text" title="One single trip on bus and rail; each trip includes 4 transfers within 3 hours">
                                                      
                                                                                                            
                                                      <b>Transit Product</b>
                                                      
                                                      
                                                      </td>
                                                    
                                                    
                                                    <td width="10%" class="table_text" align="right">
                                                      Price
                                                      ($)
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                        <td colspan="3">
                                                        </td>
                                                   </tr>
                                                    
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="12_1 Trip_2.50_17921_MARTA_1" name="productChk" value="12">
                                                    </td>
                                                    
                                                    <td class="table_text" title="One single trip on bus and rail; each trip includes 4 transfers within 3 hours">
                                                      1 Trip
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      2.50
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="13_2 Trip_5.00_18177_MARTA_1" name="productChk" value="13">
                                                    </td>
                                                    
                                                    <td class="table_text" title="2 trips on MARTA bus and rail; each trip includes 4 transfers within 3 hours">
                                                      2 Trip
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      5.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="14_10 Trip_25.00_18433_MARTA_1" name="productChk" value="14">
                                                    </td>
                                                    
                                                    <td class="table_text" title="10 trips on MARTA bus and rail; each trip includes 4 transfers within 3 hours">
                                                      10 Trip
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      25.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="15_20 Trip_42.50_18689_MARTA_1" name="productChk" value="15">
                                                    </td>
                                                    
                                                    <td class="table_text" title="20 trips on MARTA bus and rail; each trip includes 4 transfers within 3 hours">
                                                      20 Trip
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      42.50
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="6_1 Day Pass_9.00_16385_MARTA_1" name="productChk" value="6">
                                                    </td>
                                                    
                                                    <td class="table_text" title="Unlimited travel on MARTA bus and rail; good for one calendar day; starts when first tapped.">
                                                      1 Day Pass
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      9.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="7_2 Day Pass_14.00_16641_MARTA_1" name="productChk" value="7">
                                                    </td>
                                                    
                                                    <td class="table_text" title="Unlimited travel on MARTA bus and rail; good for 2 consecutive calendar days; starts when first tapped">
                                                      2 Day Pass
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      14.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="8_3 Day Pass_16.00_16897_MARTA_1" name="productChk" value="8">
                                                    </td>
                                                    
                                                    <td class="table_text" title="Unlimited travel on MARTA bus and rail; good for 3 consecutive calendar days; starts when first tapped">
                                                      3 Day Pass
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      16.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="9_4 Day Pass_19.00_17153_MARTA_1" name="productChk" value="9">
                                                    </td>
                                                    
                                                    <td class="table_text" title="Unlimited travel on MARTA bus and rail; good for 4 consecutive calendar days; starts when first tapped">
                                                      4 Day Pass
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      19.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="10_7 Day Pass_23.75_17409_MARTA_1" name="productChk" value="10">
                                                    </td>
                                                    
                                                    <td class="table_text" title="Unlimited travel on MARTA bus and rail; good for 7 consecutive calendar days; starts when first tapped">
                                                      7 Day Pass
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      23.75
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="11_30 Day Pass_95.00_17665_MARTA_1" name="productChk" value="11">
                                                    </td>
                                                    
                                                    <td class="table_text" title="Unlimited travel on MARTA bus and rail; good for 30 consecutive calendar days; starts when first tapped">
                                                      30 Day Pass
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      95.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                    
                                                    <tr>
                                                    <td colspan="3">
                                                      &nbsp;
                                                    </td>
                                                  </tr>
                                                  
                                                    <tr>
                                                     <td> 
                                                       &nbsp;
                                                    </td>
                                                    <td class="blue_strip" colspan="2">
                                                       Cobb
                                                       
                                                       Bus Service
                                                       
                                                       <img src="images/help_icon_new.gif" align="right" title="You can select the region related products under the corresponding region.">
                                                    </td>
                                                    </tr>
                                                     <tr height="25">
                                                        <td colspan="3" class="table_text">
                                                                                                         
                                                         <font color="#FF0000">Added Funds and Products may not be available for immediate use; a minimum of 24-48 hours.</font>
                                                        
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                    <td width="5%" height="25">
                                                      &nbsp;
                                                    </td>
                                                    
                                                    
                                                    
                                                    <td width="85%" class="table_text" title="10 Rides on CCT local routes; free transfer to MARTA bus and rail">
                                                      
                                                                                                            
                                                      <b>Transit Product</b>
                                                      
                                                      
                                                      </td>
                                                    
                                                    
                                                    <td width="10%" class="table_text" align="right">
                                                      Price
                                                      ($)
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                        <td colspan="3">
                                                        </td>
                                                   </tr>
                                                    
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="17_CB Loc 10R_18.00_27649_Cobb_2" name="productChk" value="17">
                                                    </td>
                                                    
                                                    <td class="table_text" title="10 Rides on CCT local routes; free transfer to MARTA bus and rail">
                                                      Cobb Local 10 Ride
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      18.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="16_CB Loc 31D_72.00_27393_Cobb_2" name="productChk" value="16">
                                                    </td>
                                                    
                                                    <td class="table_text" title="31 Day Round Trip Pass for CCT local routes; 31 day period begins the first time the ticket is used">
                                                      Cobb Local 31 Day Pass
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      72.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="19_CB Exp 20R_65.00_28417_Cobb_2" name="productChk" value="19">
                                                    </td>
                                                    
                                                    <td class="table_text" title="20 Rides on CCT express routes; free transfer to MARTA bus and rail">
                                                      Cobb Express 20 Ride 
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      65.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="18_CB Exp 31D_125.00_27905_Cobb_2" name="productChk" value="18">
                                                    </td>
                                                    
                                                    <td class="table_text" title="31 Day Round Trip Pass for CCT local routes; 31 day period begins the first time the ticket is used">
                                                      Cobb Express 31 Day Pass
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      125.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                    
                                                    <tr>
                                                    <td colspan="3">
                                                      &nbsp;
                                                    </td>
                                                  </tr>
                                                  
                                                    <tr>
                                                     <td> 
                                                       &nbsp;
                                                    </td>
                                                    <td class="blue_strip" colspan="2">
                                                       Gwinnett
                                                       
                                                       Bus Service
                                                       
                                                       <img src="images/help_icon_new.gif" align="right" title="You can select the region related products under the corresponding region.">
                                                    </td>
                                                    </tr>
                                                     <tr height="25">
                                                        <td colspan="3" class="table_text">
                                                                                                         
                                                         <font color="#FF0000">Added Funds and Products may not be available for immediate use; a minimum of 24-48 hours.</font>
                                                        
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                    <td width="5%" height="25">
                                                      &nbsp;
                                                    </td>
                                                    
                                                    
                                                    
                                                    <td width="85%" class="table_text" title="10 Rides on Gwinnett County Transit express routes within Zone 1; free transfer to MARTA bus and rail">
                                                      
                                                                                                            
                                                      <b>Transit Product</b>
                                                      
                                                      
                                                      </td>
                                                    
                                                    
                                                    <td width="10%" class="table_text" align="right">
                                                      Price
                                                      ($)
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                        <td colspan="3">
                                                        </td>
                                                   </tr>
                                                    
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="26_GW Z1 Exp 10R_32.50_2305_Gwinnett_4" name="productChk" value="26">
                                                    </td>
                                                    
                                                    <td class="table_text" title="10 Rides on Gwinnett County Transit express routes within Zone 1; free transfer to MARTA bus and rail">
                                                      Gwinnett Zone1 Exp 10 Ride
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      32.50
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="28_GW Z2 Exp 10R_45.00_28161_Gwinnett_4" name="productChk" value="28">
                                                    </td>
                                                    
                                                    <td class="table_text" title="10 Rides on Gwinnett County Transit express routes within Zone 2; free transfer to MARTA bus and rail">
                                                      Gwinnett Zone 2 Express 10 Ride
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      45.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="27_GW Z1 Exp Month_130.00_2049_Gwinnett_4" name="productChk" value="27">
                                                    </td>
                                                    
                                                    <td class="table_text" title="Good for unlimited rides for 30 calendar days on Gwinnett County Transit local routes; begins after the first use. Free transfer to MARTA bus and rail">
                                                      Gwinnett Zone1 Express 30 Day
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      130.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="36_GW Z2 Exp Month_180.00_29185_Gwinnett_4" name="productChk" value="36">
                                                    </td>
                                                    
                                                    <td class="table_text" title="Gwinnett Zone 2 Express 30 Day
">
                                                      Gwinnett Zone 2 Express 30 Day
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      180.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="25_GW Loc Monthly_80.00_2817_Gwinnett_4" name="productChk" value="25">
                                                    </td>
                                                    
                                                    <td class="table_text" title="Good for unlimited rides for 30 calendar days on Gwinnett County Transit local routes; begins after the first use. Free transfer to MARTA bus and rail">
                                                      Gwinnett Local 30 Day 
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      80.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="24_GW Loc 10 Ride_22.50_2561_Gwinnett_4" name="productChk" value="24">
                                                    </td>
                                                    
                                                    <td class="table_text" title="10 Ride Pass for Gwinnett County Transit local routes: free transfer to MARTA bus and rail">
                                                      Gwinnett Local 10 Ride
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      22.50
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                    
                                                    <tr>
                                                    <td colspan="3">
                                                      &nbsp;
                                                    </td>
                                                  </tr>
                                                  
                                                    <tr>
                                                     <td> 
                                                       &nbsp;
                                                    </td>
                                                    <td class="blue_strip" colspan="2">
                                                       GRTA Xpress
                                                       
                                                       Bus Service
                                                       
                                                       <img src="images/help_icon_new.gif" align="right" title="You can select the region related products under the corresponding region.">
                                                    </td>
                                                    </tr>
                                                     <tr height="25">
                                                        <td colspan="3" class="table_text">
                                                                                                         
                                                         <font color="#FF0000">Added Funds and Products may not be available for immediate use; a minimum of 24-48 hours.</font>
                                                        
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                    <td width="5%" height="25">
                                                      &nbsp;
                                                    </td>
                                                    
                                                    
                                                    
                                                    <td width="85%" class="table_text" title="GRTA Green Zone Round Trip">
                                                      
                                                      
                                                      <b>Add Money</b>
                                                      
                                                      
                                                      </td>
                                                    
                                                    
                                                    <td width="10%" class="table_text" align="right">
                                                      Price
                                                      ($)
                                                    </td>
                                                  </tr>
                                                  <tr>
                                                        <td colspan="3">
                                                        </td>
                                                   </tr>
                                                    
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="40_GR Grn Rnd Trip_5.00_34305_GRTA Xpress_5" name="productChk" value="40">
                                                    </td>
                                                    
                                                    <td class="table_text" title="GRTA Green Zone Round Trip">
                                                      GRTA <font color="#228B22">Green Zone</font> Round Trip
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      5.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="41_GR Grn 10 Trip_25.00_35329_GRTA Xpress_5" name="productChk" value="41">
                                                    </td>
                                                    
                                                    <td class="table_text" title="GRTA Green Zone 10-Trip">
                                                      GRTA <font color="#228B22">Green Zone</font> 10-Trip
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      25.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="42_GR Grn 31 Day_100.00_35073_GRTA Xpress_5" name="productChk" value="42">
                                                    </td>
                                                    
                                                    <td class="table_text" title="GRTA Green Zone 31-Day  ">
                                                      GRTA <font color="#228B22">Green Zone</font> 31-Day 
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      100.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="43_GR Blu Rnd Trip_7.00_34049_GRTA Xpress_5" name="productChk" value="43">
                                                    </td>
                                                    
                                                    <td class="table_text" title="GRTA Blue Zone Round Trip">
                                                      GRTA <font color="#1E90FF">Blue Zone</font> Round Trip
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      7.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="44_GR Blue 10 Trip_35.00_34561_GRTA Xpress_5" name="productChk" value="44">
                                                    </td>
                                                    
                                                    <td class="table_text" title="GRTA Blue Zone 10-Trip">
                                                      GRTA <font color="#1E90FF">Blue Zone</font> 10-Trip
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      35.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  
                                                  <tr>
                                                  
                                                    <td>
                                                      <input type="checkbox" id="45_GR Blue 31 Day_125.00_34817_GRTA Xpress_5" name="productChk" value="45">
                                                    </td>
                                                    
                                                    <td class="table_text" title="GRTA Blue Zone 31-Day ">
                                                      GRTA <font color="#1E90FF">Blue Zone</font> 31-Day
                                                    </td>
                                                    
                                                    <td align="right" class="table_text">
                                                      125.00
                                                    </td>
                                                    
                                                  </tr>
                                                  
                                                  <tr>
                                                  <td colspan="4" align="right">
                                                  
                                                  <!--
                                                  <a href="#" onclick="javascript:isProductAlreadyExist();">
                                                    <img src="images/buttons/add.gif" alt="Add" 
                                                      title="Add" border="0" />
                                                  </a>
                                                  -->
                                                  &nbsp;
                                                  </td>
                                                  </tr>
                                                  
                                                </tbody></table>
```

https://is.breezecard.com/marta/breezeCardAction.do?dispatchTo=myCart

```html
<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
                                                          <tbody><tr>
                                                            <td class="table_grid_main_head">
                                                              Fare Products
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td class="table_grid_even">
                                                              <table width="100%" border="0" align="left" cellpadding="2" cellspacing="2">
                                                                <tbody><tr>
                                                                  <td colspan="5" class="table_text">
                                                                    &nbsp;
                                                                  </td>
                                                                </tr>
                                                                
                                                                <tr>
                                                                  <td width="25%" class="table_grid_main">
                                                                    Card
                                                                  </td>
                                                                  <td width="25%" class="table_grid_main">
                                                                    Products
                                                                  </td>
                                                                   <td width="25%" class="table_grid_main">
                                                                    Region
                                                                  </td> 
                                                                  <td width="13%" class="table_grid_main">
                                                                    Price($)
                                                                  </td>
                                                                  <td width="12%" class="table_grid_main"></td>
                                                                     
                                                                </tr>
                                                                
                                                                <tr>
                                                                  <td class="table_grid_odd">
                                                                    
                                                                    MyCard-0160 0275 7057 4995 
                                                                  
                                                                    
                                                                  </td>
                                                                  <td class="table_grid_odd">
                                                                    2 Trip
                                                                  </td>
                                                                   <td class="table_grid_odd">
                                                                    MARTA
                                                                  </td> 
                                                                  <td class="table_grid_odd" align="right">
                                                                    $5.00
                                                                  </td>
                                                                  <td class="table_grid_odd">
                                                                    <a href="#" onclick="javascript:updateCart('346636_13','removeProduct', 'myCartDiv');" title="Remove">Remove </a>
                                                                  </td>
                                                                </tr>

                                                                
                                                                
                                                                <tr>
                                                                  
                                                          </tr>
                                                              <tr>
                                                                  <td class="table_text" style="font-weight: bold;" width="40%">
                                                                    Total
                                                                  </td>
                                                                  <td class="table_text">
                                                                  </td>
                                                                  <td class="table_text" style="font-weight: bold;" align="right" width="40%" colspan="2">
                                                                    
                                                                      $&nbsp;5.00
                                                                      
                                                                    
                                                                  </td>
                                                                  <td class="table_text" width="20%">
                                                                  </td>
                                                                </tr>
                                                                <tr align="center">
                                                                  <td width="32%" colspan="5">
                                                                  
                                                                    <!-- MARTA UI Review Changes (start)  -->
                                                                    
                                                                    <script> 
                                                                      document.write("<a href='#' onclick='javascript:modifyDisplayTabData(\"addMoneyToCartDiv\");'><img src='"+
                                                                          imageUrl+"add_products.gif' border='0' alt='Add Products' title='Add Products'/></a>");
                                                                    </script><a href="#" onclick="javascript:modifyDisplayTabData(&quot;addMoneyToCartDiv&quot;);"><img src="images/buttons/add_products.gif" border="0" alt="Add Products" title="Add Products"></a>
                                                                    
                                                                    <!--
                                                                    <a href="#" onclick="javascript:modifyDisplayTabData('addMoneyToCartDiv');">
                                                                      <img src="images/buttons/previous.gif" alt="Previous" 
                                                                        title="Previous" border="0"/>
                                                                    </a>
                                                                    -->
                                                                    <!--
                                                                    <input name="Button" type="button"
                                                                      alt="Previous"
                                                                      title="Previous"
                                                                      class="button"
                                                                      onclick="javascript:modifyDisplayTabData('addMoneyToCartDiv');"
                                                                      value="Previous" />
                                                                    -->
                                                                    
                                                                    <script> 
                                                                      document.write("<a href='#' onclick='javascript:saveData(\"paymentMethodDiv\");'><img src='"+
                                                                          imageUrl+"continue.gif' border='0' alt='Continue' title='Continue'/></a>");
                                                                    </script><a href="#" onclick="javascript:saveData(&quot;paymentMethodDiv&quot;);"><img src="images/buttons/continue.gif" border="0" alt="Continue" title="Continue"></a>
                                                                    
                                                                    <!--
                                                                    <a href="#" onclick="javascript:saveData('paymentMethodDiv');">
                                                                      <img src="images/buttons/next.gif" alt="Next" 
                                                                        title="Next" border="0"/>
                                                                    </a>
                                                                    -->
                                                                    
                                                                    <!--
                                                                    <input name="Button" type="button"
                                                                      class="button"
                                                                      onclick="javascript:saveData('paymentMethodDiv');"
                                                                      value="Next"
                                                                      alt="Continue" title="Continue" />
                                                                    -->
                                                                    
                                                                    <a href="#" onclick="javascript:cancelFn();" title="Cancel">Cancel</a>
                                                                    <!--
                                                                    <a href="#" onclick="javascript:cancelFn();">
                                                                      <img src="images/buttons/cancel.gif" alt="Cancel" 
                                                                        title="Cancel" border="0"/>
                                                                    </a>
                                                                    -->
                                                                    
                                                                    <!--
                                                                    <input name="Button" type="button"
                                                                      alt="Cancel"
                                                                      title="Cancel"
                                                                      class="button" onclick="javascript:cancelFn();" 
                                                                      value="Cancel" />
                                                                    --> 
                                                                    <!-- MARTA UI Review Changes (end)  -->
                                                                    
                                                                  </td>

                                                                </tr>
                                                                <tr>
                                                                  <td class="table_text" colspan="5">
                                                                    &nbsp;
                                                                  </td>
                                                                </tr>

                                                              </tbody></table>
                                                            </td>
                                                          </tr>
                                                        </tbody></table>
```

https://is.breezecard.com/marta/breezeCardAction.do?dispatchTo=showPaymentDetails

```html
<table width="98%" border="0" align="center" cellpadding="0" cellspacing="0">
                                  <tbody><tr>
                                    <td class="table_grid_main_head">Payment Method</td>
                                  </tr>
                                  
                                      <tr>
                                        <td class="table_text" colspan="2"><input type="checkbox" id="payFromNewCard" onclick="javascript:showPayFromNewCard();" checked=""> Payment from new card</td>
                                      </tr>
                                      <tr>
                                        <td width="100%" colspan="2" class="table_text">
                                        <div id="showNewPaymentTR" style="display: block;">
                                        <table width="98%" border="0" align="left" cellpadding="2" cellspacing="2">
                                          <tbody><tr>
                                            <td class="table_grid_main_head" colspan="3">
                                            Payment Card Information 
                                            &nbsp; <font class="mandatory_astric_red">
                                            * </font>
                                            required field</td>
                                          </tr>
                                          <tr>
                                            <td class="table_text" colspan="2">
                                            <div id="cardMsgDiv" style="display: none;">
                                            <span class="table_text_info">We accept Debit Card with valid Visa or Mastercard Logo&nbsp;&nbsp;&nbsp;
                                            </span></div>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="table_text" style="font-weight: bold;">
                                            <input type="radio" name="addPaymentMode" value="1" onclick="javascript:getPaymentCardTypes(this);" id="addPaymentMode">
                                            Credit Card
                                            &nbsp;&nbsp;</td>
                                            <td class="table_text" style="font-weight: bold;">
                                            <input type="radio" name="addPaymentMode" value="2" onclick="javascript:getPaymentCardTypes(this);" id="addPaymentMode">
                                            Debit Card
                                            &nbsp;&nbsp;</td>
                                          </tr>
                                          <tr>
                                            <td class="table_text"><img src="images/u8.gif"></td>
                                            <td class="table_text"><img src="images/u23.gif">&nbsp;&nbsp;&nbsp;<span id="invalidaddPaymentMode" style="color: red">
                                            </span></td>
                                            <td>
                                            <table width="135" border="0" cellpadding="2" cellspacing="0" title="Click to Verify - This site chose VeriSign SSL for secure e-commerce and confidential communications.">
                                              <tbody><tr>
                                                <td width="135" align="center" valign="top"><script type="text/javascript" src="https://seal.verisign.com/getseal?host_name=is.breezecard.com&amp;size=M&amp;use_flash=NO&amp;use_transparent=NO&amp;lang=en"></script><img name="seal" src="https://seal.websecurity.norton.com/getseal?at=0&amp;sealid=1&amp;dn=is.breezecard.com&amp;lang=en&amp;tpt=opaque" oncontextmenu="return false;" border="0" usemap="#sealmap_medium" alt=""> <map name="sealmap_medium" id="sealmap_medium"><area alt="Click to Verify - This site has chosen an SSL Certificate to improve Web site security" title="" href="javascript:vrsn_splash()" shape="rect" coords="0,0,115,58" tabindex="-1" style="outline:none;"><area alt="Click to Verify - This site has chosen an SSL Certificate to improve Web site security" title="" href="javascript:vrsn_splash()" shape="rect" coords="0,58,63,81" tabindex="-1" style="outline:none;"><area alt="" title="" href="javascript:symcBuySSL()" shape="rect" coords="63,58,115,81" style="outline:none;"></map><br>
                                              <!--  <a
                                                  href="http://www.verisign.com/ssl-certificate/"
                                                  target="_blank"
                                                  style="color: #000000; text-decoration: none; font: bold 7px verdana, sans-serif; letter-spacing: .5px; text-align: center; margin: 0px; padding: 0px;">ABOUT
                                                SSL CERTIFICATES</a> --></td>
                                              </tr>
                                            </tbody></table>

                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="table_text" width="35%"><font class="mandatory_astric_red"> * </font> Card Type</td>
                                            <td></td>
                                          </tr>
                                          <tr>
                                            <td class="table_text" width="35%" colspan="2">
                                            <div id="addCreditCardTypeList" style="display:block;">
                                            
                                              <select name="addCreditCardType" size="1" id="templateId" class="table_form"><option value="-1">--Select--</option>
                                                <option value="1">Visa</option>
<option value="2">Master Card</option>
<option value="3">Discover</option>
<option value="4">Amex</option></select>
                                            &nbsp;&nbsp;&nbsp;<span id="invalidaddCreditCardType" style="color: red">
                                            </span></div>
                                            <div id="addDebitCardTypeList" style="display:none;">
                                            
                                              <select name="addDebitCardType" size="1" id="templateId" class="table_form"><option value="-1">--Select--</option>&gt;
            <option value="5">Visa</option>
<option value="6">Master Card</option></select>&nbsp;&nbsp;&nbsp;<span id="invalidaddDebitCardType" style="color: red">
                                              </span>
                                            </div>
                                            </td>
                                          </tr>









                                          <tr>
                                            <td class="table_text"><font class="mandatory_astric_red"> * </font> Card Number</td>
                                            <td></td>
                                          </tr>
                                          <tr>
                                            <td class="table_text" colspan="2"><input type="text" name="addCardNumber" maxlength="32" size="30" value="" id="addCardNumber" class="table_form">
                                            &nbsp;&nbsp;&nbsp; <span id="invalidaddCardNumber" style="color: red"> </span></td> <td class="table_text"><font class="mandatory_astric_red"> *</font>CVN&nbsp;<input type="text" name="cvn" maxlength="4" size="4" value="" id="cvn2" class="table_form">&nbsp;<img src="images/help_icon_new.gif" width="15" title="Card Verification Code">
                                                                          &nbsp;&nbsp;<a href="#" onclick="javascript:showCVNWindow()">What is CVN?</a>  <span id="invalidCvn2" style="color: red"> </span>
                                                                          </td>
                                                                          
                                          </tr>
                                          
                                          <tr>
                                            <td class="table_text"><font class="mandatory_astric_red"> * </font> Name (as appears on the card)</td>
                                            <td></td>
                                          </tr>
                                          <tr>
                                            <td class="table_text" colspan="2"><input type="text" name="addNameOnCard" maxlength="20" size="32" value="" class="table_form"> &nbsp;&nbsp;&nbsp; <span id="invalidaddNameOnCard" style="color: red">
                                            </span></td>
                                          </tr>

                                          <tr>
                                            <td class="table_text"><font class="mandatory_astric_red"> * </font> Expiration Date</td>
                                            <td></td>
                                          </tr>
                                          <tr>
                                            <td class="table_text" colspan="2">
                                              <select name="addExpirationMonth" id="addExpirationMonth" class="table_form"><option value="-1">--Select--</option>&gt;
                                                                          <option value="01">01</option>
<option value="02">02</option>
<option value="03">03</option>
<option value="04">04</option>
<option value="05">05</option>
<option value="06">06</option>
<option value="07">07</option>
<option value="08">08</option>
<option value="09">09</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option></select>
                                             
                                              <select name="addExpirationYear" id="addExpirationYear" class="table_form"><option value="-1">--Select--</option>&gt;
                                                                          <option value="2016">2016</option>
<option value="2017">2017</option>
<option value="2018">2018</option>
<option value="2019">2019</option>
<option value="2020">2020</option>
<option value="2021">2021</option>
<option value="2022">2022</option>
<option value="2023">2023</option>
<option value="2024">2024</option>
<option value="2025">2025</option>
<option value="2026">2026</option>
<option value="2027">2027</option></select>
                                             &nbsp;&nbsp;&nbsp; <span id="invalidaddExpirationMonth" style="color: red">
                                            </span> &nbsp;&nbsp;&nbsp; <span id="invalidaddExpirationYear" style="color: red">
                                            </span></td>
                                          </tr>
                                          <tr>
                                            <td class="table_text" colspan="3"><input type="checkbox" name="saveCardDetails" value="on" onclick="setValue()" id="saveCardDetails">
                                            Save this payment method for future use
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="table_text">Name this payment method</td>
                                            <td colspan="2" class="table_text"></td>
                                          </tr>
                                          <tr>
                                            <td class="table_text" colspan="2"><input type="hidden" styleid="saveCardDetails" id="saveCardDetails"> <input type="text" name="addNickName" maxlength="20" size="30" value="" onblur="checkPaymentCardName()" id="addNickName" class="table_form">
                                            &nbsp;&nbsp;&nbsp; <span id="invalidaddNickName" style="color: red"></span> <span id="duplicateNickName" style="color: red"></span>
                                            </td>
                                          </tr>
                                          <tr>
                                            <td class="table_grid_main_head" colspan="3">
                                            Billing Address Information</td>
                                          </tr>
                                          

                                          <tr>
                                            <td class="table_text" colspan="2">You can choose from existing addresses</td>
                                          </tr>

                                          <tr>
                                            <td class="table_text" colspan="2"><select name="billingAddressId" size="1" id="billingAddressId"><option value="299642">Parents</option></select> &nbsp;&nbsp;&nbsp; <span id="invalidBillingAddressTypeId" style="color: red"> </span></td>
                                          </tr>
                                          <tr>
                                            <td class="table_text" colspan="2">-OR-</td>

                                          </tr>
                                          
                                          <tr>
                                            <td class="table_text" colspan="2"><input type="checkbox" id="newBillingAddressChk" onclick="javascript:showNewBillingAddress();"> New Billing Address</td>
                                          </tr>
                                          <tr>
                                            <td width="100%" colspan="3">
                                            <div id="newBillingAddressTR" style="display: none;">
                                            <table width="100%" border="0" align="center" cellpadding="2" cellspacing="2">
                                              <tbody><tr>
                                                <td class="table_grid_main_head" colspan="2">
                                                New Billing Address
                                                &nbsp; <font class="mandatory_astric_red">
                                                * </font>
                                                required field</td>
                                              </tr>
                                              
                                              <tr>
                                                <td class="table_text" width="35%"><font class="mandatory_astric_red"> * </font>Address 1</td>
                                                <td class="table_text"></td>
                                              </tr>
                                              <tr>
                                                <td class="table_text" width="35%" colspan="2">
                                                <input type="text" name="billingAddress1" maxlength="100" size="30" value="" id="billingAddress1" class="table_form"> &nbsp;&nbsp;&nbsp; <span id="invalidBillingaddress1" style="color: red">
                                                </span></td>
                                              </tr>
                                              <tr>
                                                <td class="table_text">Address 2</td>
                                                <td class="table_text"></td>
                                              </tr>
                                              <tr>
                                                <td class="table_text" colspan="2"><input type="text" name="billingAddress2" maxlength="100" size="30" value="" id="billingAddress2" class="table_form"> &nbsp;&nbsp;&nbsp; <span id="invalidBillingaddress2" style="color: red">
                                                </span></td>
                                              </tr>
                                              <tr>
                                                <td class="table_text"><font class="mandatory_astric_red"> * </font> City</td>
                                                <td class="table_text"></td>
                                              </tr>
                                              <tr>
                                                <td class="table_text" colspan="2"><input type="text" name="billingCity" maxlength="20" size="30" value="" id="billingCity" class="table_form">
                                                &nbsp;&nbsp;&nbsp; <span id="invalidBillingcity" style="color: red"> </span></td>
                                              </tr>
                                              <tr>
                                                <td class="table_text"><font class="mandatory_astric_red"> * </font> State</td>
                                                <td class="table_text"></td>
                                              </tr>
                                              <tr>
                                                <td class="table_text" colspan="2"><select name="billingState" size="1" id="billingState" class="table_form"><option value="">-- Select --</option>
                                                  
                                                    <option value="1">Alabama</option>
<option value="2">Alaska</option>
<option value="3">American Samoa</option>
<option value="4">Arizona</option>
<option value="5">Arkansas</option>
<option value="6">California</option>
<option value="7">Panama Canal Zone</option>
<option value="8">Colorado</option>
<option value="9">Connecticut</option>
<option value="10">Delaware</option>
<option value="11">District of Columbia</option>
<option value="12">Florida</option>
<option value="13" selected="selected">Georgia</option>
<option value="14">Guam</option>
<option value="15">Hawaii</option>
<option value="16">Idaho</option>
<option value="17">Illinois</option>
<option value="18">Indiana</option>
<option value="19">Iowa</option>
<option value="20">Kansas</option>
<option value="21">Kentucky</option>
<option value="22">Louisiana</option>
<option value="23">Maine</option>
<option value="24">Maryland</option>
<option value="25">Massachusetts</option>
<option value="26">Michigan</option>
<option value="27">Minnesota</option>
<option value="28">Mississippi</option>
<option value="29">Missouri</option>
<option value="30">Montana</option>
<option value="31">Nebraska</option>
<option value="32">Nevada</option>
<option value="33">New Hampshire</option>
<option value="34">New Jersey</option>
<option value="35">New Mexico</option>
<option value="36">New York</option>
<option value="37">North Carolina</option>
<option value="38">North Dakota</option>
<option value="39">Ohio</option>
<option value="40">Oklahoma</option>
<option value="41">Oregon</option>
<option value="42">Pennsylvania</option>
<option value="43">Puerto Rico</option>
<option value="44">Rhode Island</option>
<option value="45">South Carolina</option>
<option value="46">South Dakota</option>
<option value="47">Tennessee</option>
<option value="48">Texas</option>
<option value="49">Utah</option>
<option value="50">Vermont</option>
<option value="51">Virgin Islands</option>
<option value="52">Virginia</option>
<option value="53">Washington</option>
<option value="54">West Virginia</option>
<option value="55">Wisconsin</option>
<option value="56">Wyoming</option></select> &nbsp;&nbsp;&nbsp; <span id="invalidBillingstate" style="color: red">
                                                </span></td>
                                              </tr>
                                              <tr>
                                                <td class="table_text"><font class="mandatory_astric_red"> * </font> Zip</td>
                                                <td class="table_text"></td>
                                              </tr>
                                              <tr>
                                                <td class="table_text" colspan="2"><input type="text" name="billingZip" maxlength="10" size="30" value="" id="billingZip" class="table_form">
                                                &nbsp;&nbsp;&nbsp; <span id="invalidBillingzip" style="color: red"> </span></td>
                                              </tr>
                                              <tr>
                                                <td class="table_text" colspan="3"><input type="checkbox" name="saveBillingAddress" value="on" id="saveBillingAddress"> Save this address for future use</td>
                                              </tr>
                                              <tr>
                                                <td class="table_text">Name this address</td>
                                                <td class="table_text" colspan="2"></td>
                                              </tr>
                                              <tr>
                                                <td class="table_text" colspan="2"><input type="hidden" id="isActive" value="0"> <input type="text" name="billingAddressNickName" maxlength="20" size="30" value="" onblur="checkAddressName()" id="billingAddressNickName" class="table_form">
                                                &nbsp;&nbsp;&nbsp; <span id="invalidBillingaddressNickName" style="color: red"></span> <span id="duplicateBillingaddressNickName" style="color: red"></span></td>
                                              </tr>
                                            </tbody></table>
                                            </div>
                                            </td>
                                          </tr>

                                        </tbody></table>
                                        </div>
                                        </td>
                                      </tr>
                                    </tbody></table>
```

https://is.breezecard.com/marta/breezeCardAction.do?dispatchTo=reviewOrderDetails&tabLocation=reviewOrderDiv&isExistingCard=no&isActive=0&isExistingBillingAddress=yes

```html

<table width="98%" border="0" align="center" cellpadding="0" cellspacing="0">
                                                    <tbody><tr>
                                                      <td class="table_grid_main_head">
                                                        Review Order Details
                                                      </td>
                                                    </tr>
                                                    <tr>
                                                      <td class="table_grid_even" colspan="3">
                                                        <table width="98%" border="0" align="center" cellpadding="2" cellspacing="2">
                                                          <tbody><tr>
                                                            <td colspan="3" class="table_text">
                                                              &nbsp;
                                                            </td>
                                                          </tr>
  
                                                          <tr>
                                                            <td class="table_text" colspan="3">
                                                              Please review your order details below and click <b>Confirm and Pay</b> to complete your order.
                                                            </td>
                                                          </tr>
  
                                                          <tr>
                                                            <td class="table_text" style="font-weight: bold;" colspan="3">
                                                              Billing Information:
                                                              &nbsp;&nbsp;
                                                            </td>
  
                                                          </tr>
                                                          <tr>
                                                            <td class="table_text" width="40%" colspan="3">
                                                              
                                                                
                                                                
                                                                Charles Knight
                                                                <br>
                                                                
                                                                
                                                                330 Valley Green Dr 
                                                                <br>
                                                                    
                                                                
                                                                
                                                                Atlanta,
                                                                
                                                                
                                                                
                                                                Georgia
                                                                    
                                                                
                                                                30342
                                                                <br>
                                                                                            
                                                                  <a href="#" onclick="javascript:modifyDisplayTabData('paymentMethodDiv','295493','showEditAddress','');" title="Edit">Edit </a>&nbsp;
                                                              
                                                            </td>
  
                                                          </tr>
                                                          
  
                                                            
                                                            <tr>
                                                              <td style="font-weight: bold;" class="table_text" colspan="3">
                                                                Breeze Card
                                                                &nbsp;
                                                                
                                                                MyCard-0160 0275 7057 4995 
                                                              
                                                              </td>
                                                            </tr>
                                                            
                                                            
                                                            <tr>
                                                              <td class="table_grid_main_head" width="20%">
                                                                Active Products 
                                                              </td>
                                                              <td class="table_grid_main_head" width="20%">
                                                                Region
                                                              </td>
                                                              <td class="table_grid_main" width="20%" style="text-align: right;">
                                                                Price
                                                                ($)
                                                              </td>
                                                              <td class="table_grid_main" width="20%">
                                                                &nbsp;
                                                              </td>
                                                            </tr>
                                                            
                                                            
                                                            <tr>
                                                              <td class="table_text" width="30%">
                                                                2 Trip
                                                              </td>
                                                              <td class="table_text" width="30%">
                                                                MARTA
                                                              </td>
                                                              <td class="table_text" align="right" width="20%">
                                                                $&nbsp;5.00
                                                              </td>
                                                              <td class="table_text" width="20%">
                                                                <a href="#" onclick="javascript:updateCart('346636_13','removeProduct', 'reviewOrderDiv');" "="" title="Remove">Remove</a>
                                                              </td>
                                                            </tr>
                                                            
                                                            <tr>
                                                              <td class="table_grid_main_head" colspan="4">
                                                                &nbsp;
                                                              </td>
                                                            </tr>
                                                            
                                                          
                                                                                                                  
                                                          <tr>
                                                            <td class="table_text" style="font-weight: bold;" align="left" width="30%">
                                                              Total Amount Due:
                                                            </td>
                                                            <td width="30%">&nbsp;
                                                              </td>
                                                            <td class="table_text" style="font-weight: bold;" align="right" width="40%">
                                                              
                                                                
                                                              $&nbsp;5.00
                                                                
                                                              
                                                            </td>
                                                            <td class="table_text" width="20%">
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td>
                                                              &nbsp;
                                                            </td>
                                                          </tr>
                                                          <tr align="center">
                                                               <td align="left" colspan="3">
                                                                   <font color="#FF0000"><b>Added Funds and Products may not be available for immediate use.</b></font>
                                                               </td>
                                                           </tr>
                                                            <tr align="center">
                                                            <td align="left" colspan="3">
                                                           <font color="#0000FF"><br><br><b>MARTA bus and Mobility van:</b> Allow up to 24 hours<br><b>GRTA Xpress, Gwinnett County Transit and Cobb Community Transit:</b> Allow a <b><u>minimum</u></b> 24-48 hours<br><b>Rail:</b> Available for immediate use</font><br><br><font color="#FF0000">Your order will appear under New Products in your account until you have tapped your Breeze card to load your purchase at a station faregate, vending machine or bus farebox</font>.
                                                           </td>
                                                           </tr>
                                                          <tr align="center">
                                                            <td align="center" colspan="3">
                                                            
                                                              <!-- MARTA UI Review Changes (start)  -->
                                                              
                                                              <script> 
                                                                document.write("<a href='#' onclick='javascript:modifyDisplayTabData(\"paymentMethodDiv\",\"295493\",\"\",\"\");'><img src='"+
                                                                    imageUrl+"btn_back.gif' border='0' alt='Back' title='Back'/></a>");
                                                              </script><a href="#" onclick="javascript:modifyDisplayTabData(&quot;paymentMethodDiv&quot;,&quot;295493&quot;,&quot;&quot;,&quot;&quot;);"><img src="images/buttons/btn_back.gif" border="0" alt="Back" title="Back"></a>
                                                              <!--
                                                              <a href="#" onclick="javascript:modifyDisplayTabData('paymentMethodDiv','295493','','');">
                                                                <img src="images/buttons/previous.gif" alt="Previous" 
                                                                  title="Previous" border="0"/>
                                                              </a>
                                                              -->
                                                              <!--
                                                              <input name="Button" type="button"
                                                                alt="Previous"
                                                                title="Previous"
                                                                class="button"
                                                                onclick="javascript:modifyDisplayTabData('paymentMethodDiv','295493','','');"
                                                                value="Previous" />
                                                              -->
                                                              <script> 
                                                                document.write("<a href='#' onclick='javascript:saveAllCartDetails(\"confirmationDiv\");'><img src='"+
                                                                    imageUrl+"confirm_pay.gif' border='0' alt='Confirm and Pay' title='Confirm and Pay'/></a>");
                                                              </script><a href="#" onclick="javascript:saveAllCartDetails(&quot;confirmationDiv&quot;);"><img src="images/buttons/confirm_pay.gif" border="0" alt="Confirm and Pay" title="Confirm and Pay"></a>
                                                              <!--
                                                              <a href="#" onclick="javascript:saveAllCartDetails('confirmationDiv');">
                                                                <img src="images/buttons/confirm_pay.gif" alt="Confirm and Pay" 
                                                                  title="Confirm and Pay" border="0"/>
                                                              </a>
                                                              -->
                                                              <!--
                                                              <input name="Button" type="button"
                                                                onclick="javascript:saveAllCartDetails('confirmationDiv');"
                                                                class="button"
                                                                value="Confirm and Pay"
                                                                alt="Confirm and Pay"
                                                                title="Confirm and Pay" />
                                                              -->
                                                              <!--
                                                              <SCRIPT> 
                                                                document.write("<a href='#' onclick='javascript:cancelFn();'><img src='"+
                                                                    imageUrl+"cancel.gif' border='0' alt='Cancel' title='Cancel'/></a>");
                                                              </SCRIPT>
                                                              -->
                                                              <a href="#" onclick="javascript:cancelFn();" title="Cancel">
                                                                Cancel
                                                              </a>
                                                              
                                                              <!--
                                                              <input name="Button" type="button" class="button"
                                                                alt="Cancel" 
                                                                title="Cancel" 
                                                                value="Cancel" 
                                                                onclick="javascript:cancelFn();" />
                                                              --> 
                                                              <!-- MARTA UI Review Changes (end)  -->
                                                            
                                                            </td>
                                                          </tr>
                                                          <tr>
                                                            <td>
                                                              &nbsp;
                                                            </td>
                                                            <td class="table_text">
                                                            <font color="#FF0000">DO NOT press the CONFIRM and PAY button more than once or more than one payment will be submitted and charged.</font>
                                                            </td>
                                                          </tr>
  
                                                        </tbody></table>
                                                      </td>
                                                    </tr>
                                                  </tbody></table>
```

