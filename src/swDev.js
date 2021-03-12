export default function swDev(){
    function determineAppServerKey(){
        var vapidPublicKey = "BCNxpr7Sy0iw_qkIQBX_8Wjx6a3dZnbPQ0agtM5GAR_05ujEWhZ8KWYP7qyaqDRwnMParZEvUwxsayUstsRlSpk";
        return urlBase64ToUint8Array(vapidPublicKey);
    }
    function urlBase64ToUint8Array(base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding)
            .replace(/\-/g, '+')
            .replace(/_/g, '/');
    
        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);
    
        for (var i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }

    let swUrl = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl).then((res)=>{
        console.log("res: ", res);
        return res.pushManager.getSubscription().then((subscription)=>{
            return res.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: determineAppServerKey()
            });
        })
    })
}