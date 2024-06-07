---
sidebar_position: 1
---
# Html-basic

- Các kiến thức về Html cơ bản và các ví dụ mẫu
# Các thẻ html cơ bản và ví dụ
### 1.Thẻ h1 đến h6: Được sử dụng để định dạng tiêu đề với mức độ ưu tiên giảm dần.
```sh
<h1>Đây là tiêu đề cấp 1</h1>
<h2>Đây là tiêu đề cấp 2</h2>
```
Live code:
<h1>Đây là tiêu đề cấp 1</h1>
<h2>Đây là tiêu đề cấp 2</h2>


### 2. Thẻ p: Được sử dụng để định dạng đoạn văn bản.
```sh
<p>Đây là đoạn văn bản</p>
```
Live code:
<p>Đây là đoạn văn bản</p>

### 3.Thẻ a: Được sử dụng để tạo liên kết.
```sh
<a href="https://www.w3schools.com/html/">Đây là liên kết</a>
```
Live code:
<a href="https://www.w3schools.com/html/">Đây là liên kết</a>

### 4. Thẻ img: Được sử dụng để hiển thị hình ảnh.
```sh
<img src="https://www.w3schools.com/html/pic_trulli.jpg" alt="Trulli" width="500" height="333">
```
Live code:

![alt image](https://www.w3schools.com/html/pic_trulli.jpg)
### 5. Thẻ table: Được sử dụng để tạo bảng.
```sh
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```
Live code:
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>

#### 5.1 Table với rowspan 
```sh
<table>
  <tr>
    <th>Name</th>
    <th colspan="2">Telephone</th>
  </tr>
  <tr>
    <td rowspan="2">Bill Gates</td>
    <td>55577854</td>
    <td>55577855</td>
  </tr>
  <tr>
    <td>55577856</td>
    <td>55577857</td>
  </tr>
</table>
```
Live code:
<table>
  <tr>
    <th>Name</th>
    <th colspan="2">Telephone</th>
  </tr>
  <tr>
    <td rowspan="2">Bill Gates</td>
    <td>55577854</td>
    <td>55577855</td>
  </tr>
  <tr>
    <td>55577856</td>
    <td>55577857</td>
  </tr>
</table>

#### 5.2. Table với colspan
```sh
<table>
  <tr>
    <th>Name:</th>
    <td>Bill Gates</td>
  </tr>
  <tr>
    <th rowspan="2">Telephone:</th>
    <td>55577854</td>
  </tr>
  <tr>
    <td>55577855</td>
  </tr>
</table>
```
Live code:
<table>
  <tr>
    <th>Name:</th>
    <td>Bill Gates</td>
  </tr>
  <tr>
    <th rowspan="2">Telephone:</th>
    <td>55577854</td>
  </tr>
  <tr>
    <td>55577855</td>
  </tr>
</table>

