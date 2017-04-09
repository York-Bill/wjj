// 这个是小游戏算24的js
<script language="JavaScript">
    function log(str)
    {
     document.write("<br>"+str);
    }

        //生成计算表达式
    function genExpress(exp,a,b,c,d,m1,m2,m3)
    {
     var exp=exp.replace("a",a);
     exp=exp.replace("b",b);
     exp=exp.replace("c",c);
     exp=exp.replace("d",d);
     exp=exp.replace("m1",m1);
     exp=exp.replace("m2",m2);
     exp=exp.replace("m3",m3);
     return exp;
    }
    
    
    var answer = new Array();                              //正确答案的表达式
    var counter = 0;//答案的个数
    
    //测试表达式是否正确
	  function test(expn,a,b,c,d,m1,m2,m3)
    {
     var exp;
     var ret;
     exp = genExpress(expn,a,b,c,d,m1,m2,m3);              //生成计算表达式
     eval("ret = "+exp);
     if ( ret - 24 < 0.1 && ret - 24 >= 0 )
     {
      exp = exp.replace(";","");
      exp = replaceAll(exp,"*","×");
      exp = replaceAll(exp, "/","÷");
      var have = false;
      for ( var i=0; i<counter; i++)
      {
           if ( exp == answer[i] )
   {
        have = true;
        break;
       }
      }
      if ( !have )
      {
       answer[counter] = exp;
       counter++;
       log("<font color=red><b>"+counter+":&nbsp;&nbsp;"+exp+"</b></font>");
      }
     }
    }
    
    function replaceAll (streng, soeg, erstat)
    {
     var st = streng;
     if (soeg.length == 0)
      return st;
     var idx = st.indexOf(soeg);
     while (idx >= 0)        
     {  
      st = st.substring(0,idx) + erstat + st.substr(idx+soeg.length);
      idx = st.indexOf(soeg);
     }
     return st;
    }

        var n = new Array();//四个数字
    
    //接收四个输入框的数字，调用主程序
    function funCount()
    {
     n[0] = document.forms[0].fa.value;
     n[1] = document.forms[0].fb.value;
     n[2] = document.forms[0].fc.value;
	 n[3] = document.forms[0].fd.value;
     if ( n[0] > 0 && n[1] > 0 && n[2] > 0 && n[3] > 0 && n[0] < 14 && n[1] < 14 && n[2] < 14 && n[3] < 14 )
     {
      log("<font size=5><b>"+n[0]+", "+n[1]+", "+n[2]+", "+n[3]+"的24点答案：</b></font><br>");
      log("<input type='button' onclick='history.back(-1);' value=' 再来一次 '><br>");
      funMain();
      if ( counter == 0 )
      {
       log("没有答案！");
      }
     }
     else
     {
      alert("输入错误！");
     }
    }
    
    //主程序
    function funMain()
    {
        var m = new Array();
        m[0] = "+";
        m[1] = "-";
        m[2] = "*";
        m[3] = "/";
        
     //11种表达式
        var exp1 = "a m1 b m2 c m3 d;";
        var exp2 = "(a m1 b) m2 c m3 d;";
        var exp3 = "(a m1 b m2 c) m3 d;";
        var exp4 = "((a m1 b) m2 c) m3 d;";
        var exp5 = "(a m1 (b m2 c)) m3 d;";
        var exp6 = "a m1 (b m2 c) m3 d;";
        var exp7 = "a m1 (b m2 c m3 d);";
        var exp8 = "a m1 ((b m2 c) m3 d);";
		var exp9 = "a m1 (b m2 (c m3 d));";
        var exp10 = "a m1 b m2(c m3 d);";
        var exp11 = "(a m1 b) m2 (c m3 d);";
        
        var a,b,c,d;
        var m1,m2,m3;
        
        for (var i=0;i<4;i++)
        {
         a = n[i];
         for (var j=0;j<4;j++)
         {
       if ( i == j ) break;
          b = n[j];
          for (var x=0;x<4;x++)
          {
        if ( j == x ) break;
           c = n[x];
           for (var y=0;y<4;y++)
           {
         if ( x == y ) break;
            d = n[y];
        
            for (var ta=0;ta<4;ta++)
            {
             m1 = m[ta];      
             for (var tb=0;tb<4;tb++)
             {
              m2 = m[tb];      
              for (var tc=0;tc<4;tc++)
              {
               m3 = m[tc];    
               for (var k=1;k<11;k++)
               {
                eval("test(exp"+k+",a,b,c,d,m1,m2,m3);");
               }
              }
             }
            }
           }
          }
         }
        }
    }
    </script>