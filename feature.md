## 技术栈

react + redux + react-router + saga + webpack

## 代码截图

- 状态全部交给redux 异步的action全部交给saga 组建采用需要什么状态注入什么状态
 
![image](./10.png)

- 目录结构

![image](./9.png)

## 效果

![image](./11.png)


## 优点和缺点

#### 缺点

- 写法比较繁琐，异步的action写法更加繁琐
- state如果全部交给reducer来管理写法上显的比较繁琐

#### 优点

- 我想要什么数据可以通过connect注入到我需要的组建
- view 层只关注视图 所有的state交给reducer来管理 异步的action交给saga来管理

## 所以

- dva 针对以上这些痛点进行了改良了写法