---
sidebar_position: 2
---

# Network Basic

Kiến thức về mảng Mạng (Networking) là một cột mốc đặc biệt quan trọng trong hành trình tự học DevOps. Khi vận hành ứng dụng trên các hạ tầng đám mây (AWS, Azure, GCP) hay triển khai các cụm Docker, Kubernetes, bạn sẽ liên tục gặp các bài toán liên quan đến định tuyến, kết nối giữa các microservice, bảo mật tường lửa, và phân tích khắc phục sự cố kết nối mạng.

Dưới đây là tổng hợp các kiến thức cốt lõi và các công cụ mạng thông dụng nhất dành cho DevOps.

---

## 1. Mô hình OSI & TCP/IP rút gọn cho DevOps

Trong thực tế, bạn không cần thuộc lòng mọi lý thuyết khô khan của mô hình 7 tầng OSI, thay vào đó hãy chú ý vào các tầng cốt lõi này tương đương mô hình TCP/IP:

| Tầng OSI | Tầng TCP/IP | Giao thức tiêu biểu | Khái niệm cần chú ý |
| :--- | :--- | :--- | :--- |
| **Layer 7** (Application) | **Application** | HTTP, HTTPS, DNS, SSH, SMTP | Nơi API Hoạt động, Reverse Proxy (Nginx), Load Balancer (ALB) |
| **Layer 4** (Transport) | **Transport** | TCP, UDP | Quản lý Port (Cổng), Kết nối tin cậy (TCP) vs Tốc độ (UDP) |
| **Layer 3** (Network) | **Internet** | IP, ICMP | Địa chỉ IP (IPv4, IPv6), Subnet, Định tuyến (Routing) |

---

## 2. Địa chỉ IP & Chia dải mạng (Subnetting, CIDR)

Trong Cloud (VPC) và Docker Network, bạn sẽ liên tục tạo và định cấu hình các dải mạng bằng ký pháp **CIDR** (Classless Inter-Domain Routing).

### Phân loại Địa chỉ IP (IP Address) cho DevOps
Để quản trị tốt hệ thống, bạn cần phân biệt rõ ràng các loại địa chỉ IP sau:

#### A. IP Private (Nội bộ) vs IP Public (Công cộng)
- **IP Public (Công cộng)**:
  - Là địa chỉ IP duy nhất trên toàn thế giới, được cấp phát bởi tổ chức quốc tế (IANA).
  - Có thể định tuyến trực tiếp trên Internet. Mọi thiết bị trên thế giới đều có thể kết nối tới IP Public này nếu không có tường lửa chặn.
  - Ví dụ: IP máy chủ DNS Google `8.8.8.8`, IP máy chủ Nginx chứa website của bạn: `123.45.67.89`.
- **IP Private (Nội bộ)**:
  - Là địa chỉ IP chỉ có ý nghĩa và giá trị sử dụng trong mạng nội bộ (mạng LAN gia đình, văn phòng, mạng nội bộ ảo VPC trên Cloud AWS hay cấu trúc mạng Docker Network).
  - **Không** thể định tuyến trực tiếp ra Internet.
  - Theo tiêu chuẩn RFC 1918, các dải IP Private bao gồm:
    - **`10.0.0.0` - `10.255.255.255`** (Dùng nhiều cho doanh nghiệp lớn, mạng Cloud ảo)
    - **`172.16.0.0` - `172.31.255.255`** (Docker Compose, VPC vừa)
    - **`192.168.0.0` - `192.168.255.255`** (Mạng gia đình, VPN cơ bản)

#### B. IP Static (Tĩnh) vs IP Dynamic (Động)
- **IP Dynamic (IP Động)**:
  - Địa chỉ IP tự động thay đổi sau mỗi lần thiết bị khởi động lại hoặc sau một chu kỳ thuê IP nhất định.
  - Thường được cấp phát tự động bởi giao thức **DHCP** (Dynamic Host Configuration Protocol).
  - Thích hợp cho các thiết bị cá nhân (điện thoại, laptop) để tiết kiệm tài nguyên dải IP.
- **IP Static (IP Tĩnh)**:
  - Địa chỉ IP được cấu hình cố định thủ công bởi quản trị viên hệ thống hoặc gán cố định trên Cloud (như Elastic IP trên AWS) và **không bao giờ thay đổi**.
  - Bắt buộc áp dụng cho các máy chủ dịch vụ (Web Server, Database, DNS, Mail Server...) để đảm bảo các thiết bị khách (Client) hay tên miền (DNS) luôn luôn tìm thấy máy chủ tại một địa chỉ cố định.

---

## 3. Kỹ thuật biên dịch địa chỉ mạng (NAT - Network Address Translation)

Do số lượng địa chỉ IPv4 là có hạn ($2^{32} \approx 4.3$ tỷ địa chỉ) và không đủ cho tất cả thiết bị trên thế giới kết nối Internet trực tiếp, **NAT** ra đời như một giải pháp cứu cánh quan trọng.

### NAT hoạt động như thế nào?
- **NAT** hoạt động giống như một "Lễ tân" tại một tòa nhà văn phòng lớn. Tòa nhà chỉ có 1 số điện thoại đại diện duy nhất ngoài Internet (**IP Public**), nhưng bên trong tòa nhà có hàng trăm nhân viên với các số máy lẻ khác nhau (**IP Private**).
- Khi một máy tính trong mạng nội bộ (VD: IP `192.168.1.10`) muốn truy cập trang web `google.com`:
  1. Gói tin đi qua Router (thiết bị chạy NAT).
  2. Router thay thế IP nguồn `192.168.1.10` (IP Private) thành IP Public của chính nó (VD: `203.0.113.50`), đồng thời ghi nhớ yêu cầu này vào một bảng đối chiếu (**NAT Translation Table**).
  3. Gói tin được gửi đến Google dưới dạng xuất phát từ đầu IP Public `203.0.113.50`.
  4. Khi Google phản hồi về đầu `203.0.113.50`, Router sẽ tra cứu bảng đối chiếu và chuyển hướng chính xác gói tin phản hồi đó về máy `192.168.1.10` trong phòng LAN.

### Ứng dụng NAT trong DevOps:
- **NAT Gateway (trong AWS Cloud)**: Cho phép các máy chủ database chạy ở vùng mạng nội bộ (Private Subnet) được phép tải các bản cập nhật phần mềm từ Internet về một cách an toàn mà vẫn ngăn chặn tuyệt đối bên ngoài tự kết nối trực tiếp vào database.
- **Docker Port Forwarding**: Khi bạn khởi chạy một container Docker với tham số `-p 8080:80`, Docker đang thực chất cấu hình một rule **NAT (DNAT - Destination NAT)** trên tường lửa iptables của máy chủ Linux để chuyển đổi toàn bộ traffic đi vào IP Public của máy chủ ở cổng `8080` trỏ thẳng vào IP Private của Container ở cổng `80`.

---

## 4. Hiểu về CIDR:
Ví dụ dải IP: `192.168.1.0/24`
- `/24` nghĩa là **Subnet Mask** có 24 bit số 1 (`255.255.255.0`).
- Số lượng IP khả dụng trong dải mạng bằng: $2^{(32 - 24)} = 2^{8} = 256$ IP (Địa chỉ thực tế sử dụng được sẽ là 254 IP, trừ IP đại diện dải mạng `.0` và IP quảng bá Broadcast `.255`).
- Tương tự `/16` đại diện cho $2^{16} = 65,536$ IP.

---

## 5. Hoạt động của DNS (Domain Name System)

DNS giống như một danh bạ điện thoại của internet giúp chuyển đổi tên miền dễ nhớ (như `devops.cuongit.net`) thành địa chỉ IP máy chủ mà máy tính có thể hiểu được.

Các loại bản ghi DNS (DNS Records) cần biết:
- **A Record**: Bản ghi ánh xạ trực tiếp tên miền sang địa chỉ **IPv4** (VD: `cuongit.net` -> `123.45.67.89`).
- **AAAA Record**: Bản ghi ánh xạ tên miền sang địa chỉ **IPv6**.
- **CNAME**: Bản ghi trỏ tên miền phụ này tới tên miền chính khác (VD: `devops.cuongit.net` -> `Cuongyd196.github.io`).
- **TXT Record**: Thường dùng để xác thực quyền sở hữu tên miền (VD: Cấu hình SPF, DKIM cho Email bảo mật).

---

## 6. Các lệnh kiểm tra và xử lý sự cố Mạng thường gặp

Khi kiểm tra một dịch vụ trên Server không hoạt động hoặc không gọi được sang dịch vụ khác, hãy sử dụng chuỗi lệnh sau tuần tự để cô lập lỗi:

### Bước 1: Kiểm tra kết nối vật lý & định tuyến máy chủ (`Ping`)
Sử dụng giao thức ICMP để kiểm tra xem máy chủ đích có phản hồi hay không:
```bash
ping devops.cuongit.net
```
*(Lưu ý: Một số hệ thống cài đặt tường lửa chặn gói tin ICMP, dẫn đến ping không phản hồi mặc dù dịch vụ web bên trong vẫn chạy bình thường).*

### Bước 2: Kiểm tra Phân giải tên miền (`nslookup` hoặc `dig`)
Kiểm tra xem máy tính của bạn đã phân giải đúng tên miền hay chưa:
```bash
nslookup devops.cuongit.net
# Hoặc lệnh nâng cao chi tiết hơn trên Linux:
dig devops.cuongit.net
```

### Bước 3: Kiểm tra Cổng (Port) dịch vụ đang mở (`telnet` hoặc `nc`)
Kiểm tra xem dịch vụ ở máy đích đã mở cổng kết nối hay chưa (ví dụ cổng HTTP `80`, HTTPS `443` hoặc Database PostgreSQL `5432`):
```bash
# Kiểm tra cổng 443 bằng nc (Netcat) của Linux
nc -zv devops.cuongit.net 443

# Sử dụng telnet
telnet devops.cuongit.net 443
```

### Bước 4: Kiểm tra phản hồi ứng dụng trực tiếp (`curl`)
Lệnh gọi HTTP Request cực mạnh dành cho DEV & DevOps để kiểm tra máy chủ web phản hồi mã trạng thái (Status Code) là gì:
```bash
# Gọi và hiển thị chi tiết Header phản hồi từ máy chủ
curl -I https://devops.cuongit.net

# Gọi bỏ qua xác thực SSL (khi dùng SSL tự tạo thử nghiệm)
curl -k https://localhost:8443
```

### Bước 5: Xem các port đang lắng nghe trên chính Máy chủ của bạn (`netstat` hoặc `ss`)
Xem có dịch vụ nào đang sử dụng cổng mạng nào trên máy chủ Linux hiện tại của bạn:
```bash
# Hiển thị các port đang lắng nghe (Listening) dạng số kèm thông tin tiến trình sử dụng port đó
sudo ss -tulnp
# Hoặc lệnh netstat cũ hơn:
sudo netstat -tulnp
```
*Ý nghĩa các tham số của `ss`/`netstat`: `-t` (tcp), `-u` (udp), `-l` (listening), `-n` (numeric ports), `-p` (process).*

---

*Tài liệu tự học được tổng hợp bởi **CuongIT** tại [devops.cuongit.net](https://devops.cuongit.net).*