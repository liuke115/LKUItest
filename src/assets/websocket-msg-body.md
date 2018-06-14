#                           GISTACK WEBSOCKET 消息结构

## 消息体主题结构

 websocket 消息的协议体为JSON，具体说明如下：

```javascript
{
    "id": "", //消息的ID，目前为空
    "userId": [ //用户的ID，字符串数组，一次可以发送给多个用户
        "0001"
    ],
    "createTime": "2018-05-29 15:37:39", //消息创建时间
    "type": "GISTACK_LICENCE_EXPIRED", //消息类型 详见消息类型说明
    "msg": {// 消息体，不同的消息类型对应不同的消息体，参见消息类型说明，此处为授权到期通知消息
        "expireDate": "2018-05-29 15:37:39", //授权到期日期
        "timeLeft": 10,             //还剩余时间
     }
}
```



## 消息类型说明

- GISTACK_LICENCE_EXPIRED     系统授权到期提醒

  **系统管理员** 登录时，会针对当前GISTACK 系统的授权进行检查，如果当前授权截止时间与当前系统时间相差为10（暂定）天以内，在登录后会推送一个系统授权时间即将到期的消息，消息体示例如下：

```javascript
{
    "id": "",
    "userId": [
        "0001"
    ],
    "createTime": "2018-05-29 15:37:39",
    "type": "GISTACK_LICENCE_EXPIRED",
    "msg": {
        "expireDate": "2018-05-29 15:37:39",
        "timeLeft": 10,
     }
}
```





- ARCGIS_LICENCE_EXPIRED  ArcGIS授权到期提醒

  **系统管理员**登录时，会针对当前上传的ArcGIS授权进行检查，如果当前授权截止时间与当前系统时间相差为10（暂定）天以内，在登录后会推送一个ArcGIS授权时间即将到期的消息，消息体示例如下：

```javascript
{
    "userId": [
        "33d6b47c-5226-41cb-b909-2b6347c6ba76"
    ],
    "createTime": "2018-06-12 14:55:28",
    "type": "ARCGIS_LICENCE_EXPIRED",
    "msg": [ //显示多个ArcGIS授权到期信息
        {
            "expireDate": "2018-06-12 14:55:28",
            "timeLeft": 10,
            "resourceName": "test-10.6.1" //授权文件名+版本号
        },
        {
            "expireDate": "2018-06-12 14:55:28",
            "timeLeft": 4,
            "resourceName": "test1-10.6.1"
        }
    ]
}
```

- NORMAL_USER_SITE_LEASE_EXPIRED  普通用户站点到期提醒

  普通用户登录时，会检查该用户申请租用的所有站点是否离租用到期时间是否小于设置的阈值（10天），登录完成后会推送站点租用快到期的提醒消息，消息体如下：
```javascript
{
    "userId": [
        "33d6b47c-5226-41cb-b909-2b6347c6ba76"
    ],
    "createTime": "2018-06-12 14:55:28",
    "type": "NORMAL_USER_SITE_LEASE_EXPIRED",
    "msg": [ //显示多个站点授权到期信息
        {
            "expireDate": "2018-06-12 14:55:28",
            "timeLeft": 10,
            "resourceName": "sitename"
        },
        {
            "expireDate": "2018-06-12 14:55:28",
            "timeLeft": 4,
            "resourceName": "sitename"
        }
    ]
}
```



- NORMAL_USER_SITE_AGS_LICENSE_EXPIRED  普通用户站点授权到期提醒

  普通管理员登录后检查其租用的站点ArcGIS 授权是否快到期，消息体如下:



  ```javascript
  {
      "userId": [
          "33d6b47c-5226-41cb-b909-2b6347c6ba76"
      ],
      "createTime": "2018-06-12 14:55:28",
      "type": "NORMAL_USER_SITE_AGS_LICENSE_EXPIRED ",
      "msg": [
          {
              "expireDate": "2018-06-12 14:55:28",
              "timeLeft": 10,
              "resourceName": "test-10.6.1"
          },
          {
              "expireDate": "2018-06-12 14:55:28",
              "timeLeft": 4,
              "resourceName": "test1-10.6.1"//授权文件名+版本号
          }
      ]
  }
  ```



- NORMAL_USER_DESKTOP_LEASE_EXPIRED 普通用户租用云桌面授权快到期提醒，消息体如下：

  ```javascript
  {
      "userId": [
          "33d6b47c-5226-41cb-b909-2b6347c6ba76"
      ],
      "createTime": "2018-06-12 14:55:28",
      "type": "NORMAL_USER_DESKTOP_LEASE_EXPIRED",
      "msg": [
          {
              "expireDate": "2018-06-12 14:55:28",
              "timeLeft": 10,
              "resourceName": "test-10.6.1"
          },
          {
              "expireDate": "2018-06-12 14:55:28",
              "timeLeft": 4,
              "resourceName": "test1-10.6.1"//授权文件名+版本号
          }
      ]
  }
  ```

- USER_REGISTER 用户注册事件

  1.  用户完成注册后，向所属组织所有在线管理员推送待审核用户消息。

  2. 组织管理员登录时，查询当前是否有未进行审核的注册用户，如果有推送消息。

     消息体如下：

     ```javascript
     {
         "userId": [
             "0001"
         ],
         "createTime": "2018-06-12 16:35:37",
         "type": "USER_REGISTER",
         "msg": 1 //数字类型，表示当前共有多少待审核的用户
     }
     ```



- GCLOUD_WEBSITE_APPROVE_REQUEST  云站点申请审批事件

- GCLOUD_WEBSITE_RENEW_APPROVE_REQUEST  云站点续租申请事件

- GCLOUD_DESKTOP_APPROVE_REQUEST 云桌面申请事件

- GCLOUD_DESKTOP_RENEW_APPROVE_REQUEST  云桌面续租申请事件

  1. 用户提交申请后，向所有在线组织管理员发送用户申请消息。
  2. 组织管理员登录后，检查当前待审批的云站点请求，如果有则推送消息。

  消息体如下：



  ```javascript
  {
      "userId": [
          "0001"
      ],
      "createTime": "2018-06-12 16:35:37",
      "type": "GCLOUD_WEBSITE_APPROVE_REQUEST",
      "msg": 1 //数字类型，表示当前共有多少待审核的用户申请
  }
  ```

- GCLOUD_WEBSITE_APPROVE_REQUEST_PASSED  云站点申请审批通过事件消息

  GCLOUD_WEBSITE_APPROVE_REQUEST_REJECT  云站点申请审批驳回事件消息

  GCLOUD_WEBSITE_RENEW_APPROVE_REQUEST_PASSED 云站点续租申请通过
  GCLOUD_WEBSITE_RENEW_APPROVE_REQUEST_REJECT 云站点续租申请驳回

  GCLOUD_DESKTOP_APPROVE_REQUEST_PASS 云桌面申请通过
  GCLOUD_DESKTOP_APPROVE_REQUEST_REJECT 云桌面申请驳回

  GCLOUD_DESKTOP_RENEW_APPROVE_REQUEST_PASSED 云桌面续租申请通过
   GCLOUD_DESKTOP_RENEW_APPROVE_REQUEST_REJECT 云桌面续住申请驳回

  上述的消息事件，均在组织管理员完成操作处理以后，将执行的结果实时推送给云资源申请用户（在线）

  消息体如下 ：



  ```javascript
  {
      "userId": [
          "0001"
      ],
      "createTime": "2018-06-12 16:35:37",
      "type": "GCLOUD_WEBSITE_APPROVE_REQUEST_PASSED",
      "msg": "sitename" //字符串类型，站点、桌面名称
  }
  ```

