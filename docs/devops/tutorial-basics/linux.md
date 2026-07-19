---
sidebar_position: 1
---

# Linux

Hệ điều hành Linux là nền tảng cốt lõi của gần như toàn bộ hạ tầng DevOps, Cloud và hệ thống máy chủ hiện nay. Dưới đây là hướng dẫn từ cơ bản đến quản trị hệ thống Linux thực tế.

---

## 1. Cài đặt hệ điều hành Ubuntu bằng máy ảo VirtualBox

Để bắt học và làm quen với hệ điều hành Linux một cách an toàn mà không làm ảnh hưởng đến hệ điều hành Windows mặc định trên máy tính của bạn, việc cài đặt bản phân phối **Ubuntu** (khuyên dùng bản **Ubuntu Server** hoặc **Ubuntu Desktop**) trên máy ảo **VirtualBox** là lựa chọn tối ưu nhất.

Dưới đây là video hướng dẫn chi tiết từng bước:
- Cách tải và cài đặt phần mềm VirtualBox.
- Cách tải file ISO Ubuntu chuẩn.
- Các bước tạo cấu hình máy ảo, thiết lập ổ cứng ảo, RAM cùng mạng cơ bản để kết nối internet.
- Quy trình cài đặt hệ điều hành và thiết lập tài khoản quản trị đầu tiên.

👉 **Xem video hướng dẫn chi tiết tại đây:** [Hướng dẫn cài đặt Ubuntu trên VirtualBox (YouTube)](https://www.youtube.com/watch?v=mT9-YBZV89g)

---

## 2. Các lệnh quản lý file & thư mục thông dụng

Khi làm việc với Terminal (giao diện dòng lệnh) trên Linux, đây là những câu lệnh căn bản mà bạn bắt buộc phải nằm lòng:

- `pwd`: Hiển thị đường dẫn thư mục hiện tại của bạn.
- `ls -la`: Liệt kê tất cả các file và thư mục (gồm cả file ẩn bắt đầu bằng dấu `.`) kèm chi tiết quyền hạn, kích thước, chủ sở hữu.
- `cd <path>`: Di chuyển đến thư mục mong muốn.
- `mkdir -p <dir>`: Tạo thư mục mới (tham số `-p` giúp tự động tạo các thư mục cha nếu chưa có).
- `touch <filename>`: Tạo nhanh một file trống.
- `cp -r <source> <dest>`: Sao chép file hoặc thư mục (tham số `-r` dùng cho thư mục).
- `mv <source> <dest>`: Di chuyển hoặc đổi tên file, thư mục.
- `rm -rf <path>`: Xóa vĩnh viễn file hoặc thư mục (Cực kỳ cẩn thận với lệnh này!).

---

## 3. Phân quyền trong Linux (Permissions)

Mỗi file/thư mục trong Linux có 3 đối tượng sở hữu: **U**ser (Chủ sở hữu), **G**roup (Nhóm sở hữu), **O**ther (Người dùng khác). 
Có 3 quyền cơ bản: Read (`r` = 4), Write (`w` = 2), Execute (`x` = 1).

### Ví dụ phân tích phân quyền:
```bash
-rwxr-xr-- 1 admin admin 1024 Jul 19 09:00 deploy.sh
```
- `rwx` (7): Chủ sở hữu (`admin`) có đầy đủ quyền Đọc, Ghi, Thực thi.
- `r-x` (5): Nhóm (`admin`) có quyền Đọc và Thực thi.
- `r--` (4): Những người dùng khác chỉ có quyền Đọc.

### Lệnh gán và phân quyền:
- `chmod 755 script.sh`: Phân quyền thực thi cho file shell script (User: rwx, Group: rx, Other: rx).
- `chown nginx:nginx /var/www/html`: Đổi chủ sở hữu và nhóm sở hữu của thư mục sang user `nginx`.

---

## 4. Quản lý tiến trình (Process Management)

DevOps thường xuyên phải quản lý và giám sát các ứng dụng chạy ngầm trên máy chủ:

- `ps aux` hoặc `top` / `htop`: Theo dõi danh sách các tiến trình đang hoạt động trong thời gian thực.
- `kill -9 <PID>`: Buộc dừng tắt ngay lập tức một tiến trình qua ID (PID).
- `df -h`: Kiểm tra dung lượng đĩa cứng đã dùng và còn trống.
- `free -m`: Kiểm tra thông số bộ nhớ RAM khả dụng (tính bằng MB).

---

## 5. Quản lý dịch vụ với Systemd (Systemctl)

Hầu hết các bản phân phối Linux hiện đại (CentOS, Ubuntu, Debian) đều sử dụng `systemd` làm trình quản lý hệ thống:

```bash
# Khởi động dịch vụ Nginx
sudo systemctl start nginx

# Dừng dịch vụ Nginx
sudo systemctl stop nginx

# Khởi động lại dịch vụ khi thay đổi cấu hình
sudo systemctl restart nginx

# Cho phép Nginx tự động khởi động cùng hệ thống (Enable)
sudo systemctl enable nginx

# Kiểm tra trạng thái hoạt động của dịch vụ
sudo systemctl status nginx
```

---

## 6. Xem Log & Khắc phục sự cố (Troubleshooting)

Kỹ năng đọc log là kỹ năng quan trọng nhất của một DevOps Engineer khi hệ thống xảy ra lỗi ứng dụng:

- `tail -f /var/log/nginx/error.log`: Theo dõi log lỗi của Nginx cập nhật theo thời gian thực (real-time stream).
- `journalctl -u docker.service -n 50 --no-pager`: Xem 50 dòng log gần nhất của dịch vụ Docker quản lý bởi `systemd`.
- `grep -i "error" app.log`: Tìm kiếm không phân biệt chữ hoa chữ thường từ khóa "error" trong tệp log ứng dụng.

---

## 7. Lập lịch tác vụ tự động với CronJob

Để thiết lập sao lưu dữ liệu, dọn dẹp log cũ hàng ngày, bạn sử dụng Cron:

Sử dụng lệnh `crontab -e` để mở giao diện cấu hình lập lịch:

Cú pháp chuẩn của Cron:
```text
* * * * * <lệnh_thực_thi>
- - - - -
| | | | |
| | | | ----- Ngày trong tuần (0 - 7) (Chủ nhật là 0 hoặc 7)
| | | ------- Tháng (1 - 12)
| | --------- Ngày trong tháng (1 - 31)
| ----------- Giờ (0 - 23)
------------- Phút (0 - 59)
```

**Ví dụ:** Chạy file shell script sao lưu database vào lúc **2:30 sáng** mỗi ngày:
```text
30 2 * * * /bin/bash /opt/backup.sh
```

---

*Tài liệu tự học được tổng hợp bởi **CuongIT** tại [devops.cuongit.net](https://devops.cuongit.net).*
