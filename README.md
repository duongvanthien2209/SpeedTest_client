# SpeedTest_client
## Demo Live
* Live App tại [Surge](http://typing-speed.surge.sh)
* Live API tại [Heroku](https://typing-speed-3324.herokuapp.com)
## Link Server
[SpeedTest_server](https://github.com/duongvanthien2209/SpeedTest_server)
## Chức năng chính
### Auth
***
* Lưu lại thông tin người dùng
* Kiểm tra người dùng có tồn tại thông qua tên
### Thông tin người dùng
***
* Cập nhật ảnh đại diện
### Post
***
* Thêm người dùng
* Thay đổi ảnh đại diện
* Thêm thành tích của người dùng
* Lấy đoạn văn bản mẫu
* Lấy danh sách 10 người có thành tích cao nhất
* Xem lịch sử của người dùng
### Thông báo
***
* Thông báo khi thêm thông tin thành công
* Thông báo khi có lỗi hệ thống
## Cài đặt cho client
### Install client dependencies
***
`npm install`
### Run React in client
***
`npm start`
### Build for production
*** 
`npm run build`
### Depploy App using Surge
***
#### Cài package Surge ở global
`npm i -g surge`
#### Chuyển tới thư mục build
`cd build`
#### Chạy câu lệnh
* `surge`
* *Ở lần chạy đầu tiên bạn cần phải nhập email và password để tạo tài khoản*
* *Bạn có thể thay đổi domain bằng cách*
* `domain: <project-name>.surge.sh` 
## Thông tin
### Author
***
Van Thien
