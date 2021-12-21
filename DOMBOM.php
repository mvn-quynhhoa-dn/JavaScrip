<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    
</head>
<body>
    <style>
        
       main{
          padding-left: 300px;
        }
           
        .container{
            max-width: 100%;
            max-height: 100%;
            padding: 0;
            margin: 0;
        }
         td {
            border: 1px solid black;
        }
        th {
            border: 1px solid black;
        }
    </style>
<form action="" method="GET">  <!--là 1 form tạo biểu mẫu cho đầu vào của html  -->

    <div class="container">  <!--xác định một phần trong trang  -->
   
      
    <main >
    <div class="form-bang" >
        <table class="bang"  id="product-list">
            <thead>   <!--nhóm nội dung lại trong bảng  -->

                <tr>
                    <td>id </td>
                    <td>sản phẩm</td>
                    <td>khuyến mãi</td>
                    
                    <td> chức năng   </td>
                    
                </tr>
            </thead>
            <tbody id="body-table">  <!--nhóm nội dung lại trong bảng  -->
            <tfoot>  <!--nhóm nội dung lại trong bảng  -->
                <tr>
                    <th> </th>
                    <th> </th>
                    <th> </th>
                    
                    <th></th>
                  
                </tr>
            </tfoot>
            </tbody>
        </table>
        <br>
        </div>
               
       
    </main>
</div>
</form>
<script>
   
    
    let hienthi = [
        {
            id:'01',
            sanpham:'máy tính',
            khuyenmai:'20%',
         //   xuly:'<button class="" id="btn-x">XOÁ</button>'
            
            
        },
        {
            id:'02',
            sanpham:'điện thoại',
            khuyenmai:'20%',
         //   xuly:'<button class="" id="btn-x">XOÁ</button>'
        },
        {
            id:'03',
            sanpham:'TIVI',
            khuyenmai:'10%',
        //    xuly:'<button class="" id="btn-x">XOÁ</button>'
           
        }
        
    ]
    localStorage.setItem('hienthi',JSON.stringify(hienthi));
    
   
    for (let i=0; i<hienthi.length; i++){

    
    let trElement =document.createElement("tr")

    let tdElement1=document.createElement("td")
    tdElement1.innerHTML=hienthi[i].id

    let tdElement2=document.createElement("td")
    tdElement2.innerHTML=hienthi[i].sanpham
    
    let tdElement3=document.createElement("td")
    tdElement3.innerHTML=hienthi[i].khuyenmai

    let tdElement4=document.createElement("td")
    tdElement4.innerHTML = '<button onclick="Delete(' + hienthi[i].id + ')" >XOÁ</button>';

    

    trElement.appendChild(tdElement1)
    trElement.appendChild(tdElement2)
    trElement.appendChild(tdElement3)
    trElement.appendChild(tdElement4)

    let tdBody = document.getElementById("body-table")
    tdBody.appendChild(trElement)
    
    }

   
</script>
       

   
  
<script>
    var productItem = document.getElementById('btn-x');
    
    productItem.addEventListener('click', function(){
      //  alert('bạn có muốn xoá không');
        window.confirm("bạn có muốn xoá không");
       
    });
</script>
</body>
</html>