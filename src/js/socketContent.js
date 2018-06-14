let socketContent = [
    {
        role: 'sysadmin',
        msgType: [
            'GISTACK_LICENCE_EXPIRED',
            'ARCGIS_LICENCE_EXPIRED',
        ]
    },
    {
        role: 'orgadmin',
        msgType: [
            'USER_REGISTER',
            'GCLOUD_WEBSITE_APPROVE_REQUEST',
            'GCLOUD_WEBSITE_RENEW_APPROVE_REQUEST',
            'GCLOUD_DESKTOP_APPROVE_REQUEST',
            'GCLOUD_DESKTOP_RENEW_APPROVE_REQUEST',
        ]
    },
    {
        role: 'user',
        msgType:[
            'NORMAL_USER_SITE_LEASE_EXPIRED',
            'NORMAL_USER_SITE_AGS_LICENSE_EXPIRED',
            'NORMAL_USER_DESKTOP_LEASE_EXPIRED',
            'GCLOUD_WEBSITE_APPROVE_REQUEST_PASSED',
            'GCLOUD_WEBSITE_APPROVE_REQUEST_REJECT',
            'GCLOUD_WEBSITE_RENEW_APPROVE_REQUEST_PASSED',
            'GCLOUD_WEBSITE_RENEW_APPROVE_REQUEST_REJECT',
            'GCLOUD_DESKTOP_APPROVE_REQUEST_PASS',
            'GCLOUD_DESKTOP_APPROVE_REQUEST_REJECT',
            'GCLOUD_DESKTOP_RENEW_APPROVE_REQUEST_PASSED',
            'GCLOUD_DESKTOP_RENEW_APPROVE_REQUEST_REJECT',
        ]

    }
]
export {socketContent}
