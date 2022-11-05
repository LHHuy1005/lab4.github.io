function handleLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    users.forEach((user) => {
      if (user.username == username && user.password == password) {
        alert("dang nhap thanh cong");
        switch (user.chucvu) {
            case "giangvien":
                window.location.href = "./giangvien.html"
                break;
        
            case "giangvien":
                window.location.href = "./giangvien.html"
                break;
            
            case "giangvien":
                window.location.href = "./giangvien.html"
                break;    
        }
      }
    });
  }

  var users = [
    {
        "chucvu": "giangvien",
        "username": "lhhuy1",
        "password": "1005"
    },
    {
        "chucvu": "giaovu",
        "username": "lhhuy2",
        "password": "1005"
    },
    {
        "chucvu":"sinhvien",
        "username":"lhhuy3",
        "password":"1005"
    }
   ]
