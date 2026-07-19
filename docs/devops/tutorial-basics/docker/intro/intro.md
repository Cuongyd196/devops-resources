---
sidebar_position: 1
---

# Giới thiệu

## Về DevOps
DevOps là một phương pháp để phát triển phần mềm, nó kết hợp giữa các quy trình, công cụ và các nhóm phát triển phần mềm (Dev) và nhóm vận hành (Ops) thành một quy trình liên tục, linh hoạt và có thể lặp lại. DevOps giúp các nhóm phát triển phần mềm và vận hành phần mềm có thể cung cấp các sản phẩm và dịch vụ nhanh hơn, đáng tin cậy hơn và có thể lặp lại hơn.

## Về docker
Docker là một nền tảng phần mềm được sử dụng để xây dựng, vận chuyển và chạy các ứng dụng. Docker cho phép bạn tách ứng dụng khỏi cơ sở hạ tầng của nó để có thể nhanh chóng vận hành phần mềm. Với Docker, bạn có thể cung cấp và cập nhật các ứng dụng nhanh hơn, đáng tin cậy hơn và có thể lặp lại hơn, giúp bạn chuyển giao các ứng dụng nhanh hơn.

Docker sử dụng công nghệ container để triển khai ứng dụng.

### Container là gì?
Container là một gói phần mềm tiêu chuẩn mà chứa tất cả các phần mềm cần thiết để chạy ứng dụng, bao gồm các thư viện, các biến môi trường, các công cụ hệ thống và các mã thực thi. Container giúp bạn có thể phân tách ứng dụng của mình khỏi cơ sở hạ tầng của nó, giúp bạn có thể triển khai các ứng dụng của mình nhanh hơn, đáng tin cậy hơn và có thể lặp lại hơn.
![container](https://www.docker.com/wp-content/uploads/2021/11/docker-containerized-appliction-blue-border_2.png)
### Container và máy ảo khác nhau như thế nào?
Máy ảo (VM) và container đều là các công nghệ ảo hóa, nhưng chúng có một số điểm khác biệt quan trọng. Máy ảo ảo hóa phần cứng máy chủ, trong khi container ảo hóa phần mềm của máy chủ của nó. Container chia sẻ nhân hệ điều hành của máy chủ, trong khi máy ảo có hệ điều hành riêng của nó. Vì vậy, container có thể chạy trên bất kỳ máy chủ nào mà không cần phải cài đặt hệ điều hành, trong khi máy ảo cần phải cài đặt hệ điều hành. Container cũng nhẹ hơn và nhanh hơn máy ảo, vì vậy bạn có thể chạy nhiều container hơn trên một máy chủ hơn là chạy nhiều máy ảo trên một máy chủ.
![container-vs-vm](https://www.docker.com/wp-content/uploads/2021/11/docker-containerized-and-vm-transparent-bg.png)
Nguồn: https://www.docker.com/resources/what-container


### Lợi ích khi sử dụng docker
- **Tính di động**: Docker cho phép các ứng dụng và các dịch vụ có thể được đóng gói thành các container, các container này có thể được di chuyển giữa các môi trường máy tính, các môi trường máy chủ, các môi trường cloud một cách dễ dàng.
- **Tính nhất quán**: Docker giúp đảm bảo rằng ứng dụng của bạn sẽ chạy đúng như bạn mong đợi nó chạy, bất kể môi trường nào nó được triển khai.
- **Tính cô lập**: Docker giúp bạn có thể kiểm soát các tài nguyên của mình một cách chặt chẽ hơn, giúp bạn có thể chạy nhiều container trên một máy chủ mà không lo lắng về sự xung đột về tài nguyên.
- **Tính hiệu quả**: Docker giúp bạn tiết kiệm thời gian và tiền bạc khi xây dựng, triển khai và chạy các ứng dụng của mình. Docker giúp bạn có thể triển khai nhanh hơn, chạy nhanh hơn và cung cấp các dịch vụ của mình nhanh hơn.
- **Tính bảo mật**: Docker giúp bạn có thể cô lập các ứng dụng của mình trong các container riêng biệt, giúp bạn có thể kiểm soát các tài nguyên của mình một cách chặt chẽ hơn, giúp bạn có thể chạy nhiều container trên một máy chủ mà không lo lắng về sự xung đột về tài nguyên.

### Kiến trúc của Docker
![docker-architecture](https://docs.docker.com/get-started/images/docker-architecture.webp)
Nguồn: https://docs.docker.com/get-started/overview/

## Video hướng dẫn về docker cho người mới bắt đầu

<iframe width="560" height="315" src="https://www.youtube.com/embed/0JFK_e1cDFo?si=omDt1bB6deF4G-IW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
