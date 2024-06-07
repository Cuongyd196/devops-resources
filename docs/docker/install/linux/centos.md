---
sidebar_position: 1
---

# CentOS 7

+ Xóa Docker version cũ trước đó nếu đã cài đặt
```
yum remove docker \
    docker-client \
    docker-client-latest \
    docker-common \
    docker-latest \
    docker-latest-logrotate \
    docker-logrotate \
    docker-engine
```

+ Cài đặt gói yum-utils
```
yum install -y yum-utils
```

+ Config repo:
```
yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```
- Tài liệu cài đặt Docker từ trang chủ Docker:
https://docs.docker.com/engine/install/

+ Cài đặt docker
```
yum install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

+ Khởi động docker khi os reboot
```
sudo systemctl enable docker
```

+ Start docker
```
sudo systemctl start docker
```

+ Restart docker
```
systemctl restart docker
```